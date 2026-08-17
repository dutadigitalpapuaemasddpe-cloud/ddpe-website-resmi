# Website Resmi — Duta Digital Papua Emas

**Domain:** ddpe.my.id  
**Versi final:** Agustus 2026  

Website profil organisasi (bukan portal pemetaan pengurus).

---

## Struktur folder

```
ddpe-official/
├── index.html          → Beranda + intro animasi
├── tentang.html        → Profil, visi, nilai
├── struktur.html       → Kepemimpinan & sistem Duta
├── program.html        → Pilar Literasi & Inovasi
├── kegiatan.html       → Aksi / kegiatan
├── media.html          → Media center (PTFI-style)
├── berita.html         → Daftar berita formal
├── artikel.html        → Baca artikel (?id=...)
├── gabung.html         → Coming soon pendaftaran
├── kontak.html         → Kontak resmi
├── tulis-berita.html   → Ruang kerja pengurus (password)
├── css/main.css        → Semua gaya
├── js/
│   ├── main.js         → Navbar, reveal, menu mobile
│   ├── news-config.js  → Password & integrasi (EDIT DI SINI)
│   └── news-store.js   → Data berita + Kompasiana
└── assets/             → Logo, foto tim, twibbon
```

---

## Cara edit di VS Code

1. Buka folder `ddpe-official` di VS Code.
2. Live preview: extension **Live Server** → klik Go Live pada `index.html`.
3. Ganti teks/halaman langsung di file HTML yang sesuai.
4. Ganti warna di `css/main.css` → bagian `:root { ... }`.
5. Ganti password tulis berita di `js/news-config.js`.
6. Tambah artikel bawaan di `js/news-store.js` → array `SEED`.

---

## Deploy ke Vercel + domain

1. Upload folder ini ke GitHub (repo baru, misalnya `ddpe-official`).
2. Vercel → Import Project → pilih repo.
3. Root directory = folder yang berisi `index.html`.
4. Deploy.
5. Domains → pasang `ddpe.my.id` dan `www.ddpe.my.id`.

---

## Halaman pengurus

- URL: `/tulis-berita.html`
- Password default: `DDPE2026` (wajib diganti di `news-config.js`)
- Artikel yang ditulis tersimpan di browser (localStorage).
- Untuk sinkron semua perangkat: isi Supabase di `news-config.js`.

---

## Kompasiana

Profil resmi: https://www.kompasiana.com/ddpe  

Artikel dari Kompasiana sudah dimasukkan ke sistem berita website (dengan tautan sumber).

---

## Kontak organisasi

- Email: dutadigitalpapuaemasddpe@gmail.com
- Founder: Rohilman Putra Jagong
- Lokasi: Mimika, Papua Tengah
