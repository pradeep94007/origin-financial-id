import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const careerPageDetails = await db.careerPage.findFirst()
        return Response.json(careerPageDetails)
    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}


export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { id, title, RTDescription, buttonText } = await req.json()
        if (!id || !title || !RTDescription || !buttonText) return Response.json({ "error": "id, title, RTDescription, buttonText" }, { status: 400 })
        const idExists = await db.careerPage.findFirst({
            where: {
                id: id
            }
        });
        if (!idExists) return Response.json({ "error": "id doesn't exist" }, { status: 400 });

        await db.careerPage.update({
            data: {
                title: title,
                RTDescription: RTDescription,
                buttonText: buttonText
            },
            where: {
                id: id
            }
        })
        return Response.json({"success":"Career Page updated successfully"})

    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}