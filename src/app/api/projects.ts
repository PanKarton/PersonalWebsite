import { buildURL } from '@/helpers/buildURL';
import { connectMongoDbAtlas } from '@/lib/connectMongoDbAtlas';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectMongoDbAtlas();
    const response = await fetch(buildURL());
    const data = await response.json();

    return NextResponse.json({ projectsData: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Was not able to get projects data' });
  }
};
