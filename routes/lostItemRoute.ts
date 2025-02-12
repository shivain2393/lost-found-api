import { Router } from "express";
import { addLostItem, deleteLostItem, getLostItems } from "../controllers/lostItemsController.ts";

const router = Router();

router.post("/", addLostItem);
router.get("/", getLostItems);
router.delete("/:id", deleteLostItem)

export default router;