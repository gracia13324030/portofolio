# Portofolio — Gracia

Website statis (HTML, CSS, JavaScript) yang disajikan lewat server Node.js/Express.

## Cara menjalankan

```bash
npm install
npm start
```

Lalu buka `http://localhost:3000` di browser.

Kalau cuma mau lihat cepat tanpa Node.js, buka langsung file `public/index.html` di browser
(server Node.js hanya diperlukan kalau nanti kamu mau menambah fitur backend, seperti form
kontak yang mengirim email, atau endpoint API).

## Struktur file

```
portfolio-web/
├── server.js          # Server Express, menyajikan folder public/
├── package.json
└── public/
    ├── index.html      # Struktur halaman
    ├── style.css       # Tema cream, warna skill, animasi, kursor kustom
    └── script.js       # Data portofolio + logic tampilan (edit di sini)
```

## Mengedit isi

Semua konten (nama, tentang, skill, proyek, sertifikat, kontak) ada di bagian atas
`public/script.js`, di dalam objek `PROFILE` dan array `ABOUT`, `SKILL_GROUPS`,
`PROJECTS`, `CERTIFICATES`. Ganti nilainya, simpan, refresh browser.

Yang masih perlu kamu ganti sebelum publish (ditandai `TODO` di `PROFILE`):
- `email`, `linkedin`, `github`

## Deploy

Karena ini cuma file statis + server minimal, bisa langsung di-deploy ke Vercel, Netlify,
atau Railway. Untuk Netlify/Vercel sebagai situs statis, cukup upload isi folder `public/`.
