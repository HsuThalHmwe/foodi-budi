import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./src/db/db";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//http:localhost5000/auth/register
app.post("/auth/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.sendStatus(400);
  const text =
    "INSERT INTO hsuthal(name, email ,password) VALUES($1, $2,$3) RETURNING *";
  const values = [name, email, password];
  try {
    const userResult = await db.query(text, values);
    const user = userResult.rows[0];
    res.send(user);
  } catch (error) {
    console.log("server is something went wrong");
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log("Server is running", port);
});
