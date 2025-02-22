// pages/api/titles.js
import { Client } from 'pg';
import { dburl } from '@/constants/dbUrl';

export const GET = async (req, context) => {
  // 1. Get the DB URL from environment variables (or imported constant)
  const url = dburl;
  
  // 2. Create a new client
  const client = new Client({
    connectionString: url,
  });

  try {
    // 3. Connect to the database
    await client.connect();

    // 4. Run your query (replace 'showcaseproject' with your actual table name if needed)
    const result = await client.query('SELECT title,id,author FROM showcaseproject');

    // 5. Return the rows as JSON with a 200 status code
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database query error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    // 6. Close the connection
    await client.end();
  }
};
