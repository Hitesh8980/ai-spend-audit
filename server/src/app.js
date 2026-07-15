const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/auditRoutes");
const shareRoutes = require("./routes/shareRoutes");
const leadRoutes = require("./routes/leadRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/audit", auditRoutes);
app.use("/api/share", shareRoutes);
app.use("/api/leads", leadRoutes);


// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Spend Audit Backend Running 🚀",
  });
});


// Error middleware should always be last
app.use(errorHandler);


module.exports = app;