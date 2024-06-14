import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const testimonials = await db.teamTestimonial.findMany();
    return Response.json(testimonials);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { id } = await req.json();
    if (!id) return Response.json({ error: "id is required" }, { status: 400 });
    const idExists = await db.teamTestimonial.findFirst({ where: { id } });
    if (!idExists)
      return Response.json({ error: "id not found" }, { status: 400 });
    await db.teamTestimonial.delete({ where: { id } });
    return Response.json({ success: "Team testimonial deleted successfully" });
  } catch (error) {
    console.log(error);

    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { id, status } = await req.json();
    if (!id || !status)
      return Response.json(
        { error: "id and status are required" },
        { status: 400 }
      );
    const statuses = ["pending", "approved", "rejected"];
    if (!statuses.includes(status))
      return Response.json({ error: "Invalid status" });
    await db.teamTestimonial.update({
      data: {
        status,
      },
      where: { id },
    });
    return Response.json({ success: "Team testimonial updated" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, role, description, rating, ourTeamId } = await req.json();
    if (!name || !role || !description || rating == null || !ourTeamId) {
      return Response.json(
        {
          error: "name, role, description, rating, and ourTeamId are required",
        },
        { status: 400 }
      );
    }
    if (isNaN(parseInt(rating)) || rating < 0)
      return Response.json({ error: " rating must be positive integer" });
    const teamMemberExists = await db.ourTeam.findFirst({
      where: { id: ourTeamId },
    });
    if (!teamMemberExists)
      return Response.json({ error: "Team member does not exist!" });

    await db.teamTestimonial.create({
      data: {
        name,
        role,
        description,
        rating,
        ourTeamId,
      },
    });

    return Response.json({ success: "Testimonial added successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
