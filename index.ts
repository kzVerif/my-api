import { NextFunction, Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const express = require('express');
const cors = require('cors');
const prisma = new PrismaClient();

const app = express();
app.use(cors());

app.get("/users", async (req: Request, res: Response, next: NextFunction) => {
  const users = await prisma.user.findMany();
  res.json({users});
});

app.listen(5000, () => {
  console.log("Start a 5000 port");
});
