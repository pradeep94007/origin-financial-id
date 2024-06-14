import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";



export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const productSectionTitle = await db.productSection.findFirst()
        return Response.json(productSectionTitle)
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 })
    }
}



export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { productSectionTitle } = await req.json()
        if (!productSectionTitle) return Response.json({ "error": "productSectionTitle is required" }, { status: 400 })
        const productSectionTitleExists = await db.productSection.findFirst()
        if (!productSectionTitleExists) return Response.json({ "error": "productSectionTitle doesn't exists" }, { status: 400 })
        await db.productSection.update({
            data: {
                productSectionTitle: productSectionTitle
            },
            where: {
                id: productSectionTitleExists.id
            }
        })
        return Response.json({ "success": "product updated" })

    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 })
    }
}