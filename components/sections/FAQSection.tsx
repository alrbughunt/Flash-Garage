import SectionTitle from '@/components/ui/SectionTitle';
import { faqs } from '@/data/faqs';

type FAQSectionProps = {
  limit?: number;
};

export default function FAQSection({ limit }: FAQSectionProps) {
  const items = typeof limit === 'number' ? faqs.slice(0, limit) : faqs;

  return (
    <section className="bg-[#080C14] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Pertanyaan yang sering ditanyakan"
          description="Informasi penting sebelum melakukan booking layanan home service mobil Flash Garage."
          align="center"
        />

        <div className="mt-12 space-y-4">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-black uppercase text-white">
                {faq.question}
                <span className="rounded-full bg-electric px-3 py-1 text-sm text-white transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-garage-100/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
