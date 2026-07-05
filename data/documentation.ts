export type DocumentationItem = {
  slug: string;
  title: string;
  serviceType: string;
  summary: string;
  location: string;
  notes: string[];
  image: string;
  gallery: string[];
};

export const documentationItems: DocumentationItem[] = [
  {
    slug: 'pengecekan-mesin-di-rumah',
    title: 'Pengecekan Mesin di Lokasi Pelanggan',
    serviceType: 'Diagnosis awal dan pengecekan kendaraan',
    summary:
      'Dokumentasi placeholder untuk proses pengecekan kendaraan di area parkir rumah pelanggan.',
    location: 'Bandung, Jawa Barat',
    notes: [
      'Foto asli dapat diganti setelah dokumentasi pekerjaan tersedia.',
      'Gunakan dokumentasi pekerjaan nyata tanpa membuat testimoni palsu.',
      'Sertakan izin pelanggan bila menampilkan nomor polisi atau wajah.'
    ],
    image: '/images/documentation/pengecekan-mesin.svg',
    gallery: [
      '/images/documentation/pengecekan-mesin.svg',
      '/images/documentation/tools.svg',
      '/images/documentation/technician.svg'
    ]
  },
  {
    slug: 'ganti-oli-di-kantor',
    title: 'Ganti Oli Mobil di Area Kantor',
    serviceType: 'Ganti oli',
    summary:
      'Placeholder visual untuk layanan ganti oli di lokasi pelanggan dengan area kerja yang aman dan bersih.',
    location: 'Area Bandung dan sekitarnya',
    notes: [
      'Pastikan area parkir aman untuk pengerjaan.',
      'Siapkan foto proses sebelum, saat, dan setelah pengerjaan.',
      'Cantumkan jenis layanan tanpa mengklaim hasil berlebihan.'
    ],
    image: '/images/documentation/ganti-oli.svg',
    gallery: [
      '/images/documentation/ganti-oli.svg',
      '/images/documentation/tools.svg',
      '/images/documentation/checklist.svg'
    ]
  },
  {
    slug: 'service-rem-ringan',
    title: 'Service Rem dan Pengecekan Komponen',
    serviceType: 'Service rem',
    summary:
      'Placeholder dokumentasi untuk perawatan rem ringan yang memungkinkan dilakukan di lokasi pelanggan.',
    location: 'Bandung, Jawa Barat',
    notes: [
      'Ganti placeholder dengan foto komponen rem nyata.',
      'Jangan menampilkan klaim keselamatan yang berlebihan.',
      'Tambahkan catatan jika perlu rekomendasi perbaikan lanjutan.'
    ],
    image: '/images/documentation/service-rem.svg',
    gallery: [
      '/images/documentation/service-rem.svg',
      '/images/documentation/technician.svg',
      '/images/documentation/checklist.svg'
    ]
  },
  {
    slug: 'alat-kerja-teknisi',
    title: 'Peralatan Teknisi Home Service',
    serviceType: 'Persiapan teknisi',
    summary:
      'Placeholder untuk menampilkan alat kerja, persiapan teknisi, dan standar pengerjaan layanan panggilan.',
    location: 'Titik layanan Flash Garage',
    notes: [
      'Foto alat kerja asli akan meningkatkan kepercayaan pelanggan.',
      'Tampilkan area kerja yang rapi dan aman.',
      'Gunakan foto terang, tajam, dan tidak terlalu ramai.'
    ],
    image: '/images/documentation/tools.svg',
    gallery: [
      '/images/documentation/tools.svg',
      '/images/documentation/technician.svg',
      '/images/documentation/checklist.svg'
    ]
  }
];

export function getDocumentationBySlug(slug: string) {
  return documentationItems.find((item) => item.slug === slug);
}
