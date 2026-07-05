export const siteConfig = {
  name: 'Flash Garage',
  tagline: 'Bengkel mobil panggilan di Bandung',
  description:
    'Flash Garage adalah layanan bengkel mobil panggilan di Bandung untuk tune up, service rem, ganti oli, ganti oil filter, dan pengecekan kendaraan langsung di lokasi Anda.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://flashgarage.id',
  operationalArea: 'Jl. Soekarno Hatta, Bandung, Jawa Barat',
  whatsappNumber: '6282151953941',
  email: 'flashgarage04@gmail.com',
  instagram:
    'https://www.instagram.com/flash_garage.official?igsh=MTgzanM2Z2NoOHl6eQ%3D%3D&utm_source=qr',
  tiktok: 'https://www.tiktok.com/@flash_garage.official?_r=1&_t=ZS-97m1tEnWZzm',
  facebook: 'https://www.facebook.com/share/1Cuq61iA2H/?mibextid=wwXIfr',
  logo: '/images/logo/flash-garage-logo.svg',
  hours: {
    booking: '08.00 - 16.00 WIB',
    service: '16.00 - 21.00 WIB',
    days: 'Buka setiap hari'
  },
  nav: [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Area Layanan', href: '/area-layanan' },
    { label: 'Dokumentasi', href: '/dokumentasi' },
    { label: 'Kontak', href: '/kontak' }
  ],
  keywords: [
    'bengkel mobil panggilan Bandung',
    'home service mobil Bandung',
    'servis mobil panggilan Bandung',
    'mekanik mobil panggilan Bandung',
    'tune up mobil Bandung',
    'ganti oli mobil di rumah Bandung',
    'service rem mobil Bandung',
    'ganti oil filter Bandung',
    'servis mobil malam Bandung'
  ]
};
