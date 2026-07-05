import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { siteConfig } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-garage-radial">
      <div className="absolute inset-0 -z-10 opacity-25">
        <div className="absolute left-0 top-24 h-px w-full bg-metal-line" />
        <div className="absolute bottom-20 left-0 h-px w-full bg-metal-line" />
        <div className="absolute -right-20 top-24 h-64 w-64 rounded-full border border-electric/25" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div>
          <Badge>Bengkel Mobil Panggilan Bandung</Badge>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
            Bengkel Mobil Panggilan di Bandung, Teknisi Datang ke Lokasi Anda
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-garage-100/82 md:text-lg">
            Flash Garage membantu tune up, service rem, ganti oli, ganti oil filter, dan pengecekan mobil langsung di rumah, kantor,
            atau lokasi kendaraan Anda.
          </p>

          <div className="mt-6 rounded-3xl border border-electric/25 bg-electric/10 p-5">
            <p className="text-sm font-semibold leading-7 text-garage-100/85">
              Booking dan konsultasi tersedia pukul{' '}
              <strong className="text-white">{siteConfig.hours.booking}</strong>.
              Pengerjaan teknisi dilakukan pukul{' '}
              <strong className="text-white">{siteConfig.hours.service}</strong>{' '}
              setiap hari.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={createWhatsAppLink()} external className="sm:min-w-56">
              Panggil Teknisi Sekarang
            </Button>
            <Button href="/layanan" variant="secondary" className="sm:min-w-48">
              Lihat Layanan
            </Button>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-garage-100/62">
            Kirim keluhan, data mobil, dan lokasi melalui WhatsApp. Admin akan
            membantu cek jangkauan layanan dan estimasi biaya sebelum pengerjaan.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-electric/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.14] to-white/[0.04] p-6 shadow-metal backdrop-blur">
            <div className="rounded-[2rem] border border-white/10 bg-garage-950/78 p-6">
              <div className="flex items-center gap-4">
                <img src={siteConfig.logo} alt="Logo Flash Garage" className="h-20 w-20" />
                <div>
                  <p className="font-display text-3xl font-black uppercase text-white">
                    Flash Garage
                  </p>
                  <p className="text-sm font-semibold text-metal">
                    Piston. Petir. Respons cepat.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-metal">
                    Fokus Layanan
                  </p>
                  <p className="mt-3 text-xl font-black text-white">
                    Servis ringan dan diagnosis awal di lokasi pelanggan.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-metal">
                      Booking
                    </p>
                    <p className="mt-2 text-sm font-bold text-white">
                      {siteConfig.hours.booking}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-metal">
                      Teknisi
                    </p>
                    <p className="mt-2 text-sm font-bold text-white">
                      {siteConfig.hours.service}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-electric/30 bg-electric/10 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric">
                    Titik Layanan Utama
                  </p>
                  <p className="mt-2 text-white">{siteConfig.operationalArea}</p>
                  <p className="mt-2 text-sm text-garage-100/70">
                    Bukan bengkel kunjungan fisik. Teknisi datang ke lokasi
                    pelanggan sesuai jadwal dan jangkauan layanan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
