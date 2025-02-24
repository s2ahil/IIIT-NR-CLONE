// app/api/project/[id]/route.js
import { NextResponse } from "next/server";
import { Client } from "pg";
import { dburl } from "@/constants/dbUrl";

export async function DELETE(request, context) {
  const { id } =  context.params // id from the URL

  const client = new Client({ connectionString: dburl });
  try {
    await client.connect();
    const result = await client.query("DELETE FROM showcaseproject WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Project deleted", project: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await client.end();
  }
}

export async function PUT(request, context) {
    const { id } = context.params; // ID from the URL
  
    const client = new Client({ connectionString: dburl });
  
    try {
      await client.connect();
  
      // Parse the request body
      const { title, content, tags, author } = await request.json();
  
      // Validate input
      if (!title || !content || !tags || !author) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
      }
  
      // Update project in the database
      const result = await client.query(
        `UPDATE showcaseproject 
         SET title = $1, content = $2, tags = $3, author = $4 
         WHERE id = $5 RETURNING *`,
        [title, content, tags, author, id]
      );
  
      if (result.rowCount === 0) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Project updated successfully", project: result.rows[0] }, { status: 200 });
  
    } catch (error) {
      console.error("Error updating project:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } finally {
      await client.end();
    }
  }