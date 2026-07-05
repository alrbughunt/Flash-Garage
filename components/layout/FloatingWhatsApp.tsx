import { createWhatsAppLink } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Flash Garage via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-electric text-xl font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-garage-700 md:h-16 md:w-16"
    >
      WA
    </a>
  );
}
