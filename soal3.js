function cekStatusPendaftaran(kuota, jumlahTerdaftar) {
  // VALIDASI INPUT (Edge Case Handling)
  // 1. Pastikan input adalah angka
  if (typeof kuota !== "number" || typeof jumlahTerdaftar !== "number") {
    return "Error: Input harus berupa angka.";
  }

  // 2. Pastikan angka tidak negatif (Logic error prevention)
  if (kuota < 0 || jumlahTerdaftar < 0) {
    return "Error: Kuota atau jumlah terdaftar tidak boleh negatif.";
  }

  // LOGIKA UTAMA
  // Menggunakan if-else if untuk mengecek kondisi secara berurutan

  // Kondisi 4: Jika melebihi kuota
  if (jumlahTerdaftar > kuota) {
    return "Pendaftaran ditolak";
  }

  // Kondisi 3: Jika pas dengan kuota
  else if (jumlahTerdaftar === kuota) {
    return "Pendaftaran ditutup";
  }

  // Kondisi 2: 3 Slot terakhir sebelum penuh
  // Logikanya: Jika >= (Kuota - 3) DAN masih < Kuota (sudah tercover di atas)
  else if (jumlahTerdaftar >= kuota - 3) {
    return "Hampir penuh";
  }

  // Kondisi 1: Masih aman (kurang dari batas ambang)
  else {
    return "Pendaftaran diterima";
  }
}

// PENGUJIAN KODE Test Cases
const kuotaMaksimal = 20;

console.log("--- TEST CASE: Kuota 20 ---");

// Kasus 1: Masih kosong (misal 10 orang) -> Harusnya "Pendaftaran diterima"
console.log(`Daftar 10 orang: ${cekStatusPendaftaran(kuotaMaksimal, 10)}`);

// Kasus 2: Ambang batas bawah (17 orang = 20-3) -> Harusnya "Hampir penuh"
console.log(`Daftar 17 orang: ${cekStatusPendaftaran(kuotaMaksimal, 17)}`);

// Kasus 3: Ambang batas (19 orang) -> Harusnya "Hampir penuh"
console.log(`Daftar 19 orang: ${cekStatusPendaftaran(kuotaMaksimal, 19)}`);

// Kasus 4: Pas (20 orang) -> Harusnya "Pendaftaran ditutup"
console.log(`Daftar 20 orang: ${cekStatusPendaftaran(kuotaMaksimal, 20)}`);

// Kasus 5: Berlebih (25 orang) -> Harusnya "Pendaftaran ditolak"
console.log(`Daftar 25 orang: ${cekStatusPendaftaran(kuotaMaksimal, 25)}`);

// Kasus 6: Input Ngawur (Edge Case)
console.log(`Input Negatif:   ${cekStatusPendaftaran(kuotaMaksimal, -5)}`);
console.log(
  `Input Huruf:     ${cekStatusPendaftaran(kuotaMaksimal, "sepuluh")}`,
);
