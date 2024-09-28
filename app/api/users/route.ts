import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { MongoClient, Db, ObjectId } from "mongodb";


// Get all user 
export async function GET(request: NextRequest): Promise<NextResponse> {
    try{
        const client: MongoClient = await clientPromise;
        const db: Db = client.db('Explore-Nextjs');
        const users = await db.collection('users').find({}).toArray();

        return new NextResponse(JSON.stringify(users), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 })
    }
}

// Insert an user 
export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
      const data = await request.json(); 
      const client: MongoClient = await clientPromise; 
      const db: Db = client.db('Explore-Nextjs');

      console.log(data);
      
      const result = await db.collection('users').insertOne(data); 
      
      return new NextResponse(JSON.stringify(result), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: 'Failed to create user' }), {
        status: 500,
      });
    }
  }


// Update an user 
  export async function PUT(request: NextRequest): Promise<NextResponse> {
    try {
      const { id, ...updatedData } = await request.json(); 
      const client: MongoClient = await clientPromise; 
      const db: Db = client.db('Explore-Nextjs');
      
      const result = await db.collection('users').updateOne({ _id: id }, { $set: updatedData });

      
      return new NextResponse(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: 'Failed to update user' }), {
        status: 500,
      });
    }
  }

   
// Delete an user 
  export async function DELETE(request: NextRequest): Promise<NextResponse> {
    try {
      const { id } = await request.json(); 
      const client: MongoClient = await clientPromise; 
      const db: Db = client.db('Explore-Nextjs');
      
      const result = await db.collection('users').deleteOne({ _id: new ObjectId(id)});
      
      return new NextResponse(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: 'Failed to delete user' }), {
        status: 500,
      });
    }
  }