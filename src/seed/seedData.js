import mongoose from "mongoose";
import dotenv from "dotenv";

import Driver from "../models/Driver.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seed = async () => {
  await Driver.deleteMany();

  await Driver.create({
    cnic: "1720139309761",
    licenseNumber: "QA-97632",
    driverName: "MAGHAZ KHAN",
    fatherName: "ROZI KHAN",
    allowedVehicles: "M/CYCLE/M-CAR/LTV",
    state: "BALOCHISTAN",
    city: "QUETTA",
    issueDate: "2026-03-20",
    validFrom: "2026-03-20",
    validTo: "2031-03-19",
    // 👇 ADD THIS
  image: "https://i.pravatar.cc/150?img=12"
  });

  console.log("Seed Data Inserted");

  process.exit();
};

seed();