import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import PromoSection from '@/components/sections/PromoSection';
import HowItWorks from '@/components/sections/HowItWorks';
import TrustSection from '@/components/sections/TrustSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PromoSection />
      <HowItWorks />
      <TrustSection />
      <FAQSection limit={3} />
      <CTASection />
    </>
  );
}
