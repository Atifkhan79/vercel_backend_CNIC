import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import configureCloudinary from "./config/cloudinary.js";
import connectDB from "./config/db.js";
import app from "./app.js";

configureCloudinary();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});