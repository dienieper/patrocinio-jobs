import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ ken: "ok" });
});

export default routes;
