# Hands On EISD Software Development

**Nama:** Fino Dwi Fajar
**NIM:** 103032430017

---

## Soal Non-Coding (Analisis Prioritas)

**Pertanyaan:**
Jika hanya boleh memperbaiki satu hal pada website pendaftaran Study Group EISD Lab, apa yang akan diperbaiki terlebih dahulu dan mengapa?

### Jawaban:

Jika saya harus memilih satu prioritas utama dalam waktu yang sangat terbatas, saya akan memperbaiki **Validasi Data di Sisi Server (Server-Side Validation) dan Penerapan _Unique Constraint_ pada Database.**

**Mengapa?**
Dalam pengembangan sistem, prinsip _"Garbage In, Garbage Out"_ sangat krusial. Masalah utama saat ini adalah data kotor, ganda, dan tidak valid. Memperbaiki tampilan (UI) hanya solusi permukaan, sedangkan validasi server adalah solusi fundamental.

Alasan teknis mengapa ini menjadi prioritas utama:

1.  **Menuntaskan Masalah Data Ganda (Double Submission)**
    Dengan menerapkan _Unique Constraint_ (kunci unik) pada kolom `email` atau `NIM` di database, sistem secara otomatis menolak data kedua yang identik. Ini menyelesaikan masalah "tombol ditekan berkali-kali" secara teknis tanpa perlu logika UI yang rumit.

2.  **Menjamin Kualitas Data (Data Integrity)**
    Validasi server memastikan tidak ada data sampah (seperti nama "." atau email "aaa") yang tersimpan. Bagi panitia, memiliki 25 data valid jauh lebih berharga daripada data penuh tapi palsu.

3.  **Keamanan Sistem**
    Validasi frontend mudah diakali (misalnya dengan mematikan JavaScript). Validasi server adalah benteng terakhir yang menjamin keamanan dan kebersihan data.

**Kesimpulan:**
Mengamankan kualitas data masuk adalah prioritas mutlak dibanding perbaikan kosmetik, karena tanpa data yang valid, proses rekapitulasi tidak mungkin dilakukan.
