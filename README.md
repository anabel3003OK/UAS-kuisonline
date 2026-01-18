# UAS-kuisonline
📜 Website Kuis Sejarah Indonesia
Project ini adalah aplikasi kuis berbasis web sederhana yang dibangun menggunakan teknologi web dasar (HTML, CSS, dan JavaScript) tanpa bantuan framework atau library eksternal.

🚀 Fitur Utama
5 Pertanyaan Sejarah: Soal pilihan ganda dengan 4 opsi jawaban.

Sistem Skor Otomatis: Penambahan skor +20 untuk setiap jawaban benar.

Validasi Real-time: Menggunakan JavaScript untuk memeriksa jawaban secara langsung.

Hasil Akhir & Status: Menampilkan skor total dan status kelulusan (Lulus jika skor > 70).

Reset Kuis: Fitur untuk mengulang kuis tanpa memuat ulang halaman browser.

🧠 Alur Logika & Algoritma
Algoritma dalam aplikasi ini mengikuti alur linear sebagai berikut:

Inisialisasi:

Menyiapkan array of objects bernama quizData yang berisi soal, pilihan jawaban, dan indeks jawaban yang benar.

Mengatur variabel currentQuiz (indeks soal) ke 0 dan score ke 0.

Render Soal (Fungsi loadQuiz):

Menghapus konten lama pada kontainer jawaban.

Mengambil data soal berdasarkan indeks currentQuiz.

Membuat elemen tombol secara dinamis untuk setiap pilihan jawaban.

Validasi Jawaban (Fungsi checkAnswer):

Menerima input indeks dari tombol yang diklik pengguna.

Kondisi: Jika selectedIndex sama dengan quizData[currentQuiz].correct, maka variabel score ditambah 20.

Meningkatkan nilai currentQuiz sebanyak 1.

Kontrol Alur:

Jika currentQuiz < total soal: Jalankan kembali fungsi loadQuiz untuk menampilkan soal berikutnya.

Jika currentQuiz sudah mencapai batas total soal: Jalankan fungsi showResults.

Penentuan Status (Fungsi showResults):

Menyembunyikan area kuis dan menampilkan area hasil.

Kondisi: Jika score > 70, tampilkan pesan Lulus. Jika tidak, tampilkan pesan Tidak Lulus.

🛠️ Detail Teknis
Bahasa: HTML5, CSS3, JavaScript (ES6+).

Ketentuan Lulus: Skor minimal 80 (karena skor harus lebih besar dari 70, dan kelipatan poin adalah 20).

Struktur File:

index.html: Struktur elemen kuis.

style.css: Desain antarmuka (UI) dan tema warna.

script.js: Logika aplikasi, pengolah data, dan manipulasi DOM.
