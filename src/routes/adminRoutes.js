import express from "express";
import upload from "../middleware/upload.js";

import {
  addDriver,
  getAllDrivers,
  updateDriver,
  deleteDriver,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addDriver);

router.get("/all", getAllDrivers);

router.put("/update/:id", upload.single("image"), updateDriver);

router.delete("/delete/:id", deleteDriver);

export default router;