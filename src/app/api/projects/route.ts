import { connectMongoDbAtlas } from '@/lib/connectMongoDbAtlas';
import { Project } from '@/models/projectModel';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectMongoDbAtlas();

    const data = await Project.find();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Was not able to get projects data' });
  }
}
