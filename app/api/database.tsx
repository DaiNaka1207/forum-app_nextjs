import { neon } from '@neondatabase/serverless';

export async function query(query: string) {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);
  return sql(query);
}

export async function createTable() {
  await query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      comment TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP DEFAULT NULL,
      deleted BOOLEAN DEFAULT FALSE
    )
  ;`);
  return null;
}

export async function seed() {
  try {
    await createTable();
    // createTableで作成するテーブルに追加するダミーデータを１０個生成
    const now = new Date(Date.now() + 9 * 60 * 60 * 1000);

    const messages = Array.from({ length: 10 }, (_, i) => {
      const comment = `dummy comment ${i + 1}`;
      const created_at = now.toISOString();
      const updated_at = now.toISOString();
      return { comment, created_at, updated_at};
    });

    for (const message of messages) {
      await query(
        `INSERT INTO messages (comment, created_at, updated_at) VALUES ('${message.comment}', '${message.created_at}', '${message.updated_at}') ON CONFLICT DO NOTHING`
      );
    }    
  } catch (error) {
    console.error("Error seeding database:", error);
  }
  return null;
}
