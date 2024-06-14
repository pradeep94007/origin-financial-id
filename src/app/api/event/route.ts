import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { backendClient } from "@/lib/edgestore-server";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const id = req.nextUrl.searchParams.get("id")
        const show = req.nextUrl.searchParams.get("show")
        if (id) {
            const event = await db.events.findFirst({ where: { id } })
            if (!event) return Response.json({ "error": "No event found" })
            if (show == 'true') {
                const pastEvents = await db.events.findMany({
                    where: { id: { not: id } },
                    take: 5
                });
                return Response.json({ event, pastEvents })
            }
            return Response.json(event)
        }

        const events = await db.events.findMany()
        return Response.json(events)
    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, bannerImage, title, description, dateOfEvent, location } = await req.json()
        if (!name || !bannerImage || !title || !description || !dateOfEvent || !location) {
            return Response.json({ error: "name, bannerImage, title, description, dateofEvent and location is required" })
        }

        const nameExists = await db.events.findFirst({ where: { name } })
        if (nameExists) return Response.json({ "error": "Event with same name already exist" }, { status: 409 })

        await db.events.create({
            data: {
                name,
                bannerImage,
                title,
                description,
                dateOfEvent,
                location
            }
        })
        return Response.json({ "success": "Event created successfully!" })

    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}


export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { id, name, bannerImage, title, description, dateOfEvent, location } = await req.json()
        if (!id || !name || !bannerImage || !title || !description || !dateOfEvent || !location) {
            return Response.json({ error: "id, name, bannerImage, title, description, dateofEvent and location is required" })
        }
        const idExists = await db.events.findFirst({ where: { id } })
        if (!idExists) return Response.json({ "error": "Id not found" }, { status: 400 })

        const res = await backendClient.publicFiles.deleteFile({
            // @ts-ignore
            url: idExists?.bannerImage,
        });
        await db.events.update({
            data: { name, bannerImage, title, description, dateOfEvent, location },
            where: { id }
        })
        return Response.json({ "success": "Event updated successfully" })
    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}


export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        const { id } = await req.json();
        if (!id) return Response.json({ "error": "id is required" }, { status: 400 })
        const idExists = await db.events.findFirst({ where: { id } })

        if (!idExists) return Response.json({ "error": "Id not found" }, { status: 400 })

        const res = await backendClient.publicFiles.deleteFile({
            // @ts-ignore
            url: idExists?.bannerImage,
        });
        await db.events.delete({ where: { id } })
        return Response.json({ "success": "Event deleted successfully" })
    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}