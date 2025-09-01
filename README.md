Website Portofolio — Siti Wahyuni
=================================

Situs portofolio statis dan responsif dibangun dengan HTML, CSS, dan JavaScript. Menampilkan perkenalan, keahlian, proyek, dan kontak, lengkap dengan animasi halus dan aksesibilitas dasar.

Pratinjau Lokal
- Cukup buka `index.html` di browser.
- Atau jalankan server statis (opsional):
  - Python: `python -m http.server 8080`
  - Node (serve): `npx serve .`

Fitur
- Responsif: tampilan nyaman di mobile & desktop.
- Navigasi: toggle menu mobile + highlight section aktif.
- Animasi: reveal on scroll, progress bar skill, parallax glow, back-to-top.
- Typed effect: peran berganti “Programmer / UI/UX Designer”.
- Form WhatsApp: kirim pesan langsung via `wa.me`.

Struktur Proyek
- `index.html`: markup halaman utama.
- `css/styles.css`: gaya & tema (warna di `:root`).
- `js/main.js`: interaksi, animasi, dan utilitas kecil.
- `img/`: aset gambar (ikon & gambar proyek/profil).
- `assets/placeholder.svg`: placeholder SVG.
- `vercel.json`: konfigurasi untuk deploy ke Vercel (opsional).

Kustomisasi Cepat
- Ubah teks, tautan, dan konten di `index.html` (bagian Hero, Tentang, Keahlian, Proyek, Kontak).
- Ganti gambar di folder `img/`, lalu sesuaikan `src` pada elemen `<img>` terkait.
- Edit warna/tema di `css/styles.css` pada blok `:root`.
- Sesuaikan persen keahlian (skill bar) di `index.html` dengan mengubah nilai target persentase yang digunakan oleh elemen bar.

Deploy
- GitHub Pages:
  1) Push ke branch `main`.
  2) Di repo GitHub, buka Settings → Pages → Deploy from a branch → pilih `main` (root).
  3) URL akan menjadi mirip: `https://<username>.github.io/<nama-repo>/`.
- Vercel (opsional):
  1) Instal CLI: `npm i -g vercel`
  2) Dari folder proyek: `vercel` lalu `vercel --prod`
  3) Header dasar diatur pada `vercel.json`.

Kredit
- Ikon: Remix Icon
- Font: Poppins & JetBrains Mono (Google Fonts)

Catatan
- Jika Anda melihat karakter aneh pada judul/tab browser, ganti tanda kutip/karakter khusus pada `<title>` dan meta di `index.html` dengan karakter ASCII biasa.

Penulis
- Siti Wahyuni — Programmer & UI/UX Designer
