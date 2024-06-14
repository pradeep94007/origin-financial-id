import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const team = await db.ourTeam.findMany({
      include: {
        testimonials: true,
      },
    });
    return Response.json(team);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const {
      id,
      fullName,
      role,
      profileImage,
      bannerImage,
      description,
      professionalQualifications,
      certificationQualification,
      hobbies,
      meansToYou,
    } = await req.json();
    if (
      !id ||
      !fullName ||
      !role ||
      !profileImage ||
      !bannerImage ||
      !description ||
      !professionalQualifications ||
      !certificationQualification ||
      !hobbies ||
      !meansToYou
    ) {
      return Response.json(
        {
          error:
            "id, fullName, role, profileImage, bannerImage, description, professionalQualifications, certificationQualification, hobbies, meansToYou are requried",
        },
        { status: 400 }
      );
    }

    const teamMemberExists = await db.ourTeam.findFirst({
      where: {
        id: id,
      },
    });

    if (!teamMemberExists)
      return Response.json(
        { error: "Team member does not exists!" },
        { status: 400 }
      );
    await db.ourTeam.update({
      data: {
        fullName,
        role,
        profileImage,
        bannerImage,
        description,
        professionalQualifications,
        certificationQualification,
        hobbies,
        meansToYou,
      },
      where: {
        id: id,
      },
    });

    return Response.json({
      success: "Team member detail updated successfully",
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const {
      fullName,
      role,
      profileImage,
      bannerImage,
      description,
      professionalQualifications,
      certificationQualification,
      hobbies,
      meansToYou,
    } = await req.json();
    if (
      !fullName ||
      !role ||
      !profileImage ||
      !bannerImage ||
      !description ||
      !professionalQualifications ||
      !certificationQualification ||
      !hobbies ||
      !meansToYou
    ) {
      return Response.json(
        {
          error:
            "fullName, role, profileImage, bannerImage, description, professionalQualifications, certificationQualification, hobbies, meansToYou are requried",
        },
        { status: 400 }
      );
    }

    const teamMemberExists = await db.ourTeam.findFirst({
      where: {
        fullName: fullName,
      },
    });

    if (teamMemberExists)
      return Response.json(
        { error: "Team member already exists!" },
        { status: 409 }
      );

    await db.ourTeam.create({
      data: {
        fullName,
        role,
        profileImage,
        bannerImage,
        description,
        professionalQualifications,
        certificationQualification,
        hobbies,
        meansToYou,
      },
    });
    return Response.json({ success: "Team member added successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { id } = await req.json();
    if (!id) return Response.json({ error: "id not found" }, { status: 400 });
    const idExists = await db.ourTeam.findFirst({
      where: {
        id,
      },
    });
    if (!idExists)
      return Response.json(
        { error: "Team member does not exists!" },
        { status: 400 }
      );
    await db.ourTeam.delete({
      where: { id },
    });
    return Response.json({ success: "Team member deleted successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
