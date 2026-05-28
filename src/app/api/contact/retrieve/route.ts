import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";

const LOCAL_DB_PATH = path.join(process.cwd(), "src", "data", "contacts.json");

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    const expectedAdminKey = process.env.ADMIN_KEY || "admin123";

    // Simple security audit gate
    if (key !== expectedAdminKey) {
      return NextResponse.json(
        { success: false, error: "Access Denied: Invalid Security Token." },
        { status: 401 }
      );
    }

    // 1. Production Mode: MongoDB retrieval
    if (process.env.MONGODB_URI) {
      try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        const db = client.db("deployforge");
        const collection = db.collection("contacts");
        const contacts = await collection.find({}).sort({ createdAt: -1 }).toArray();
        await client.close();

        return NextResponse.json({
          success: true,
          source: "MongoDB Primary",
          count: contacts.length,
          contacts,
        });
      } catch (dbError) {
        console.error("MongoDB Retrieval Failed, falling back to Local JSON:", dbError);
      }
    }

    // 2. Local Fallback Mode: JSON database retrieval
    if (!fs.existsSync(LOCAL_DB_PATH)) {
      return NextResponse.json({
        success: true,
        source: "Local JSON Fallback (Empty)",
        count: 0,
        contacts: [],
      });
    }

    const fileContent = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
    const contacts = JSON.parse(fileContent || "[]");
    
    // Sort by createdAt descending
    contacts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({
      success: true,
      source: "Local JSON Fallback",
      count: contacts.length,
      contacts,
    });

  } catch (error) {
    console.error("API Error in /api/contact/retrieve:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error in DeployForge retrieval endpoint." },
      { status: 500 }
    );
  }
}
