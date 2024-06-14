import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // Retreive all products categories
        const productCategories = await db.productCategories.findMany()
        // Return categories
        return Response.json(productCategories)

    } catch (error: any) {
        // Throw error in user friendly manner while retrieving the cards
        console.log(error)
        return Response.json({ "error": error.message })
    }
}