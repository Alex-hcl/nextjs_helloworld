import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.error();
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, content } = await request.json();
    const post = await prisma.post.update({
      where: { id },
      data: { title, content },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.post.delete({
      where: { id },
    });
    return NextResponse.json(null, { status: 204 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.error();
  }
}