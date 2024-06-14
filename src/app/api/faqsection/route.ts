import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";



export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const fAQSection = await db.fAQSection.findFirst();
        return Response.json(fAQSection);
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}



export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { id, title } = await req.json()
        if (!id || !title) return Response.json({ "error": "id and title are required" }, { status: 400 })
        const idExists = await db.fAQSection.findFirst({
            where: { id }
        })
        if (!idExists) return Response.json({ "error": "id doesn't exist" }, { status: 400 })

        await db.fAQSection.update({
            data: {
                title
            },
            where: {
                id
            }
        })
        return Response.json({ "success": "FAQ Section updated successfully" })

    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}



