import { NextRequest, NextResponse } from "next/server";
import { database, ref, push } from "@/lib/firebaseConfig";

// Handle POST requests
export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email || typeof email !== "string" || !email.includes("@")) {
            return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
        }

        const emailsRef = ref(database, "subscribers");
        await push(emailsRef, { email });

        return NextResponse.json({ message: "Email saved successfully!" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "Error saving email", error: error.message }, { status: 500 });
    }
}
