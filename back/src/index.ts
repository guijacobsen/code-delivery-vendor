import express from "express";
import { customerRoutes } from "./customer/routes";

const app = express();

customerRoutes(app);

app.listen({ port: 8080 }, () => {
  console.log("Running...");
});
