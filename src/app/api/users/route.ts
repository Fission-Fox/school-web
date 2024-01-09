import prisma from "@/utils/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  const post = await prisma.user.findMany();

  return NextResponse.json(post);
}

export async function POST(request: any) {
  const res = await request.json();
  const { email, name } = res;
  const result = await prisma.user.create({
    data: {
      email,
      name,
    },
  });

  return NextResponse.json({ result });
}
