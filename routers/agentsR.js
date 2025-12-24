import express from "express";
import { creatA, deleteA, getAgent, getAllA, updateA } from "../constrollers/agentsC.js";

const router = express.Router();

router.get("/", getAllA);

router.get("/:id", getAgent);

router.post("/", creatA);

router.put("/:id", updateA);

router.delete("/:id", deleteA);

export default router;
