// 1. Kita representasikan data tabel ke dalam bentuk Array of Objects
const studyGroups = [
  { name: "Software Development", quota: 20, registered: 18 },
  { name: "UI/UX Design", quota: 15, registered: 15 },
  { name: "Technopreneur", quota: 25, registered: 10 },
  { name: "Intelligence System", quota: 10, registered: 10 },
];

// Fungsi utama untuk memilah status kelas
function checkClassAvailability(groups) {
  // --- VALIDASI INPUT (Edge Case Handling) ---
  // Memastikan input adalah array dan tidak kosong
  if (!Array.isArray(groups) || groups.length === 0) {
    return "Error: Data tidak valid atau kosong.";
  }

  // Array penampung untuk hasil pemisahan
  let availableGroups = []; // Untuk kelas yang masih tersedia
  let fullGroups = []; // Untuk kelas yang sudah penuh

  // --- PROSES LOGIKA (Looping & Conditional) ---
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];

    // Validasi data di dalam object (mencegah data korup/tidak lengkap)
    if (
      typeof group.quota !== "number" ||
      typeof group.registered !== "number"
    ) {
      console.warn(
        `Peringatan: Data tidak valid untuk group ${group.name}, dilewati.`,
      );
      continue;
    }

    // Cek Kondisi: Tersedia jika terdaftar < kuota
    if (group.registered < group.quota) {
      availableGroups.push(group.name);
    }
    // Cek Kondisi: Penuh jika terdaftar >= kuota
    else {
      fullGroups.push(group.name);
    }
  }

  // --- MENAMPILKAN HASIL ---
  console.log("--- HASIL ANALISIS STUDY GROUP ---");

  console.log("Study Group yang Masih Tersedia:");
  if (availableGroups.length > 0) {
    // Menggunakan join(', ') agar tampilan rapi dipisahkan koma
    console.log(availableGroups.join(", "));
  } else {
    console.log("- Tidak ada (Semua penuh)");
  }

  console.log("\nStudy Group yang Sudah Penuh:");
  if (fullGroups.length > 0) {
    console.log(fullGroups.join(", "));
  } else {
    console.log("- Tidak ada (Semua tersedia)");
  }
}

// Menjalankan fungsi dengan data yang sudah dibuat
checkClassAvailability(studyGroups);

// --- CONTOH TEST CASE TAMBAHAN (Untuk menguji ketahanan kode) ---
// console.log("\n--- Test Case Data Kosong ---");
// checkClassAvailability([]);
