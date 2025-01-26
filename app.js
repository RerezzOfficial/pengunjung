const express = require('express');
const path = require('path');
const app = express();

let visitorCount = 0;

// Serve file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk menampilkan index.html saat root route diakses
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route untuk menambah jumlah pengunjung
app.get('/api/visitor', (req, res) => {
  visitorCount += 1; // Tambah jumlah pengunjung
  res.json({ count: visitorCount }); // Kirim respons dalam format JSON
});

// Jalankan server di port 3000 (hanya untuk lokal)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
