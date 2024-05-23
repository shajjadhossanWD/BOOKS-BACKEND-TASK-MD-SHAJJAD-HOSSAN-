import express, { Request, Response } from "express";
const router = express.Router();
import path from "path";

router.get("^/$|/index(.html)?", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
