'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { createWhatsAppLink } from '@/lib/whatsapp';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-garage-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={siteConfig.logo}
            alt="Flash Garage"
            className="h-10 w-10 rounded-xl"
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-black uppercase tracking-wide text-white">
              Flash Garage
            </p>
            <p className="text-xs font-semibold text-metal">Home Service Mobil</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-garage-100/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href={createWhatsAppLink()} external>
            Hubungi via WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-label="Buka menu navigasi"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={cn(
                'absolute left-0 top-0 h-0.5 w-5 bg-white transition',
                open && 'top-2 rotate-45'
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-2 h-0.5 w-5 bg-white transition',
                open && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 h-0.5 w-5 bg-white transition',
                open && 'bottom-1.5 -rotate-45'
              )}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-garage-950 px-4 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-garage-100/85 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={createWhatsAppLink()}
              external
              className="mt-3 w-full"
              ariaLabel="Hubungi Flash Garage via WhatsApp"
            >
              Hubungi via WhatsApp
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
