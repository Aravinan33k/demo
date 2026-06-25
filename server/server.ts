import express from "express";
import cors from "cors"; // ✅ Add this

const app = express();

app.use(cors()); // ✅ Add this — BEFORE your routes

import menuRoutes from "./src/routes/menu.routes";
import aboutRoutes from "./src/routes/about.routes";
import galleryRoutes from "./src/routes/gallery.routes";
import contactRoutes from "./src/routes/contact.routes";
import dashboardRoutes from "./src/routes/dashboard.routes";

app.use("/api/menu", menuRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});