import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const careerSectionDetails = await db.careerSection.findFirst()
        return Response.json(careerSectionDetails)
    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}


export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { id, title, description, button1Text, button2Text } = await req.json()
        if (!id || !title || !description || !button1Text || !button2Text) return Response.json({ "error": "id, title, description, button1Text, button2Text are required" }, { status: 400 })
        const idExists = await db.careerSection.findFirst({
            where: {
                id: id
            }
        })
        if (!idExists) return Response.json({ "error": "id not found" }, { status: 400 })
        await db.careerSection.update({
            data: {
                title: title,
                description: description,
                button1Text: button1Text,
                button2Text: button2Text
            },
            where: {
                id: id
            }
        })
        return Response.json({ "success": "Career Section updated" })
    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}
