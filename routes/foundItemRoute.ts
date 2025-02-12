import { Router } from "express";
import { addFoundItem, getFoundItems, deleteFoundItem } from "../controllers/foundItemsController.ts";

const router = Router();

router.get("/", getFoundItems);
router.post("/", addFoundItem);
router.delete("/:id", deleteFoundItem)

export default router;