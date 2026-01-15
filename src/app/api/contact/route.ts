import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  restaurantName: string;
  locations: string;
  postcode: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.restaurantName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the form submission (in production, you'd send this to a CRM, email service, etc.)
    console.log("========================================");
    console.log("NEW CONTACT FORM SUBMISSION");
    console.log("========================================");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Name:", data.name);
    console.log("Restaurant:", data.restaurantName);
    console.log("Locations:", data.locations);
    console.log("Postcode:", data.postcode);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
    console.log("Interested Services:", data.services.join(", ") || "None specified");
    console.log("Message:", data.message || "No message provided");
    console.log("========================================");

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your enquiry. We'll be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}

