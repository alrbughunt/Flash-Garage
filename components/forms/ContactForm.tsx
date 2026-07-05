'use client';

import { FormEvent, useState } from 'react';
import { createWhatsAppLink } from '@/lib/whatsapp';

const initialState = {
  name: '',
  car: '',
  year: '',
  complaint: '',
  location: '',
  time: ''
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);

  function updateField(field: keyof typeof initialState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Halo Flash Garage, saya ingin konsultasi layanan home service mobil.

Nama:
${form.name}

Data mobil:
Merk/Tipe: ${form.car}
Tahun: ${form.year}
Keluhan: ${form.complaint}
Lokasi: ${form.location}
Waktu yang diinginkan: ${form.time}`;

    window.open(createWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  }

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-garage-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-garage-100/35 focus:border-electric focus:ring-2 focus:ring-electric/30';

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-metal"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-garage-100/80">
          Nama
          <input
            className={inputClass}
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Nama Anda"
          />
        </label>
        <label className="text-sm font-semibold text-garage-100/80">
          Merk/Tipe Mobil
          <input
            className={inputClass}
            value={form.car}
            onChange={(event) => updateField('car', event.target.value)}
            placeholder="Contoh: Avanza 1.3 G"
          />
        </label>
        <label className="text-sm font-semibold text-garage-100/80">
          Tahun
          <input
            className={inputClass}
            value={form.year}
            onChange={(event) => updateField('year', event.target.value)}
            placeholder="Contoh: 2018"
          />
        </label>
        <label className="text-sm font-semibold text-garage-100/80">
          Waktu yang Diinginkan
          <input
            className={inputClass}
            value={form.time}
            onChange={(event) => updateField('time', event.target.value)}
            placeholder="Contoh: Hari ini pukul 17.00"
          />
        </label>
        <label className="text-sm font-semibold text-garage-100/80 md:col-span-2">
          Lokasi
          <input
            className={inputClass}
            value={form.location}
            onChange={(event) => updateField('location', event.target.value)}
            placeholder="Kirim alamat atau area umum"
          />
        </label>
        <label className="text-sm font-semibold text-garage-100/80 md:col-span-2">
          Keluhan
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            value={form.complaint}
            onChange={(event) => updateField('complaint', event.target.value)}
            placeholder="Ceritakan gejala mobil Anda"
          />
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-electric px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-garage-700"
        >
          Kirim ke WhatsApp
        </button>
      </div>

      <p className="mt-4 text-xs leading-6 text-garage-100/55">
        Form ini tidak menyimpan data ke server. Saat dikirim, pesan akan dibuka melalui
        WhatsApp.
      </p>
    </form>
  );
}
