import { neon } from '@neondatabase/serverless';

export async function query(query: string) {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);
  return sql(query);
}