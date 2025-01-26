const express = require("express");
const path = require("path");

const app = express();
let visitorCount = 0;

// Middleware untuk menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, "public")));

// Endpoint untuk menangani permintaan ke "/"
app.get("/", (req, res) => {
  visitorCount++; // Tambahkan jumlah pengunjung setiap kali halaman dimuat
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API untuk mengirim jumlah pengunjung
app.get("/api/visitors", (req, res) => {
  res.json({ visitors: visitorCount });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
