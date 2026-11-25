# Product Requirements Document (PRD)

## Website Portofolio Pribadi --- Raffi Ramadhan

  -----------------------------------------------------------------------
  Informasi                           Detail
  ----------------------------------- -----------------------------------
  Nama produk                         Website Portofolio Pribadi

  Pemilik produk                      Raffi Ramadhan

  Peran/identitas                     Mahasiswa Sistem Informasi Semester
                                      3, Universitas Nusantara PGRI
                                      Kediri

  Komunitas                           SIKOKI (komunitas koding)

  Platform                            Website statis

  Target deployment                   GitHub Pages

  Versi dokumen                       1.0

  Cakupan tahap                       Tahap 1 --- Kerangka halaman dan
                                      fondasi antarmuka
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 1. Ringkasan Produk

Website Portofolio Pribadi merupakan website statis yang digunakan untuk
memperkenalkan identitas, minat profesional, dan kompetensi teknis
pemilik kepada dosen, rekan komunitas, serta rekruter magang.

Website dibangun menggunakan HTML5 semantik, Tailwind CSS melalui CDN
resmi, dan Vanilla JavaScript. Pendekatan ini dipilih agar struktur
proyek sederhana, mudah dipelajari dan dipelihara, serta dapat di-deploy
langsung ke GitHub Pages tanpa proses build yang kompleks.

Pada tahap pertama, pengembangan difokuskan pada fondasi halaman yang
terdiri dari navbar, hero section, bagian Tentang Saya, dan Keahlian.
Menu Proyek dan Kontak disiapkan pada navigasi sebagai bagian dari
pengembangan tahap berikutnya.

## 2. Latar Belakang dan Masalah

Sebagai mahasiswa Sistem Informasi yang aktif dalam komunitas koding,
pemilik membutuhkan media digital yang dapat menampilkan profil dan
kemampuan teknis secara terstruktur. Informasi yang tersebar di berbagai
platform belum tentu memberikan gambaran profesional yang ringkas dan
konsisten.

Website portofolio ini diharapkan menjadi satu halaman utama yang mudah
diakses, memiliki tampilan profesional, dan mampu menyampaikan informasi
terpenting dalam sekitar 10 detik pertama kunjungan.

## 3. Tujuan Produk

1.  Memperkenalkan identitas pemilik secara jelas dan profesional.
2.  Menampilkan peran dan minat di bidang pengembangan web serta UI/UX.
3.  Menyajikan ringkasan profil dan kompetensi teknis.
4.  Memberikan pengalaman pengguna yang nyaman pada perangkat desktop
    maupun ponsel.
5.  Menyediakan fondasi website statis yang mudah dikembangkan dan
    di-deploy melalui GitHub Pages.

### 3.1 Indikator Keberhasilan

-   Pengunjung dapat mengenali nama, status, dan fokus bidang pemilik
    dalam 10 detik pertama.
-   Navigasi utama dapat digunakan pada desktop dan perangkat seluler.
-   Seluruh bagian tahap pertama tampil dengan baik pada ukuran layar
    umum.
-   Tombol hamburger dapat membuka dan menutup menu seluler.
-   Tautan navigasi mengarah ke bagian halaman yang sesuai.
-   Website dapat dibuka melalui GitHub Pages tanpa backend atau proses
    build.
-   Tidak terdapat kesalahan JavaScript yang menghambat fungsi utama.

## 4. Target Pengguna

  -----------------------------------------------------------------------
  Pengguna                            Kebutuhan
  ----------------------------------- -----------------------------------
  Dosen                               Melihat identitas, minat, dan
                                      kompetensi mahasiswa

  Rekan komunitas SIKOKI              Mengenal profil dan bidang yang
                                      sedang dipelajari

  Rekruter magang                     Menilai gambaran awal kemampuan dan
                                      minat profesional

  Pengunjung umum                     Memahami profil pemilik dan
                                      menemukan informasi yang relevan
  -----------------------------------------------------------------------

## 5. Identitas dan Pesan Utama

### 5.1 Identitas Pemilik

-   Nama: **Raffi Ramadhan**
-   Status: Mahasiswa Program Studi Sistem Informasi Semester 3
-   Institusi: Universitas Nusantara PGRI Kediri
-   Komunitas: SIKOKI
-   Peran yang ditampilkan: **Web Developer & UI/UX Enthusiast**

### 5.2 Pesan Utama

"Saya adalah mahasiswa Sistem Informasi yang tertarik pada pengembangan
website dan perancangan antarmuka pengguna, serta terus mengembangkan
kemampuan melalui pembelajaran dan komunitas koding."

Pesan tersebut merupakan arahan konten awal dan dapat disesuaikan dengan
pengalaman nyata pemilik. Website tidak boleh menampilkan pengalaman,
sertifikasi, atau keahlian yang belum dimiliki.

## 6. Ruang Lingkup

### 6.1 Termasuk dalam Tahap 1

1.  Navbar lengket (sticky navbar).
2.  Hero section.
3.  Section Tentang Saya (About).
4.  Section Keahlian (Tech Stack).
5.  Navigasi responsif dengan hamburger menu.
6.  Penggunaan ikon Lucide.
7.  Komentar HTML singkat pada awal setiap section.
8.  Fondasi visual dan struktur dokumen yang siap dikembangkan.

### 6.2 Disiapkan untuk Tahap Berikutnya

-   Section Proyek.
-   Section Kontak.
-   Tautan media sosial atau profil profesional.
-   Detail proyek, studi kasus, dan dokumentasi.
-   Penyempurnaan metadata dan optimasi publikasi.

Bagian Proyek dan Kontak muncul sebagai item navigasi sejak tahap
pertama. Jika section tersebut belum dibuat, tautannya tidak boleh
mengarah ke ID yang tidak tersedia. Untuk sementara, tautan dapat
dinonaktifkan atau diarahkan setelah section terkait ditambahkan.

### 6.3 Di Luar Ruang Lingkup Tahap 1

-   Backend, database, dan autentikasi.
-   Sistem manajemen konten.
-   Formulir kontak yang mengirim data ke server.
-   Framework JavaScript seperti React, Vue, atau Angular.
-   Animasi kompleks yang mengganggu aksesibilitas atau performa.

## 7. Struktur Proyek

Folder proyek menggunakan struktur sederhana berikut:

``` text
portfolio/
├── index.html
├── script.js
└── assets/
    └── images/
        └── profile.jpg
```

Keterangan: - `index.html`: struktur semantik, konten, dan pemanggilan
pustaka eksternal. - `script.js`: interaksi antarmuka, terutama
hamburger menu. - `assets/images/profile.jpg`: foto profil yang
disediakan dan diganti oleh pemilik.

Jika foto profil belum tersedia, gunakan placeholder visual yang pantas.
Jangan menggunakan foto orang lain seolah-olah merupakan pemilik
website.

## 8. Persyaratan Fungsional

### FR-01 --- Navbar Sticky

-   Navbar berada di bagian atas halaman.
-   Navbar tetap terlihat ketika halaman digulir.
-   Logo teks "Raffi Ramadhan" berada di sisi kiri.
-   Menu Tentang, Keahlian, Proyek, dan Kontak berada di sisi kanan pada
    layar desktop.
-   Tautan navigasi menggunakan anchor ke ID section yang sesuai.
-   Navbar memiliki latar dan border yang konsisten dengan tema halaman.
-   Posisi section tujuan tidak tertutup navbar ketika tautan anchor
    dipilih.

### FR-02 --- Navigasi Seluler

-   Pada layar kecil, menu desktop digantikan tombol hamburger.
-   Tombol dapat membuka dan menutup menu navigasi.
-   Ikon berubah sesuai keadaan menu, misalnya menu dan X.
-   Menu dapat ditutup setelah salah satu tautan dipilih.
-   Tombol memiliki `aria-label`, `aria-expanded`, dan hubungan
    aksesibel ke elemen menu.
-   Interaksi dapat digunakan dengan keyboard.

### FR-03 --- Hero Section

Hero section menjadi area informasi utama yang pertama kali dilihat
pengunjung dan wajib memuat:

-   Sapaan singkat.
-   Nama lengkap: Raffi Ramadhan.
-   Peran: Web Developer & UI/UX Enthusiast.
-   Deskripsi singkat maksimal dua kalimat.
-   Tombol CTA dengan teks "Lihat Proyek".
-   Bingkai foto profil berbentuk lingkaran.

Tombol "Lihat Proyek" disiapkan untuk mengarah ke section Proyek ketika
section tersebut tersedia. Sebelum section Proyek dibuat, jangan membuat
tautan kosong atau tujuan yang tidak valid.

### FR-04 --- Tentang Saya

-   Menampilkan judul "Tentang Saya".
-   Menyajikan ringkasan profil dalam bahasa Indonesia yang jelas dan
    profesional.
-   Memuat informasi status mahasiswa, program studi, institusi, serta
    ketertarikan pada pengembangan web dan UI/UX.
-   Konten tidak mengklaim pengalaman atau pencapaian yang belum
    dikonfirmasi.

### FR-05 --- Keahlian (Tech Stack)

-   Menampilkan judul "Keahlian" atau "Tech Stack".
-   Menyajikan teknologi atau keterampilan dalam kartu/elemen yang
    konsisten.
-   Setiap item memiliki nama dan, bila sesuai, ikon.
-   Daftar teknologi harus mencerminkan kemampuan aktual pemilik; item
    yang belum dikuasai dapat diberi konteks "sedang dipelajari".
-   Tata letak menyesuaikan lebar layar.

### FR-06 --- Ikon

-   Gunakan Lucide Icons melalui CDN.
-   Ikon dekoratif tidak boleh menjadi satu-satunya penyampai informasi.
-   Ikon interaktif harus memiliki label aksesibel.

## 9. Persyaratan Nonfungsional

### NFR-01 --- Responsivitas

Antarmuka harus beradaptasi dengan: - Ponsel: sekitar 320--767 px. -
Tablet: sekitar 768--1023 px. - Desktop: 1024 px ke atas.

Tidak boleh muncul scroll horizontal yang tidak diperlukan. Ukuran teks,
jarak, grid, dan tombol harus tetap nyaman digunakan.

### NFR-02 --- Aksesibilitas

-   Gunakan elemen HTML5 semantik seperti `header`, `nav`, `main`,
    `section`, dan `footer` jika diperlukan.
-   Urutan heading logis dan tidak melompat tanpa alasan.
-   Semua gambar informatif memiliki teks alternatif.
-   Kontras teks dan latar cukup terbaca.
-   Elemen interaktif dapat diakses menggunakan keyboard.
-   Tampilkan indikator fokus yang terlihat.
-   Gunakan atribut ARIA hanya ketika diperlukan dan dengan nilai yang
    selalu diperbarui.

### NFR-03 --- Performa

-   Hindari framework dan pustaka yang tidak diperlukan.
-   Gunakan aset gambar dengan ukuran wajar.
-   Hindari animasi berat dan efek berlebihan.
-   Pustaka eksternal dimuat dari CDN yang sesuai.
-   Website tetap dapat menampilkan konten utama tanpa backend.

### NFR-04 --- Kompatibilitas

Website ditargetkan berjalan pada versi terbaru browser modern seperti
Chrome, Edge, Firefox, dan Safari.

### NFR-05 --- Pemeliharaan Kode

-   HTML, CSS utility, dan JavaScript ditulis secara terstruktur.
-   Nama class dan variabel mudah dipahami.
-   JavaScript dipisahkan ke `script.js`.
-   Tambahkan komentar HTML singkat di awal setiap section utama.
-   Hindari kode duplikat dan manipulasi DOM yang tidak diperlukan.

## 10. Pedoman Desain UI/UX

### 10.1 Arah Visual

Tema yang digunakan adalah **elegant dark mode** dengan kesan modern,
minimalis, rapi, dan profesional.

  Elemen            Ketentuan
  ----------------- -------------------
  Latar utama       `slate-950`
  Permukaan kartu   `slate-900`
  Border            `slate-800`
  Aksen utama       `emerald-400`
  Aksen sekunder    `cyan-400`
  Judul             Plus Jakarta Sans
  Paragraf          Inter

### 10.2 Tipografi

-   Google Fonts: Plus Jakarta Sans untuk judul dan elemen heading.
-   Google Fonts: Inter untuk paragraf dan teks antarmuka.
-   Hierarki ukuran heading harus jelas.
-   Paragraf menggunakan panjang baris dan jarak yang nyaman dibaca.

### 10.3 Komponen Visual

-   Kartu menggunakan permukaan slate-900 dan border slate-800.
-   Tombol utama menggunakan aksen emerald-400 dengan kontras teks yang
    memadai.
-   Cyan-400 digunakan sebagai aksen sekunder, bukan untuk seluruh teks.
-   Foto profil ditampilkan dalam bingkai lingkaran.
-   Efek hover dan transisi dibuat halus serta tidak berlebihan.
-   Gunakan ruang kosong yang cukup agar halaman tidak terasa padat.

## 11. Teknologi dan Ketentuan Implementasi

  -----------------------------------------------------------------------
  Teknologi                           Penggunaan
  ----------------------------------- -----------------------------------
  HTML5                               Struktur halaman semantik

  Tailwind CSS CDN resmi              Styling dan tata letak

  Vanilla JavaScript                  Interaksi menu seluler dan perilaku
                                      UI sederhana

  Lucide Icons CDN                    Ikon antarmuka

  Google Fonts                        Plus Jakarta Sans dan Inter

  GitHub Pages                        Hosting website statis
  -----------------------------------------------------------------------

Ketentuan: 1. File utama harus bernama `index.html`. 2. File JavaScript
harus bernama `script.js`. 3. Hubungkan `script.js` dari `index.html`
dengan atribut `defer` atau letakkan pemanggilan script setelah elemen
halaman. 4. Jangan menggunakan framework JavaScript berat. 5. Jangan
membutuhkan server backend atau proses build untuk menjalankan versi
awal. 6. Gunakan CDN resmi dan dokumentasi versi terkini saat
implementasi. 7. Karena Tailwind melalui CDN ditujukan untuk
pengembangan sederhana/prototipe, evaluasi pendekatan build Tailwind
jika kelak kebutuhan optimasi produksi meningkat.

## 12. Struktur Konten Halaman

Urutan konten yang direncanakan:

1.  **Header / Navbar**
    -   Logo nama.
    -   Navigasi Tentang, Keahlian, Proyek, Kontak.
    -   Tombol hamburger pada layar kecil.
2.  **Hero**
    -   Sapaan.
    -   Nama lengkap.
    -   Peran profesional.
    -   Deskripsi maksimal dua kalimat.
    -   CTA "Lihat Proyek".
    -   Foto profil lingkaran.
3.  **Tentang Saya**
    -   Ringkasan latar belakang pendidikan.
    -   Ketertarikan pada web development dan UI/UX.
    -   Aktivitas komunitas koding SIKOKI.
4.  **Keahlian**
    -   Daftar teknologi dan keterampilan yang benar-benar relevan.
    -   Penanda keterampilan yang sedang dipelajari bila diperlukan.
5.  **Placeholder pengembangan berikutnya**
    -   Proyek.
    -   Kontak.

## 13. Kriteria Penerimaan (Acceptance Criteria)

Tahap pertama dinyatakan selesai apabila seluruh kondisi berikut
terpenuhi:

-   [ ] Proyek memiliki `index.html` dan `script.js`.
-   [ ] Halaman menggunakan HTML5 semantik.
-   [ ] Tailwind CSS dimuat melalui CDN resmi.
-   [ ] Google Fonts Plus Jakarta Sans dan Inter diterapkan sesuai
    peruntukan.
-   [ ] Ikon Lucide dapat ditampilkan.
-   [ ] Navbar sticky bekerja saat halaman digulir.
-   [ ] Navigasi desktop tampil pada layar lebar.
-   [ ] Hamburger menu dapat dibuka dan ditutup pada layar kecil.
-   [ ] Menu seluler tertutup setelah tautan dipilih.
-   [ ] Hero menampilkan sapaan, nama, peran, deskripsi maksimal dua
    kalimat, CTA, dan foto profil lingkaran.
-   [ ] Section Tentang Saya tersedia dan berisi informasi yang relevan.
-   [ ] Section Keahlian tersedia dan responsif.
-   [ ] Komentar HTML singkat tersedia pada awal setiap section utama.
-   [ ] Tidak ada tautan anchor yang mengarah ke elemen yang belum
    tersedia.
-   [ ] Tidak ada scroll horizontal pada ukuran ponsel umum.
-   [ ] Tidak ada error JavaScript yang menghambat fungsi utama.
-   [ ] Website dapat dijalankan secara lokal dan dipublikasikan melalui
    GitHub Pages.

## 14. Risiko dan Mitigasi

  -----------------------------------------------------------------------
  Risiko                  Dampak                  Mitigasi
  ----------------------- ----------------------- -----------------------
  Foto profil belum       Hero terlihat kurang    Gunakan placeholder
  tersedia                personal                sementara dan ganti
                                                  dengan foto milik
                                                  sendiri

  Daftar keahlian belum   Informasi portofolio    Konfirmasi setiap
  terverifikasi           berpotensi menyesatkan  teknologi dan tingkat
                                                  penguasaan

  Tautan Proyek/Kontak    Navigasi tidak          Gunakan placeholder
  belum memiliki section  berfungsi               yang jelas atau
                                                  tambahkan section pada
                                                  tahap berikutnya

  CDN tidak dapat diakses Font, ikon, atau        Periksa koneksi dan URL
                          styling tidak termuat   CDN; pertimbangkan aset
                                                  lokal bila dibutuhkan

  Menu seluler tidak      Pengalaman pengguna     Uji keyboard, label
  aksesibel               terganggu               ARIA, dan status
                                                  `aria-expanded`

  Tampilan berbeda        Konsistensi UI menurun  Uji beberapa ukuran
  antarperangkat                                  layar dan browser
  -----------------------------------------------------------------------

## 15. Rencana Tahapan Pengembangan

  -----------------------------------------------------------------------
  Tahap                   Fokus                   Hasil
  ----------------------- ----------------------- -----------------------
  Tahap 1                 Fondasi halaman         Navbar, Hero, Tentang
                                                  Saya, Keahlian

  Tahap 2                 Konten portofolio       Section Proyek dan
                                                  detail karya

  Tahap 3                 Komunikasi              Section Kontak dan
                                                  tautan profesional

  Tahap 4                 Penyempurnaan           Pengujian responsif,
                                                  aksesibilitas,
                                                  metadata, dan optimasi

  Tahap 5                 Publikasi               Deployment dan
                                                  verifikasi GitHub Pages
  -----------------------------------------------------------------------

## 16. Asumsi dan Hal yang Perlu Dikonfirmasi

Dokumen ini menggunakan informasi identitas yang telah diberikan.
Sebelum implementasi final, pemilik perlu menyiapkan atau mengonfirmasi:

-   Foto profil yang akan digunakan.
-   Deskripsi diri final.
-   Daftar teknologi yang sudah dikuasai dan yang sedang dipelajari.
-   Tautan GitHub, LinkedIn, atau media profesional lain jika ingin
    ditampilkan.
-   Daftar proyek yang layak dipublikasikan pada tahap berikutnya.
-   Informasi kontak yang memang ingin dibagikan secara publik.

## 17. Definisi Selesai

Pekerjaan Tahap 1 dianggap selesai ketika seluruh kriteria penerimaan
terpenuhi, halaman dapat digunakan pada desktop dan ponsel, informasi
utama dapat dipahami dengan cepat, serta kode dapat dijalankan dan
dipublikasikan sebagai website statis melalui GitHub Pages.

------------------------------------------------------------------------

**Akhir dokumen PRD --- Versi 1.0**
