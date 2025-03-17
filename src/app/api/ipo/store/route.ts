import { NextRequest, NextResponse } from "next/server";
import { addIpo } from "../../../../models/Ipo"; // Import the Firebase function

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // Parse request body
    const newIpoId = await addIpo(data); // Save data to Firebase

    return NextResponse.json({
      success: true,
      message: "IPO added successfully!",
      id: newIpoId, // Return the new IPO ID
    });
  } catch (error) {
    console.error("Error storing IPO data:", error);
    return NextResponse.json(
      { success: false, message: "Error storing IPO data" },
      { status: 500 }
    );
  }
}
