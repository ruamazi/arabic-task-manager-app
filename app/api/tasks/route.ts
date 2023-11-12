import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ Error: "Unauthorized", status: 401 });
    }
    const { title, desc, date, complete, important } = await req.json();
    if (!title || !desc || !date) {
      return NextResponse.json({
        Error: "Missing required fields",
        status: 400,
      });
    }
    if (title.length > 3) {
      return NextResponse.json({ Error: "العنوان قصير جدا", status: 400 });
    }
    const createdTask = await prisma.taskar.create({
      data: {
        title,
        desc,
        date,
        complete,
        important,
        userId,
      },
    });
    return NextResponse.json({ createdTask });
  } catch (error) {
    console.log("somthing wrong with creating task function:", error);
    return;
  }
};
export const GET = async (req: Request) => {
  try {
  } catch (error) {
    console.log("somthing wrong with Getting tasks function:", error);
    return;
  }
};

export const PUT = async (req: Request) => {
  try {
  } catch (error) {
    console.log("somthing wrong with Updating the task function:", error);
    return;
  }
};

export const DELETE = async (req: Request) => {
  try {
  } catch (error) {
    console.log("somthing wrong with Deleting the task function:", error);
    return NextResponse.json({ error, status: 500 });
  }
};
