import express from "express";
import { PostProforma } from "../controller/proformaPost_controller";

const router = express.Router();

router.post("/post", PostProforma);

export default router;