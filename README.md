# Flash Garage Website

Website profesional untuk Flash Garage, layanan home service mobil atau bengkel mobil panggilan di Bandung.

## Teknologi

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Responsive design
- Basic SEO
- Reusable components

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Bagian yang perlu diganti atau dilengkapi

1. **Logo asli**
   - Ganti file `public/images/logo/flash-garage-logo.svg` dengan logo resmi Flash Garage.
   - Jika punya file transparan PNG/SVG, simpan di folder `public/images/logo/` dan update `lib/site.ts`.

2. **Foto asli**
   - Ganti placeholder di:
     - `public/images/documentation/`
     - `public/images/services/`
     - `public/images/hero/`
     - `public/images/team/`
   - Update path foto di `data/documentation.ts` dan `data/services.ts`.

3. **Area layanan final**
   - Edit `data/areas.ts` sesuai jangkauan layanan sebenarnya.
   - Hindari menulis alamat sebagai bengkel fisik jika belum menerima kunjungan.

4. **Harga dan ketentuan**
   - Edit `data/pricing.ts` dan `data/services.ts`.
   - Pastikan biaya spare part, jarak, dan kondisi kendaraan selalu dikonfirmasi.

5. **Promo**
   - Edit `data/promo.ts` untuk tanggal berlaku, syarat promo, dan layanan yang ikut promo.

6. **Domain**
   - Set `NEXT_PUBLIC_SITE_URL` di environment production.
   - Default saat ini memakai `https://flashgarage.id` sebagai placeholder.

7. **Dokumentasi pekerjaan**
   - Jangan membuat testimoni palsu.
   - Gunakan foto pekerjaan nyata dan samarkan data sensitif pelanggan.

## Struktur utama

```text
app/
components/
data/
lib/
public/
```

Semua konten utama dibuat berbasis data agar mudah diedit tanpa membongkar banyak komponen.

## Catatan update homepage

Halaman Beranda sudah dibuat lebih fokus untuk calon pelanggan. Section galeri/dokumentasi dan area layanan detail tidak ditampilkan di Beranda agar halaman pertama tidak terlalu ramai. Halaman `/dokumentasi` dan `/area-layanan` tetap tersedia melalui navigasi untuk pengguna yang ingin melihat informasi tambahan.
