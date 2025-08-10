# Bangirul Storegame (Static Demo)

Website statis yang meniru tampilan dari screenshot: tema gelap, hero banner, promo + countdown, grid populer, tabs kategori, katalog, daftar game, tombol chat, dan bottom navigation.

## Menjalankan secara lokal
Tanpa instalasi apa pun:

```bash
cd /workspace/gamestore
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Struktur
- `index.html` – markup utama
- `styles.css` – styling tema gelap
- `app.js` – logika carousel, countdown, tabs, dan render grid

Anda bebas mengganti gambar, teks, ataupun menambahkan integrasi pembayaran/API.