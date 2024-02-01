import { sql } from "@vercel/postgres";

export async function GET({}) {
  try {
    const result = await sql`CREATE TABLE IF NOT EXISTS cope (
            file_name text PRIMARY KEY NOT NULL,
            file_data text NOT NULL,
            created_at timestamp NOT NULL default current_timestamp,
            updated_at timestamp NOT NULL default current_timestamp,
            type text NOT NULL,
            ownerID uuid NOT NULL
        );`;
    return Response.json({ result });
  } catch (error) {
    return Response.json({ error });
  }
}
