import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { backendClient } from "@/lib/edgestore-server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // Get all products
        const products = await db.productsCards.findMany()
        // Return all Products
        return Response.json(products)
    } catch (error: any) {
        // Throw error in user friendly manner while retrieving the cards
        console.log(error)
        return Response.json({ "error": error.message })
    }
}

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        // Required JSON data
        const { id, name, category, description, image, icons, color } = await req.json()
        // If any data is missing, return an error
        if (!id || !name || !description || !image || !category || !icons || !color) return Response.json({ "error": "id,name, category, description, image, icons, color is required" }, { status: 400 })
        // Check if the id exists
        const productExists = await db.productsCards.findFirst({
            where: {
                id: id
            }
        })
        // If product doesn't exists then return friendly error
        if (!productExists) return Response.json({ "error": "product doesn't exists" }, { status: 400 })
        const res = await backendClient.publicFiles.deleteFile({
            // @ts-ignore
            url: productExists?.image,
        });

        // Check if category exists
        const categoryExists = await db.productCategories.findFirst({ where: { name: category } })

        // If category doesn't exists create an entry in product category table
        if (!categoryExists) await db.productCategories.create({ data: { name: category } })


        // Update the product
        await db.productsCards.update({
            data: {
                name, category, description, image, icons, color

            },
            where: {
                id: id
            }
        })

        // return success message
        return Response.json({ "success": "product updated" })

    } catch (error: any) {
        // Throw error in user friendly manner while retrieving the cards
        console.log(error)
        return Response.json({ "error": error.message })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        // Required JSON data
        const { name, category, description, image, icons, color } = await req.json()
        // If any data is missing return an error


        if (!name || !category || !description || !image || !icons || !color) return Response.json({ "error": "name, category, description, image, icons, color is required" }, { status: 400 })
        // Check if the same name exists
        const productNameExists = await db.productsCards.findFirst({
            where: {
                name: name
            }
        })
        // If same name exists return an error
        if (productNameExists) return Response.json({ "error": "Product name already exists" }, { status: 409 });
        // Check if category exists
        const categoryExists = await db.productCategories.findFirst({ where: { name: category } })

        // If category doesn't exists create an entry in product category table
        if (!categoryExists) await db.productCategories.create({ data: { name: category } })

        // // Else, create the product
        await db.productsCards.create({
            data: {
                name, category, description, image, icons, color
            }
        })
        // Return success message
        return Response.json({ "success": "Product created" })
    } catch (error: any) {
        // Throw error in user friendly manner while retrieving the cards
        console.log(error)
        return Response.json({ "error": error.message })
    }
}


export async function DELETE(req: NextRequest, res: NextResponse) {
    try {
        // Required id
        const { id } = await req.json();
        // Check if id exists
        const idExists = await db.productsCards.findFirst({
            where: {
                id: id
            }
        })
        // If id doesn't exists return an error
        if (!idExists) return Response.json({ "error": "No product found" }, { status: 400 })

        // delete the product based on id 
        await db.productsCards.delete({
            where: {
                id: id
            }
        })
        // Return success message
        return Response.json({ "success": "Product deleted successfully" })
    } catch (error: any) {
        // Throw error in user friendly manner while retrieving the cards
        console.log(error)
        return Response.json({ "error": error.message })
    }
}