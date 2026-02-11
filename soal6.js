const dataEmail = [
  "Andi@gmail.com",
  "Budi@gmail.com",
  "Sari@gmail.com",
  "Andi@gmail.com",
  "Rina@gmail.com",
  "Budi@gmail.com",
];

function deteksiDuplikat(emails) {
  // --- VALIDASI INPUT ---
  if (!Array.isArray(emails) || emails.length === 0) {
    return console.log("Error: Data email kosong atau tidak valid.");
  }

  // --- LOGIKA UTAMA: FREQUENCY MAP ---
  // Kita gunakan object untuk mencatat berapa kali setiap email muncul.
  // Kunci (key) = email, Nilai (value) = jumlah kemunculan
  let frekuensiEmail = {};

  for (let i = 0; i < emails.length; i++) {
    // Normalisasi: Email biasanya tidak case-sensitive, jadi kita ubah ke lowercase
    // dan kita trim spasi agar " Andi@..." tidak dianggap beda dengan "Andi@..."
    let emailBersih = emails[i].trim().toLowerCase();

    // Jika email sudah ada di catatan, tambahkan 1. Jika belum, set jadi 1.
    if (frekuensiEmail[emailBersih]) {
      frekuensiEmail[emailBersih]++;
    } else {
      frekuensiEmail[emailBersih] = 1;
    }
  }

  // --- FILTERING: CARI YANG MUNCUL > 1 ---
  let emailDuplikat = [];

  // Loop melalui object frekuensi yang sudah kita buat tadi
  for (let email in frekuensiEmail) {
    if (frekuensiEmail[email] > 1) {
      emailDuplikat.push(email);
    }
  }

  // --- MENAMPILKAN HASIL ---
  console.log("--- HASIL DETEKSI DUPLIKAT ---");
  if (emailDuplikat.length > 0) {
    console.log("Ditemukan email duplikat:");
    // Menampilkan list duplikat
    emailDuplikat.forEach((email, index) => {
      console.log(`${index + 1}. ${email}`);
    });
  } else {
    console.log("Tidak ada data duplikat.");
  }
}

// Jalankan fungsi
deteksiDuplikat(dataEmail);

// --- TEST CASE TAMBAHAN ---
// console.log("\n--- Test Tanpa Duplikat ---");
// deteksiDuplikat(["a@mail.com", "b@mail.com", "c@mail.com"]);
