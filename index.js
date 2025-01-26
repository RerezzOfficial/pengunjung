const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Koneksi ke MongoDB Atlas (Gantilah dengan username dan password Anda)
mongoose.connect('mongodb+srv://rerezzofficial:oSFK39TmOfXxM8Ol@cluster0.mongodb.net/visitorDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

// Schema dan model untuk visitor count
const visitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

const Visitor = mongoose.model("Visitor", visitorSchema);

// Endpoint untuk menampilkan halaman utama dan menambah jumlah pengunjung
app.get("/", async (req, res) => {
  const visitor = await Visitor.findOne();
  if (!visitor) {
    // Jika belum ada data pengunjung, buat entry baru
    await new Visitor({ count: 1 }).save();
  } else {
    // Update jumlah pengunjung
    visitor.count += 1;
    await visitor.save();
  }
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API untuk mendapatkan jumlah pengunjung
app.get("/api/visitors", async (req, res) => {
  const visitor = await Visitor.findOne();
  res.json({ visitors: visitor ? visitor.count : 0 });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
