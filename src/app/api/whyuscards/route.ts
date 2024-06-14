import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { backendClient } from "@/lib/edgestore-server";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // Finds all data in why us cards table
        const WhyUsCards = await db.whyUsCards.findMany()
        return Response.json(WhyUsCards)
    } catch (error: any) {
        // Throw error in user friendly manner while retrieving the cards
        console.log(error)
        return Response.json({ "error": error.message })
    }

}


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        // Required parameters to create why us cards
        const { icon, title, description, redirectTo, color } = await req.json()
        if (!icon || !title || !description || !redirectTo || !color) {
            // Return an error with 404, parameters not found
            return Response.json({ "error": "icon, title, description, redirectTo and color is required" }, { status: 400 })
        }
        // Check if same title exists 
        const titleExists = await db.whyUsCards.findFirst({ where: { title } })
        // Card already exists with same name
        if (titleExists) return Response.json({ "error": "title with same name already exists" }, { status: 409 })
        // create the card
        await db.whyUsCards.create({
            data: {
                icon,
                title,
                description,
                redirectTo,
                color
            }
        })

        // return success message
        return Response.json({ "success": "Card created" })

    } catch (error: any) {
        // Throw error in user friendly manner while creating the cards
        console.log(error)
        return Response.json({ "error": error.message })
    }
}



export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        // Required parameters to update why us cards
        const { id, icon, title, description, redirectTo, color } = await req.json()
        if (!id || !icon || !title || !description || !redirectTo || !color) {
            // Return an error with 404, parameters not found
            return Response.json({ "error": "id, icon, title, description, redirectTo and color is required" }, { status: 400 })
        }
        // Check if the given id exists
        const idExists = await db.whyUsCards.findFirst({ where: { id } })

        // if not exists then return an error message
        if (!idExists) return Response.json({ "error": "id doesn't exists" })

        const res = await backendClient.publicFiles.deleteFile({
            // @ts-ignore
            url: idExists?.icon,
        });
        // update the card
        await db.whyUsCards.update({
            data: {
                icon,
                title,
                description,
                redirectTo,
                color
            },
            where: {
                id
            }
        })

        // return success message
        return Response.json({ "success": "Card updated" })

    } catch (error: any) {
        // Throw error in user friendly manner while updating the card
        console.log(error)
        return Response.json({ "error": error.message })
    }
}



export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        // id is required to delete
        const { id } = await req.json();
        // Check if id exists
        const idExists = await db.whyUsCards.findFirst({
            where: {
                id: id
            }
        })
        // return error if id not found
        if (!idExists) return Response.json({ "error": "id not found" }, { status: 400 })

        // Delete the card
        await db.whyUsCards.delete({
            where: {
                id: id
            }
        })
        return Response.json({ "success": "Service deleted successfully" })
    } catch (error: any) {
        // Throw error in user friendly manner while deleting the cards
        console.log(error)
        return Response.json({ "error": error.message })
    }
}