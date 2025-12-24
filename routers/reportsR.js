import express from "express";

import { creatR, deleteR, getAll, getOne, updateR } from "../constrollers/reportsC.js";

const router = express.Router();
router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", creatR);

router.put("/:id", updateR);
router.delete("/:id", deleteR);

export default router;
