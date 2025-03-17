import { NextResponse } from "next/server";
import { database } from "@/lib/firebaseConfig";
import { ref, get } from "firebase/database";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id"); // Extract IPO ID from query params

    if (!id) {
      return NextResponse.json({ success: false, message: "IPO ID is required" }, { status: 400 });
    }

    // Reference to the specific IPO in Firebase
    const ipoRef = ref(database, `ipos/${id}`);

    // Fetch IPO data
    const snapshot = await get(ipoRef);

    if (!snapshot.exists()) {
      return NextResponse.json({ success: false, message: "IPO not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: snapshot.val() });
  } catch (error) {
    console.error("Error fetching IPO:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
