import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./src/db/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { config } from "./src/config/config";
console.log("config:", config.jwtScrect);

//console.log(process.env); //NodeJs process
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/menus", async (req: Request, res: Response) => {
  const menuResult = await db.query("select * from menus");
  res.send(menuResult.rows);
});
//http:localhost5000/auth/register
app.post("/auth/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.sendStatus(400);
  const hashedpassword = await bcrypt.hash(password, 10);
  const text =
    "INSERT INTO hsuthal(name, email ,password) VALUES($1, $2,$3) RETURNING *";
  const values = [name, email, hashedpassword];
  try {
    const userResult = await db.query(text, values);
    const user = userResult.rows[0];
    res.send(user);
  } catch (error) {
    console.log("server is something went wrong");
    res.sendStatus(500);
  }
});

app.post("/auth/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);
  const userResult = await db.query("select * from hsuthal where email = $1", [
    email,
  ]);
  if (!userResult.rows.length) return res.sendStatus(401);
  const user = userResult.rows[0];
  const hashedpassword = user.password;
  delete user.password;
  const isCorrectPassword = await bcrypt.compare(password, hashedpassword);
  if (isCorrectPassword) {
    //console.log(config.jwtScrect);
    const accessToken = jwt.sign(user, config.jwtScrect);
    return res.send({ accessToken });
  }
  return res.sendStatus(401);
});

app.listen(port, () => {
  console.log("Server is running", port);
});
