import express from "express";
import { creatU, deleteU, getAllU, getOneU, updateU } from "../constrollers/userC.js";

const router = express.Router();

router.get("/",getAllU);

router.get("/:id", getOneU);

router.post("/", creatU);

router.put("/:username", updateU);


router.delete("/:username",deleteU);

export default router;
