const dataPendaftaran = [
  { studyGroup: "Web Development Dasar", jumlah: 18 },
  { studyGroup: "Logic & Algorithm", jumlah: 15 },
  { studyGroup: "Frontend Fundamental", jumlah: 10 },
  { studyGroup: "Backend Introduction", jumlah: 10 },
];

function hitungStatistikPeserta(data) {
  // --- VALIDASI INPUT (Edge Case) ---
  // Mencegah error "Division by Zero" (pembagian dengan nol) jika array kosong
  if (!Array.isArray(data) || data.length === 0) {
    return "Data kosong, tidak bisa menghitung statistik.";
  }

  // --- INISIALISASI ACCUMULATOR ---
  // Variabel penampung untuk menjumlahkan total
  let totalPeserta = 0;

  // --- PROSES LOOPING (Aggregation) ---
  for (let i = 0; i < data.length; i++) {
    // Validasi data per item: Pastikan jumlahnya angka valid
    if (typeof data[i].jumlah === "number") {
      // Menambahkan jumlah peserta saat ini ke total (Accumulator Pattern)
      totalPeserta += data[i].jumlah;
    }
  }

  // --- MENGHITUNG RATA-RATA ---
  // Rumus: Total / Jumlah Data
  let rataRata = totalPeserta / data.length;

  // --- MENAMPILKAN HASIL ---
  console.log("--- STATISTIK PESERTA ---");
  console.log("Total Peserta Terdaftar : " + totalPeserta);
  console.log("Rata-rata per Kelas     : " + rataRata);

  // Return object jika hasil ini dibutuhkan oleh fungsi lain di masa depan
  return { total: totalPeserta, average: rataRata };
}

// Menjalankan fungsi
hitungStatistikPeserta(dataPendaftaran);

// --- TEST CASE TAMBAHAN ---
// console.log("\n--- Test Case Array Kosong ---");
// hitungStatistikPeserta([]);
