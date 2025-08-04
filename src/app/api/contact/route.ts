import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createContactSubmission } from "@/lib/airtable";
import { contactFormSchema } from "@/app/lib/schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body);
    
    // Store the contact submission in Airtable
    const airtableRecord = await createContactSubmission(validatedData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Message sent successfully!",
        recordId: airtableRecord.id
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    // Handle Airtable-specific errors
    if (error instanceof Error && error.message.includes('Airtable configuration')) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Server configuration error. Please contact the administrator." 
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error" 
      },
      { status: 500 }
    );
  }
} 