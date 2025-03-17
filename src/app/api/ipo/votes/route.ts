import { database } from "@/lib/firebaseConfig";
import { ref, get, set } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { ipoId, voteType } = body;

    if (!ipoId || !voteType) {
      console.log("🚨 Missing ipoId or voteType:", body);
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const voteRef = ref(database, `votes/${ipoId}/${voteType}`);

    // Get current vote count
    const snapshot = await get(voteRef);
    const currentCount = snapshot.exists() ? snapshot.val() : 0;

    console.log(`📌 Current Votes for ${ipoId} - ${voteType}:`, currentCount);

    // Increment vote count
    await set(voteRef, currentCount + 1);
    console.log(`✅ Vote updated: ${ipoId} - ${voteType} = ${currentCount + 1}`);

    return NextResponse.json({ message: "Vote stored successfully" }, { status: 200 });
  } catch (error) {
    console.error("🔥 Failed to store vote:", error);
    return NextResponse.json({ error: "Failed to store vote" }, { status: 500 });
  }
}
