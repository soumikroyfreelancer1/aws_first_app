require("dotenv").config();
const express = require("express");
const app = express();

// Basic Route
app.get("/", (req, res) => {
  res.send({
    message: process.env.GREETING,
    environment: process.env.NODE_ENV,
    apiKey: process.env.API_KEY ? "*****" : "Not set",
  });
});

// Server Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`);
});
