import { collection, getDocs, query } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { db } from '../../../lib/firestoreFirebaseConfig';

export async function GET() {
  try {
    const data: any[] = [];
    const q = query(collection(db, 'Projects'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => data.push(doc.data()));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Was not able to get projects data', error });
  }
}
