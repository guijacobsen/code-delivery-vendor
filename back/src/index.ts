import express from "express";

const app = express();

app.listen({ port: 8080 }, () => {
  console.log("Running...");
});
