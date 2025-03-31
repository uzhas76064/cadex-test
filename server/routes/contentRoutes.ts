import {getAllContent, getContentById} from "../controllers/contentController";
import express from "express";

const router = express.Router();

router.get("/content", getAllContent);
router.get("/:id", getContentById);

export default router;