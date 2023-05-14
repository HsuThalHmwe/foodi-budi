import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//http:localhost5000/auth/register
app.post("/auth/register", async (req: Request, res: Response) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log("Server is running", port);
});
