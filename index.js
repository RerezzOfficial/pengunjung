const express = require("express");
const path = require("path");

const app = express();
let visitorCount = 0;

// Endpoint untuk menyajikan file statis
app.get("/", (req, res) => {
  visitorCount++;
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API untuk mendapatkan jumlah pengunjung
app.get("/api/visitors", (req, res) => {
  res.json({ visitors: visitorCount });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
