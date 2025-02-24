import { NextResponse } from "next/server";
import { Client } from "pg";
import { dburl } from '@/constants/dbUrl';

export async function POST(request) {
  const client = new Client({ connectionString: dburl });

  try {
    // Parse incoming form data
    const { title, content, tags, author } = await request.json();

    // Connect to the database
    await client.connect();

    // Insert into 'showcaseproject' table
    // created_at uses CURRENT_TIMESTAMP for simplicity
    const query = `
      INSERT INTO showcaseproject (title, content, tags, author, created_at)
      VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
      RETURNING *;
    `;
    const values = [title, content, tags, author];
    const result = await client.query(query, values);
    console.log(result)
    // Return the newly inserted row
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Error inserting project:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await client.end();
  }
}
