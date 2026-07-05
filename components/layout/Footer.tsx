import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { createWhatsAppLink } from '@/lib/whatsapp';
import Button from '@/components/ui/Button';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-garage-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-6">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <img src={siteConfig.logo} alt="Flash Garage" className="h-12 w-12" />
            <div>
              <p className="font-display text-2xl font-black uppercase text-white">
                Flash Garage
              </p>
              <p className="text-sm text-metal">{siteConfig.tagline}</p>
            </div>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-garage-100/70">
            Teknisi datang ke rumah, kantor, atau lokasi kendaraan untuk membantu servis
            ringan, tune up, service rem, ganti oli, dan diagnosis awal yang memungkinkan
            dikerjakan di lokasi.
          </p>
          <div className="mt-6">
            <Button href={createWhatsAppLink()} external>
              Booking Home Service
            </Button>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-black uppercase text-white">Navigasi</h3>
          <div className="mt-4 flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-garage-100/70 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-black uppercase text-white">Jam Layanan</h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-garage-100/70">
            <p>
              <strong className="text-white">Booking:</strong>
              <br />
              {siteConfig.hours.booking}
            </p>
            <p>
              <strong className="text-white">Eksekusi teknisi:</strong>
              <br />
              {siteConfig.hours.service}
            </p>
            <p>{siteConfig.hours.days}</p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-black uppercase text-white">Kontak</h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-garage-100/70">
            <p>{siteConfig.operationalArea}</p>
            <a href={`mailto:${siteConfig.email}`} className="block hover:text-white">
              {siteConfig.email}
            </a>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white"
            >
              WhatsApp: +{siteConfig.whatsappNumber}
            </a>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-electric hover:text-white">
                Instagram
              </a>
              <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="text-electric hover:text-white">
                TikTok
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="text-electric hover:text-white">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-garage-100/55">
        © {new Date().getFullYear()} Flash Garage. Website awal profesional untuk layanan
        bengkel mobil panggilan di Bandung.
      </div>
    </footer>
  );
}
