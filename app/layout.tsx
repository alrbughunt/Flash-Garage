import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Flash Garage | Bengkel Mobil Panggilan Bandung',
    template: '%s | Flash Garage'
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Flash Garage' }],
  creator: 'Flash Garage',
  publisher: 'Flash Garage',
  openGraph: {
    title: 'Flash Garage | Bengkel Mobil Panggilan Bandung',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: 'Flash Garage',
    locale: 'id_ID',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flash Garage | Bengkel Mobil Panggilan Bandung',
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
