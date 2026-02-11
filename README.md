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

3.  **Fondasi untuk Masalah Kuota**
    masalah kuota menjadi tidak relevan jika 30 data yang masuk tersebut adalah data sampah ("aaa", "."). Dengan memastikan data yang masuk valid terlebih dahulu, kita bisa melakukan penyortiran berdasarkan timestamp (waktu masuk) untuk menentukan 25 peserta sah pertama.

**Kesimpulan:**
Masalah kuota yang berlebih (30 orang) masih bisa disortir manual berdasarkan waktu pendaftaran (timestamp) asalkan datanya valid. Namun, jika datanya rusak atau duplikat sejak awal, proses rekapitulasi menjadi mustahil dilakukan. Oleh karena itu, mengamankan kualitas data masuk adalah prioritas mutlak dibanding perbaikan kosmetik lainnya.
