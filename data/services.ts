export type Service = {
  slug: string;
  title: string;
  price: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  problems: string[];
  checks: string[];
  whenNeeded: string[];
  processEstimate: string;
  limitations: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: 'tune-up-biasa',
    title: 'Tune Up Biasa',
    price: 'Mulai Rp150.000',
    shortDescription:
      'Tune up dasar untuk membantu menjaga performa mesin dan kenyamanan penggunaan harian.',
    description:
      'Layanan tune up dasar untuk kendaraan harian yang membutuhkan pengecekan awal dan perawatan ringan di lokasi pelanggan.',
    benefits: [
      'Membantu mesin terasa lebih responsif',
      'Pengecekan dasar kondisi kendaraan',
      'Cocok untuk perawatan berkala ringan'
    ],
    problems: [
      'Tarikan mobil terasa berat',
      'Mesin terasa kurang stabil',
      'Konsumsi bahan bakar mulai terasa boros',
      'Mobil lama tidak dilakukan pengecekan ringan'
    ],
    checks: [
      'Pemeriksaan visual ruang mesin',
      'Pemeriksaan komponen perawatan dasar',
      'Pembersihan atau penyetelan ringan sesuai kondisi',
      'Rekomendasi tindak lanjut jika ditemukan gejala lain'
    ],
    whenNeeded: [
      'Mobil dipakai harian di area Bandung',
      'Performa mesin mulai menurun',
      'Ingin cek kondisi sebelum perjalanan dekat',
      'Butuh perawatan praktis tanpa datang ke bengkel'
    ],
    processEstimate: '± 60 - 90 menit, menyesuaikan kondisi kendaraan.',
    limitations: [
      'Tidak mencakup overhaul atau bongkar mesin besar',
      'Spare part tambahan dikonfirmasi terpisah',
      'Pengerjaan mengikuti kondisi lokasi dan akses kendaraan'
    ],
    image: '/images/services/tune-up-biasa.svg'
  },
  {
    slug: 'tune-up-spesial',
    title: 'Tune Up Spesial',
    price: 'Mulai Rp495.000',
    shortDescription:
      'Tune up lebih lengkap untuk pengecekan dan perawatan kendaraan secara lebih menyeluruh.',
    description:
      'Layanan tune up spesial untuk pelanggan yang menginginkan pengecekan lebih detail, perawatan lebih lengkap, dan rekomendasi teknis yang lebih menyeluruh.',
    benefits: [
      'Pengecekan lebih menyeluruh',
      'Perawatan performa mesin lebih lengkap',
      'Cocok untuk mobil yang mulai terasa bermasalah'
    ],
    problems: [
      'Mesin kurang bertenaga',
      'Idle terasa kurang halus',
      'Mobil jarang dirawat dalam beberapa bulan terakhir',
      'Butuh pengecekan sebelum penggunaan intensif'
    ],
    checks: [
      'Pemeriksaan area mesin dan komponen pendukung',
      'Pengecekan sistem pembakaran dan perawatan ringan terkait',
      'Pemeriksaan cairan dan kondisi komponen dasar',
      'Catatan rekomendasi perbaikan lanjutan bila diperlukan'
    ],
    whenNeeded: [
      'Mobil butuh perawatan lebih detail',
      'Ada gejala performa yang mengganggu',
      'Ingin diagnosis awal sebelum servis lanjutan',
      'Membutuhkan teknisi datang ke rumah atau kantor'
    ],
    processEstimate: '± 90 - 150 menit, tergantung kondisi kendaraan.',
    limitations: [
      'Tidak menggantikan diagnosis bengkel lengkap untuk kerusakan berat',
      'Pekerjaan berat tetap perlu fasilitas bengkel',
      'Ketersediaan spare part perlu dikonfirmasi saat booking'
    ],
    image: '/images/services/tune-up-spesial.svg'
  },
  {
    slug: 'service-rem',
    title: 'Service Rem',
    price: 'Mulai Rp80.000',
    shortDescription:
      'Pengecekan dan perawatan rem untuk membantu menjaga keamanan dan kenyamanan berkendara.',
    description:
      'Layanan pengecekan dan perawatan rem di lokasi pelanggan untuk membantu memastikan sistem pengereman tetap aman digunakan.',
    benefits: [
      'Membantu menjaga keamanan berkendara',
      'Pengecekan awal gejala rem',
      'Rekomendasi penggantian part jika diperlukan'
    ],
    problems: [
      'Rem berbunyi saat diinjak',
      'Pedal rem terasa kurang nyaman',
      'Mobil terasa kurang pakem',
      'Ingin cek rem sebelum perjalanan'
    ],
    checks: [
      'Pengecekan kondisi kampas rem secara visual sesuai akses',
      'Pembersihan komponen rem yang memungkinkan',
      'Pengecekan gejala bunyi atau getaran',
      'Rekomendasi lanjutan bila perlu penggantian komponen'
    ],
    whenNeeded: [
      'Muncul bunyi dari area roda atau rem',
      'Rem terasa berubah dari biasanya',
      'Mobil digunakan intensif di lalu lintas kota',
      'Butuh pemeriksaan awal tanpa datang ke bengkel'
    ],
    processEstimate: '± 45 - 90 menit per area pengerjaan, sesuai kondisi.',
    limitations: [
      'Tidak semua masalah rem dapat diselesaikan di lokasi',
      'Penggantian part menyesuaikan ketersediaan dan jenis mobil',
      'Pekerjaan yang membutuhkan alat khusus akan direkomendasikan ke bengkel'
    ],
    image: '/images/services/service-rem.svg'
  },
  {
    slug: 'ganti-oli',
    title: 'Ganti Oli',
    price: 'Mulai Rp70.000',
    shortDescription:
      'Layanan ganti oli mobil di rumah, kantor, atau lokasi kendaraan pelanggan.',
    description:
      'Layanan penggantian oli mobil di lokasi pelanggan agar perawatan berkala menjadi lebih praktis dan hemat waktu.',
    benefits: [
      'Tidak perlu antre di bengkel',
      'Pengerjaan dapat dilakukan di lokasi kendaraan',
      'Cocok untuk perawatan berkala'
    ],
    problems: [
      'Jadwal ganti oli sudah mendekati batas',
      'Oli terlihat kotor atau berkurang',
      'Mobil sering dipakai harian',
      'Sulit menyempatkan datang ke bengkel'
    ],
    checks: [
      'Pengecekan awal kondisi oli',
      'Penggantian oli sesuai permintaan pelanggan',
      'Pemeriksaan area sekitar filter dan drain plug sesuai akses',
      'Saran interval perawatan berikutnya'
    ],
    whenNeeded: [
      'Kilometer sudah masuk jadwal penggantian oli',
      'Mobil sering digunakan di jalan macet',
      'Ingin ganti oli setelah jam kerja',
      'Butuh layanan di rumah atau kantor'
    ],
    processEstimate: '± 30 - 60 menit, tergantung akses kendaraan.',
    limitations: [
      'Harga oli dan spare part dihitung terpisah jika disediakan Flash Garage',
      'Lokasi harus memungkinkan pengerjaan aman dan bersih',
      'Jenis oli disesuaikan dengan kebutuhan kendaraan'
    ],
    image: '/images/services/ganti-oli.svg'
  },
  {
    slug: 'ganti-oil-filter',
    title: 'Ganti Oil Filter',
    price: 'Mulai Rp40.000 - Rp60.000',
    shortDescription:
      'Penggantian oil filter ukuran 65 sampai 75, menyesuaikan jenis kendaraan dan filter.',
    description:
      'Layanan penggantian oil filter untuk membantu menjaga sirkulasi oli tetap bersih dan mendukung perawatan mesin berkala.',
    benefits: [
      'Membantu menjaga kualitas sirkulasi oli',
      'Dapat digabung dengan layanan ganti oli',
      'Biaya awal jelas dan dikonfirmasi sebelum pengerjaan'
    ],
    problems: [
      'Oil filter sudah masuk jadwal penggantian',
      'Ganti oli ingin dilakukan lebih lengkap',
      'Riwayat perawatan filter belum jelas',
      'Butuh pengecekan filter di lokasi'
    ],
    checks: [
      'Konfirmasi ukuran dan jenis filter',
      'Pengecekan akses oil filter',
      'Penggantian filter jika sesuai ketersediaan',
      'Pemeriksaan kebocoran ringan setelah pemasangan'
    ],
    whenNeeded: [
      'Setiap jadwal ganti oli sesuai rekomendasi kendaraan',
      'Mobil sering dipakai harian',
      'Ingin perawatan oli lebih optimal',
      'Membutuhkan teknisi panggilan'
    ],
    processEstimate: '± 30 - 60 menit jika akses filter memungkinkan.',
    limitations: [
      'Untuk oil filter ukuran 65 sampai 75',
      'Harga dapat menyesuaikan jenis kendaraan dan filter',
      'Beberapa model mobil membutuhkan alat atau akses khusus'
    ],
    image: '/images/services/ganti-oil-filter.svg'
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
