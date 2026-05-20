import express from "express";
import cors from "cors";
import cnicRoutes from "./routes/cnicRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();


app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
); */


app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


app.use("/api/cnic", cnicRoutes);
app.use("/api/admin", adminRoutes);

export default app;