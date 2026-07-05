import { siteConfig } from './site';

export const defaultWhatsAppMessage = `Halo Flash Garage, saya ingin konsultasi layanan home service mobil.

Data mobil:
Merk/Tipe:
Tahun:
Keluhan:
Lokasi:
Waktu yang diinginkan:`;

export function createWhatsAppLink(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createServiceWhatsAppLink(serviceName: string) {
  return createWhatsAppLink(`Halo Flash Garage, saya ingin konsultasi layanan ${serviceName}.

Data mobil:
Merk/Tipe:
Tahun:
Keluhan:
Lokasi:
Waktu yang diinginkan:`);
}
