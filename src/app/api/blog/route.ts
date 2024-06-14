import { db } from "@/lib/db";
import { useEdgeStore } from "@/lib/edgestore";
import { backendClient } from "@/lib/edgestore-server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const blogs = await db.blogs.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        details: true,
        image: true,
        isFeatured: true,
        tag: {
          select: {
            id: false,
            name: true,
          },
        },
      },
    });

    return Response.json(blogs);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, description, image, tag, isFeatured, details } =
      await req.json();
    if (!name || !description || !image || !tag || !details)
      return Response.json(
        { error: "name, description, tag, image, details is required" },
        { status: 400 }
      );

    const blogExists = await db.blogs.findFirst({
      where: { name },
    });

    if (blogExists)
      return Response.json({ error: "Blog already exists" }, { status: 409 });
    const countFeatured = await db.blogs.findMany({
      where: {
        isFeatured: true,
      },
    });
    if (countFeatured.length === 4 && isFeatured)
      return Response.json(
        { error: "Featured blogs can only be set for total 4 blogs" },
        { status: 400 }
      );
    let tagRecord = await db.tags.findFirst({
      where: { name: tag.name },
    });

    if (!tagRecord) {
      tagRecord = await db.tags.create({
        data: { name: tag.name },
      });
    }

    await db.blogs.create({
      data: {
        name,
        details,
        description,
        image,
        tagsId: tagRecord.id,
        isFeatured,
      },
    });

    return Response.json({ success: "Blog added successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { id, name, description, image, tag, isFeatured, details } =
      await req.json();
    if (!id || !name || !description || !image || !tag || !details)
      return Response.json(
        { error: "id, name, description, image, details, tag is required" },
        { status: 400 }
      );

    const blog = await db.blogs.findFirst({
      where: { id },
    });

    const res = await backendClient.publicFiles.deleteFile({
      // @ts-ignore
      url: blog?.image,
    });

    // Check the count of featured blogs excluding the current blog if it's already featured
    const countFeatured = await db.blogs.count({
      where: {
        isFeatured: true,
        id: { not: id },
      },
    });

    if (isFeatured && countFeatured >= 4) {
      return Response.json(
        { error: "isFeatured can only be set for a total of 4 blogs" },
        { status: 400 }
      );
    }



    if (!blog)
      return Response.json({ error: "No blog found" }, { status: 404 });

    let tagRecord = await db.tags.findFirst({
      where: { name: tag.name },
    });

    if (!tagRecord) {
      tagRecord = await db.tags.create({
        data: { name: tag.name },
      });
    }

    await db.blogs.update({
      data: {
        name,
        description,
        details,
        image,
        tagsId: tagRecord.id,
        isFeatured,
      },
      where: { id },
    });

    return Response.json({ success: "Blog updated" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { id } = await req.json();
    const idExists = await db.blogs.findFirst({
      where: {
        id: id,
      },
    });

    if (!idExists)
      return Response.json({ error: "No blog found" }, { status: 400 });

    const res = await backendClient.publicFiles.deleteFile({
      // @ts-ignore
      url: idExists?.image,
    });
    await db.blogs.delete({
      where: {
        id: id,
      },
    });
    return Response.json({ success: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
