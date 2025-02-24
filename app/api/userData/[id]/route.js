import { Client } from 'pg';
import { dburl } from '@/constants/dbUrl';

export const GET = async (req, context) => {

  console.log("reached user data")
  // Extract the "id" parameter from the URL
  const { id } = context.params
  if (!id) {
    return new Response(
      JSON.stringify({ error: "Missing id parameter" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Create a new client using the database URL
  const client = new Client({ connectionString: dburl });

  try {
    // Connect to the database
    await client.connect();

    // Run a parameterized query to get data by id
    const result = await client.query(
      "SELECT * FROM showcaseproject WHERE id = $1",
      [id]
    );

    // Return the rows as JSON with a 200 status code
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database query error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    // Close the database connection
    await client.end();
  }
};
