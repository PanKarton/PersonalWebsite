import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = { message: 'Data is empty' };

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Was not able to get projects data' });
  }
}
