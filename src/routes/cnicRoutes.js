import express from "express";
import { verifyCNIC } from "../controllers/cnicController.js";

const router = express.Router();

router.get("/:cnic", verifyCNIC);

export default router;