import Airtable from 'airtable';

// Airtable configuration
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Contact Submissions';

// Initialize Airtable
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID!);

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Airtable record type
export interface AirtableRecord {
  id: string;
  fields: {
    Name: string;
    Email: string;
    Subject: string;
    Message: string;
    Date: string;
    Status?: string;
  };
}

/**
 * Create a new contact submission record in Airtable
 */
export async function createContactSubmission(data: ContactFormData): Promise<AirtableRecord> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    throw new Error('Airtable configuration is missing. Please set AIRTABLE_API_KEY and AIRTABLE_BASE_ID environment variables.');
  }

  const record = await base(AIRTABLE_TABLE_NAME).create([
    {
      fields: {
        'Name': data.name,
        'Email': data.email,
        'Subject': data.subject,
        'Message': data.message,
        'Date': new Date().toISOString().split('T')[0],
        'Status': 'New'
      }
    }
  ]);

  return record[0] as unknown as AirtableRecord;
}

/**
 * Get all contact submissions from Airtable
 */
export async function getContactSubmissions(): Promise<AirtableRecord[]> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    throw new Error('Airtable configuration is missing. Please set AIRTABLE_API_KEY and AIRTABLE_BASE_ID environment variables.');
  }

  const records = await base(AIRTABLE_TABLE_NAME)
    .select({
      sort: [{ field: 'Date', direction: 'desc' }]
    })
    .all();

  return records as unknown as AirtableRecord[];
}

/**
 * Update the status of a contact submission
 */
export async function updateContactStatus(recordId: string, status: string): Promise<AirtableRecord> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    throw new Error('Airtable configuration is missing. Please set AIRTABLE_API_KEY and AIRTABLE_BASE_ID environment variables.');
  }

  const record = await base(AIRTABLE_TABLE_NAME).update([
    {
      id: recordId,
      fields: {
        'Status': status
      }
    }
  ]);

  return record[0] as unknown as AirtableRecord;
} 