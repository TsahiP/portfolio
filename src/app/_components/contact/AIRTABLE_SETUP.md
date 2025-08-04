# Airtable Integration Setup Guide

This guide will help you set up Airtable to store your contact form submissions.

## Step 1: Create an Airtable Base

1. Go to [Airtable.com](https://airtable.com) and create a new base
2. Create a new table called "Contact Submissions" (or any name you prefer)
3. Add the following fields to your table:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| Name | Single line text | Contact's name |
| Email | Email | Contact's email address |
| Subject | Single line text | Message subject |
| Message | Long text | Contact's message |
| Submission Date | Date | When the form was submitted |
| Status | Single select | Status of the submission (New, Read, Replied, etc.) |

## Step 2: Get Your Airtable Credentials

### API Key
1. Go to [Airtable Account](https://airtable.com/account)
2. Click on "Generate API key"
3. Copy the generated API key

### Base ID
1. Open your Airtable base in the browser
2. Look at the URL: `https://airtable.com/BASE_ID/tbl...`
3. Copy the BASE_ID part (it's a long string like `appXXXXXXXXXXXXXX`)

## Step 3: Set Up Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Airtable Configuration
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE_ID=your_airtable_base_id_here
AIRTABLE_TABLE_NAME=Contact Submissions
```

Replace the placeholder values with your actual Airtable credentials.

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your Airtable base to see if the submission was recorded
4. Check the browser console for any error messages

## Step 5: Optional - Email Notifications

You can also set up email notifications when new submissions are received. Uncomment and configure the email code in `/api/contact/route.ts`.

## Troubleshooting

### Common Issues:

1. **"Airtable configuration is missing" error**
   - Make sure your `.env.local` file exists and has the correct variables
   - Restart your development server after adding environment variables

2. **"Table not found" error**
   - Check that the table name in your environment variables matches exactly
   - Table names are case-sensitive

3. **"API key invalid" error**
   - Verify your API key is correct
   - Make sure you have access to the base with that API key

4. **Field mapping errors**
   - Ensure your Airtable table has all the required fields
   - Field names must match exactly (including case)

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in your `.gitignore`
- Keep your API key secure and don't share it publicly

## Airtable Features You Can Use

Once set up, you can:

- **View submissions** in a spreadsheet-like interface
- **Filter and sort** submissions by any field
- **Create views** to organize submissions (e.g., "New", "Replied", "Archived")
- **Set up automations** to send notifications or update records
- **Export data** to CSV, JSON, or other formats
- **Create dashboards** to visualize your contact data
- **Integrate with other tools** via Airtable's API

## Example Airtable Views

You might want to create these views in your Airtable base:

1. **All Submissions** - Shows all contact form submissions
2. **New Submissions** - Shows only submissions with status "New"
3. **Replied** - Shows submissions you've responded to
4. **This Week** - Shows submissions from the current week
5. **By Subject** - Groups submissions by subject type 