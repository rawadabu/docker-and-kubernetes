import express from "express";

import connectToDatabse from "./helpers.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> HELLO GITHUB </h1>");
});

await connectToDatabse();

app.listen(3000);
