import { NextRequest, NextResponse } from "next/server";
import { database } from "@/lib/firebaseConfig";
import { ref, get } from "firebase/database";

export async function GET(req: NextRequest) {
  try {
    // Get the query parameters
    const { searchParams } = new URL(req.url);
    const ipoId = searchParams.get("ipoId");

    if (!ipoId) {
      return NextResponse.json({ error: "Missing ipoId parameter" }, { status: 400 });
    }

    const voteRef = ref(database, `votes/${ipoId}`);
    const snapshot = await get(voteRef);

    if (!snapshot.exists()) {
      return NextResponse.json({ bearish: 0, bullish: 0, superBullish: 0 }, { status: 200 });
    }

    return NextResponse.json(snapshot.val(), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch votes" }, { status: 500 });
  }
}
