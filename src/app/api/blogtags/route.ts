import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const tags = await db.tags.findMany()
        return Response.json(tags)
    } catch (error) {
        console.log(error);
        return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
}