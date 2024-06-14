import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";



export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const faqs = await db.fAQs.findMany();
        return Response.json(faqs);
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { question, answer } = await req.json()
        if (!question || !answer) return Response.json({ "error": "question and answer are required" }, { status: 400 })
        const questionExist = await db.fAQs.findFirst({
            where: {
                question
            }
        })
        if (questionExist) return Response.json({ "error": "same question already exists" }, { status: 409 })
        await db.fAQs.create({
            data: {
                question, answer
            }
        })
        return Response.json({ "success": "FAQ created successfully" })
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { id, question, answer } = await req.json()
        if (!id || !question || !answer) return Response.json({ "error": "id, question and answer is required" }, { status: 400 })
        const idExists = await db.fAQs.findFirst({
            where: { id }
        })
        if (!idExists) return Response.json({ "error": "id doesn't exist" }, { status: 400 })

        await db.fAQs.update({
            data: {
                question,
                answer
            },
            where: {
                id
            }
        })
        return Response.json({ "success": "FAQ updated successfully" })

    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}



export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        const { id } = await req.json()
        if (!id) return Response.json({ "error": "id is required" }, { status: 400 })
        const idExists = await db.fAQs.findFirst({
            where: { id }
        })
        if (!idExists) return Response.json({ "error": "id doesn't exist" }, { status: 400 })

        await db.fAQs.delete({
            where: { id }
        })
        return Response.json({ "success": "FAQ deleted successfully" })

    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}


