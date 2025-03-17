import { NextResponse } from "next/server";
import { ref, update } from "firebase/database";
import { database } from "@/lib/firebaseConfig"; // Ensure Firebase is initialized properly

export async function PUT(req: Request) {
  try {
    const { id, ...updatedData } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, message: "IPO ID is required" }, { status: 400 });
    }

    const ipoRef = ref(database, `ipos/${id}`);

    await update(ipoRef, updatedData); // Update the IPO in Firebase

    return NextResponse.json({ success: true, message: "IPO updated successfully!", data: updatedData });

  } catch (error) {
    console.error("Error updating IPO:", error);
    return NextResponse.json({ success: false, message: "Error updating IPO" }, { status: 500 });
  }
}
