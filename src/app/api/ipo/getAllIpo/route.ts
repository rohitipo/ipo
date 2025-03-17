import { NextResponse } from "next/server";
import { database } from "@/lib/firebaseConfig"; // Import Firebase config
import { ref, get } from "firebase/database";
import { updateIpoStatuses } from "@/lib/updateIpoStatus";

export async function GET() {
  try {
    // Reference to the IPOs collection in Firebase
    await updateIpoStatuses();
    const iposRef = ref(database, "ipos");

    // Fetch IPO data
    const snapshot = await get(iposRef);
    if (!snapshot.exists()) {
      return NextResponse.json({ success: true, data: [] });
    }

    // Get the data from Firebase
    const ipoData = snapshot.val();

    // Ensure ipoData is an object before spreading
    if (ipoData && typeof ipoData === "object") {
      const ipos = Object.entries(ipoData).map(([id, data]) => ({
        id, // Include Firebase document ID
        ...(typeof data === "object" ? data : {}), // Ensure 'data' is an object
      }));

      return NextResponse.json({ success: true, data: ipos });
    }

    return NextResponse.json({ success: true, data: [] }); // Empty response if ipoData is invalid
  } catch (error) {
    console.error("Error fetching IPO data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch IPO data" },
      { status: 500 }
    );
  }
}
