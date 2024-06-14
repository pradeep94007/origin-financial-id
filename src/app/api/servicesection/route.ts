import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";



export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const serviceSectionTitle = await db.serviceSection.findFirst()
        return Response.json(serviceSectionTitle)
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { serviceSectionTitle } = await req.json()
        const serviceSectionTitleExists = await db.serviceSection.findFirst()
        if (!serviceSectionTitleExists) return Response.json({ "error": "serviceSectionTitle doesn't exists" }, { status: 400 })
        await db.serviceSection.update({
            data: {
                serviceSectionTitle: serviceSectionTitle
            },
            where: {
                id: serviceSectionTitleExists.id
            }
        })


        return Response.json({ "success": "Service card updated" })

    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 })
    }
}

