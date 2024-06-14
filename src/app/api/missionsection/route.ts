import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { backendClient } from "@/lib/edgestore-server";



/**
 * Retrieves the hero section data from the database.
 * @returns {Promise<Object>} The hero section data.
 */
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const missionSection = await db.missionSection.findFirst();
        return Response.json(missionSection);
    } catch (error) {
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
        const { id, missionTitle, missionText, visionText, sectionImage } = await req.json();
        if (!id || !missionTitle || !missionText || !visionText || !sectionImage) {
            return Response.json({ "error": "id, missionTitle, missionText, visionText, sectionImage is requird" }, { status: 400 })
        }
        const idExists = await db.missionSection.findFirst({
            where: {
                id: id
            }
        });


        if (!idExists) {
            return Response.json({ "error": "id doesn't exist" }, { status: 400 });
        }

        const res = await backendClient.publicFiles.deleteFile({
            // @ts-ignore
            url: idExists?.sectionImage,
        });
        await db.missionSection.update({
            data: {
                missionTitle, missionText, visionText, sectionImage
            },
            where: {
                id: id
            }
        });
        return Response.json({ "success": "Mission Section Updated" });
    } catch (error) {
        console.log(error);
        return Response.json({ "error": "Something went wrong" }, { status: 500 });
    }
}
