import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { backendClient } from "@/lib/edgestore-server";



export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const serviceCards = await db.serviceCards.findMany()
        return Response.json(serviceCards)
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const { id, serviceName, serviceDescription, serviceImage, redirectTo } = await req.json()

        const serviceCardExists = await db.serviceCards.findFirst({
            where: {
                id: id
            }
        })

        if (!serviceCardExists) return Response.json({ "error": "serviceCard doesn't exists" }, { status: 400 })

        const res = await backendClient.publicFiles.deleteFile({
            // @ts-ignore
            url: serviceCardExists?.serviceImage,
        });
        await db.serviceCards.update({
            data: {
                serviceName,
                serviceDescription,
                serviceImage,
                redirectTo
            },
            where: {
                id: id
            }
        })

        return Response.json({ "success": "Service card updated" })

    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { serviceName, serviceDescription, serviceImage, redirectTo } = await req.json();
        if (!serviceName || !serviceDescription || !serviceImage) {
            return Response.json({ "error": "servieName, serviceDescription and serviceImage are required" }, { status: 400 });
        }
        const serviceNameExists = await db.serviceCards.findFirst({
            where: {
                serviceName: serviceName
            }
        })
        if (serviceNameExists) return Response.json({ "error": "servieName already exists" }, { status: 409 });
        await db.serviceCards.create({
            data: {
                serviceName,
                serviceDescription,
                serviceImage,
                redirectTo
            }
        })
        return Response.json({ "success": "Service Card created" })

    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 })
    }
}



export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        const { id } = await req.json();
        const idExists = await db.serviceCards.findFirst({
            where: {
                id: id
            }
        })
        if (!idExists) return Response.json({ "error": "No services found" }, { status: 400 })

        const res = await backendClient.publicFiles.deleteFile({
            // @ts-ignore
            url: idExists?.serviceImage,
        });
        await db.serviceCards.delete({
            where: {
                id: id
            }
        })
        return Response.json({ "success": "Service deleted successfully" })
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 })
    }
}