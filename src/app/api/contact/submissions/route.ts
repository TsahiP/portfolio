import { NextRequest, NextResponse } from "next/server";
import { getContactSubmissions } from "@/lib/airtable";

export async function GET(request: NextRequest) {
  try {


    const submissions = await getContactSubmissions();
    
    return NextResponse.json({
      success: true,
      data: submissions,
      count: submissions.length
    });
    
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    
    if (error instanceof Error && error.message.includes('Airtable configuration')) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Server configuration error" 
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