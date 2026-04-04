import { Award, Shield, Plane, Leaf, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Private Client, Dubai',
    text: 'EAGLE-EXPRESS shipped my personal belongings from Dubai to New York in just 3 days. The tracking was seamless, and the customer support team was incredibly responsive. Best logistics experience I\'ve ever had.',
  },
  {
    name: 'Thomas K.',
    role: 'CEO, KernTech GmbH, Zurich',
    text: 'As an international business, we needed a reliable partner for our European distribution. EAGLE-EXPRESS delivers on time, every time. Their enterprise tools and route management saved us 30% on logistics costs.',
  },
  {
    name: 'Aisha R.',
    role: 'Operations Director, Gulf Trade LLC',
    text: 'We ship over 500 parcels per month through EAGLE-EXPRESS. Their international freight solutions and customs handling are world-class. The dedicated account manager makes all the difference.',
  },
  {
    name: 'Marcus L.',
    role: 'Private Client, Berlin',
    text: 'I was skeptical about a newer logistics company, but EAGLE-EXPRESS proved me wrong. Swiss precision combined with global reach — my package arrived ahead of schedule. Highly recommended!',
  },
];

const CERTS = [
  { icon: Award, title: 'ISO 9001:2015', desc: 'Quality Management System certified for global logistics operations.' },
  { icon: Shield, title: 'Swiss GDP Certified', desc: 'Good Distribution Practice for pharmaceutical and sensitive cargo.' },
  { icon: Plane, title: 'IATA Member', desc: 'International Air Transport Association accredited agent.' },
  { icon: Leaf, title: 'EcoVadis Gold', desc: 'Recognized for sustainability and corporate social responsibility.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="eagle-gradient py-16 md:py-24 text-white">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">About EAGLE-EXPRESS</h1>
          <p className="text-lg text-white/80 animate-fade-in">
            Founded 2024 in Zurich, Switzerland — Connecting the world with reliable, sustainable logistics.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            EAGLE-EXPRESS was born from a simple vision: to bring Swiss precision to global logistics. Headquartered in Zurich, we combine cutting-edge technology with decades of industry expertise to deliver packages across 200+ countries.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're a private individual shipping a gift to a loved one or an international enterprise managing complex supply chains, EAGLE-EXPRESS provides the tools, transparency, and trust you need.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-eagle-orange">200+</p>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-eagle-orange">99.7%</p>
              <p className="text-sm text-muted-foreground">On-Time Delivery</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-eagle-orange">24/7</p>
              <p className="text-sm text-muted-foreground">Global Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map(t => (
              <Card key={t.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 text-eagle-orange mb-3" />
                  <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {CERTS.map(c => (
              <Card key={c.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <c.icon className="h-10 w-10 text-eagle-orange mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
