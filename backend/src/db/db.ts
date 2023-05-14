import { Pool } from "pg";

export const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: "hsuthal123",
  port: 5432,
  database: "pos_with_react",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
