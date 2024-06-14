import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const originTestimonials = await db.originTestimonials.findMany()
        return Response.json(originTestimonials)
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}


export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { id, name, role, testimonialDesc, image } = await req.json()
        if (!id || !name || !role || !testimonialDesc || !image) return Response.json({ "error": "id, name, role, testimonialDesc, image is required" }, { status: 400 })
        const idExists = await db.originTestimonials.findFirst({
            where: {
                id: id
            }
        })
        if (!idExists) return Response.json({ "error": "id not found" }, { status: 400 })
        await db.originTestimonials.update({
            data: {
                name: name,
                role: role,
                testimonialDesc: testimonialDesc,
                image: image
            },
            where: {
                id: id
            }
        })
        return Response.json({ "success": "Origin testimonial updated" })
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, role, testimonialDesc, image } = await req.json()
        if (!name || !role || !testimonialDesc || !image) return Response.json({ "error": "name, role, testimonialDesc, image is required" }, { status: 400 })
        const nameExists = await db.originTestimonials.findFirst({
            where: {
                name
            }
        })
        if (nameExists) return Response.json({ "error": "name already exists" }, { status: 409 })
        await db.originTestimonials.create({
            data: {
                name, role, testimonialDesc, image
            }
        })
        return Response.json({ "success": "Origin testimonial created" })
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        const { id } = await req.json()
        const idExists = await db.originTestimonials.findFirst({
            where: {
                id
            }
        });
        if (!idExists) return Response.json({ "error": "id not found" }, { status: 400 })
        await db.originTestimonials.delete({
            where: {
                id: id
            }
        })
        return Response.json({ "success": "Origin testimonial deleted successfully" })
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}