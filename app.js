const express = require('express');
const path = require('path');
const app = express();

let visitorCount = 0;

// Serve file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk menambah jumlah pengunjung
app.get('/api/visitor', (req, res) => {
  visitorCount += 1; // Tambah jumlah pengunjung
  res.json({ count: visitorCount }); // Kirim respons dalam format JSON
});

// Jalankan server
module.exports = app; // Ekspor aplikasi untuk digunakan oleh Vercel
