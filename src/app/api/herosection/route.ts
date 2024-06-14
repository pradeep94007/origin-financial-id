import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";


/**
 * Retrieves the hero section data from the database.
 * @returns {Promise<Object>} The hero section data.
 */
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const heroSection = await db.heroSection.findFirst();
        return Response.json(heroSection);
    } catch (error) {
        console.log(error)
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}

/**
 * Updates the hero section based on the provided ID.
 * @param {Object} req The HTTP request object containing the updated hero section data.
 * @param {Object} res The HTTP response object.
 * @returns {Promise<Object>} A success or error message.
 */
export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        // console.log("")
        const { id, title, description, buttonText } = await req.json();
        if (!id || !title || !description || !buttonText) {
            return Response.json({ "error": "id, title, description, buttonText is requird" }, { status: 400 })
        }
        const idExists = await db.heroSection.findFirst({
            where: {
                id: id
            }
        });
        if (!idExists) {
            return Response.json({ "error": "id doesn't exist" }, { status: 400 });
        }
        await db.heroSection.update({
            data: {
                title, description, buttonText
            },
            where: {
                id: id
            }
        });
        return Response.json({ "success": "Hero Section Updated" });
    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}
