function validasiPendaftaran(nama, email, divisi, jumlahPeserta) {
  // --- VALIDASI 1: NAMA ---
  // Kita gunakan .trim() untuk memastikan user tidak hanya memasukkan spasi
  if (typeof nama !== "string" || nama.trim() === "") {
    return "Data tidak valid";
  }

  // --- VALIDASI 2: EMAIL ---
  // Cek apakah string, tidak kosong, dan memiliki simbol '@'
  if (
    typeof email !== "string" ||
    email.trim() === "" ||
    !email.includes("@")
  ) {
    return "Data tidak valid";
  }

  // --- VALIDASI 3: DIVISI ---
  // Sama seperti nama, tidak boleh kosong
  if (typeof divisi !== "string" || divisi.trim() === "") {
    return "Data tidak valid";
  }

  // --- VALIDASI 4: JUMLAH PESERTA ---
  // Harus bertipe 'number' (angka) dan nilainya >= 1
  if (typeof jumlahPeserta !== "number" || jumlahPeserta < 1) {
    return "Data tidak valid";
  }

  // --- KESIMPULAN ---
  // Jika kode sampai di sini, berarti semua pengecekan di atas LOLOS (false semua)
  return "Data valid";
}

// --- TEST CASES (Pengujian) ---
console.log("--- PENGUJIAN DATA ---");

// 1. Data Benar Semua
console.log(
  "Test 1 (Semua Benar): " +
    validasiPendaftaran("Fino", "fino@email.com", "Software Dev", 1),
);

// 2. Nama Kosong / Hanya Spasi
console.log(
  "Test 2 (Nama Kosong): " +
    validasiPendaftaran("", "fino@email.com", "Software Dev", 1),
);
console.log(
  "Test 3 (Nama Spasi):  " +
    validasiPendaftaran("   ", "fino@email.com", "Software Dev", 1),
);

// 3. Email Salah (Tanpa @)
console.log(
  "Test 4 (Email Salah): " +
    validasiPendaftaran("Fino", "finoemail.com", "Software Dev", 1),
);

// 4. Jumlah Peserta Salah (0 atau Negatif)
console.log(
  "Test 5 (Jumlah 0):    " +
    validasiPendaftaran("Fino", "fino@email.com", "Software Dev", 0),
);

// 5. Tipe Data Salah (Jumlah dikirim sebagai String "10")
// Dalam strict validation, ini dianggap tidak valid karena kita minta tipe Number
console.log(
  "Test 6 (Jumlah String):" +
    validasiPendaftaran("Fino", "fino@email.com", "Software Dev", "10"),
);
