import { NextResponse } from "next/server";
import { ref, remove } from "firebase/database";
import { database } from "@/lib/firebaseConfig"; // Ensure Firebase is initialized properly

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, message: "IPO ID is required" }, { status: 400 });
    }

    const ipoRef = ref(database, `ipos/${id}`);

    await remove(ipoRef); // Delete the IPO from Firebase

    return NextResponse.json({ success: true, message: "IPO deleted successfully!" });

  } catch (error) {
    console.error("Error deleting IPO:", error);
    return NextResponse.json({ success: false, message: "Error deleting IPO" }, { status: 500 });
  }
}
