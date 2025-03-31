import {getAllContent, getContentById} from "../controllers/productsController";
import express from "express";

const router = express.Router();

router.get("/", getAllContent);
router.get("/:id", getContentById);

export default router;