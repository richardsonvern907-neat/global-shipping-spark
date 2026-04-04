import { Award, Shield, Plane, Leaf, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/context/LanguageContext';
import zurichImg from '@/assets/about-zurich.jpg';
import React from 'react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const TESTIMONIALS = [
  { name: 'Sarah M.', role: 'Private Client, Dubai', text: 'EAGLE-EXPRESS shipped my personal belongings from Dubai to New York in just 3 days. The tracking was seamless, and the customer support team was incredibly responsive. Best logistics experience I\'ve ever had.' },
  { name: 'Thomas K.', role: 'CEO, KernTech GmbH, Zurich', text: 'As an international business, we needed a reliable partner for our European distribution. EAGLE-EXPRESS delivers on time, every time. Their enterprise tools and route management saved us 30% on logistics costs.' },
  { name: 'Aisha R.', role: 'Operations Director, Gulf Trade LLC', text: 'We ship over 500 parcels per month through EAGLE-EXPRESS. Their international freight solutions and customs handling are world-class. The dedicated account manager makes all the difference.' },
  { name: 'Marcus L.', role: 'Private Client, Berlin', text: 'I was skeptical about a newer logistics company, but EAGLE-EXPRESS proved me wrong. Swiss precision combined with global reach — my package arrived ahead of schedule. Highly recommended!' },
];

const CERTS = [
  { icon: Award, title: 'ISO 9001:2015', desc: 'Quality Management System certified for global logistics operations.' },
  { icon: Shield, title: 'Swiss GDP Certified', desc: 'Good Distribution Practice for pharmaceutical and sensitive cargo.' },
  { icon: Plane, title: 'IATA Member', desc: 'International Air Transport Association accredited agent.' },
  { icon: Leaf, title: 'EcoVadis Gold', desc: 'Recognized for sustainability and corporate social responsibility.' },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={zurichImg} alt="Zurich, Switzerland - EAGLE-EXPRESS headquarters" width={1200} height={600} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--eagle-navy))/0.9] via-[hsl(var(--eagle-navy))/0.7] to-[hsl(var(--eagle-navy))/0.5]" />
        <div className="container relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in">{t.about_title}</h1>
          <p className="text-lg text-white/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>{t.about_subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-6">
          <AnimatedSection><h2 className="text-3xl font-bold">{t.about_mission}</h2></AnimatedSection>
          <AnimatedSection delay={100}><p className="text-muted-foreground leading-relaxed">{t.about_story}</p></AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[{ v: '200+', l: t.stat_countries }, { v: '99.7%', l: t.stat_ontime }, { v: '24/7', l: t.stat_support }].map((s, i) => (
              <AnimatedSection key={s.l} delay={i * 150} className="text-center p-6 rounded-lg bg-secondary/50 border">
                <p className="text-3xl font-bold text-eagle-orange">{s.v}</p>
                <p className="text-sm text-muted-foreground">{s.l}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container">
          <AnimatedSection className="text-center mb-12"><h2 className="text-3xl font-bold">{t.about_testimonials}</h2></AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 150}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="pt-6">
                    <Quote className="h-6 w-6 text-eagle-orange mb-3" />
                    <p className="text-sm text-muted-foreground mb-4 italic">"{item.text}"</p>
                    <div><p className="font-semibold text-sm">{item.name}</p><p className="text-xs text-muted-foreground">{item.role}</p></div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <AnimatedSection className="text-center mb-12"><h2 className="text-3xl font-bold">{t.about_certs}</h2></AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {CERTS.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="pt-6">
                    <c.icon className="h-10 w-10 text-eagle-orange mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{c.title}</h3>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
