import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronRight, Award, Shield, Leaf, Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { calculateQuote } from '@/lib/store';
import { ClientType, QuoteResult } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImg from '@/assets/hero-logistics.jpg';
import expressImg from '@/assets/service-express.jpg';
import freightImg from '@/assets/service-freight.jpg';
import ecommerceImg from '@/assets/service-ecommerce.jpg';
import warehouseImg from '@/assets/service-warehouse.jpg';

const SERVICES = [
  { img: expressImg, title: 'Express Shipping', desc: 'Next-day and same-day delivery across Switzerland and Europe.' },
  { img: freightImg, title: 'International Freight', desc: 'Global cargo solutions for businesses of any size, any route.' },
  { img: ecommerceImg, title: 'E-Commerce Solutions', desc: 'Seamless fulfillment and returns management for online retailers.' },
  { img: warehouseImg, title: 'Warehousing & Logistics', desc: 'State-of-the-art storage facilities with real-time inventory tracking.' },
];

const CERTIFICATIONS = [
  { icon: Award, label: 'ISO 9001:2015' },
  { icon: Shield, label: 'Swiss GDP Certified' },
  { icon: Plane, label: 'IATA Member' },
  { icon: Leaf, label: 'EcoVadis Gold' },
];

const STATS = [
  { value: '200+', label: 'Countries Served' },
  { value: '99.7%', label: 'On-Time Delivery' },
  { value: '50K+', label: 'Monthly Shipments' },
  { value: '24/7', label: 'Global Support' },
];

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [trackingInput, setTrackingInput] = useState('');
  const [quoteOrigin, setQuoteOrigin] = useState('');
  const [quoteDestination, setQuoteDestination] = useState('');
  const [quoteWeight, setQuoteWeight] = useState('');
  const [quoteClientType, setQuoteClientType] = useState<ClientType>('private');
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingInput.trim()) navigate(`/tracking?number=${trackingInput.trim()}`);
  };

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteOrigin || !quoteDestination || !quoteWeight) return;
    setQuoteResult(calculateQuote({ origin: quoteOrigin, destination: quoteDestination, weight: parseFloat(quoteWeight), clientType: quoteClientType }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <img src={heroImg} alt="EAGLE-EXPRESS logistics hub" width={1920} height={800} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--eagle-navy))/0.92] via-[hsl(var(--eagle-navy))/0.8] to-[hsl(var(--eagle-navy))/0.6]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-eagle-orange rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              Connecting the World<br />
              <span className="text-eagle-orange">from Zurich</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Enterprise logistics powered by Swiss precision. Ship anywhere, track everything, deliver on time.
            </p>

            <form onSubmit={handleTrack} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input value={trackingInput} onChange={e => setTrackingInput(e.target.value)} placeholder="Track your shipment (e.g. EE1234567890)" className="pl-10 h-12 bg-white text-foreground border-0 shadow-lg" aria-label="Tracking number" />
              </div>
              <Button type="submit" className="h-12 px-8 bg-eagle-orange hover:bg-eagle-orange-hover text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Track <ChevronRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/70 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <span>✓ Real-time tracking</span>
              <span>✓ 200+ countries</span>
              <span>✓ Swiss quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-eagle-navy py-8 -mt-1">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-eagle-orange">{stat.value}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive logistics solutions tailored to your needs — from express parcels to global freight.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 150}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img src={svc.img} alt={svc.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{svc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{svc.desc}</p>
                    <Link to="/ship" className="inline-flex items-center mt-3 text-sm font-medium text-eagle-orange hover:underline group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="py-16 bg-secondary/50">
        <div className="container max-w-2xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Get an Instant Quote</h2>
            <p className="text-muted-foreground">Transparent pricing — no hidden fees.</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleQuote} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium mb-1 block">Origin</label><Input value={quoteOrigin} onChange={e => setQuoteOrigin(e.target.value)} placeholder="e.g. Dubai, UAE" required /></div>
                    <div><label className="text-sm font-medium mb-1 block">Destination</label><Input value={quoteDestination} onChange={e => setQuoteDestination(e.target.value)} placeholder="e.g. United States" required /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-sm font-medium mb-1 block">Weight (kg)</label><Input type="number" min="0.1" step="0.1" value={quoteWeight} onChange={e => setQuoteWeight(e.target.value)} placeholder="5.0" required /></div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Client Type</label>
                      <Select value={quoteClientType} onValueChange={(v: ClientType) => setQuoteClientType(v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="international">International Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white hover:scale-[1.02] transition-transform">Calculate Quote</Button>
                </form>
                {quoteResult && (
                  <div className="mt-6 p-4 rounded-lg bg-secondary border animate-slide-up">
                    <div className="flex justify-between items-baseline mb-2"><span className="text-sm text-muted-foreground">Service</span><span className="font-medium">{quoteResult.service}</span></div>
                    <div className="flex justify-between items-baseline mb-2"><span className="text-sm text-muted-foreground">Base Price</span><span>{quoteResult.currency} {quoteResult.basePrice.toFixed(2)}</span></div>
                    {quoteResult.discount > 0 && <div className="flex justify-between items-baseline mb-2 text-eagle-success"><span className="text-sm">International Discount (15%)</span><span>-{quoteResult.currency} {quoteResult.discount.toFixed(2)}</span></div>}
                    <div className="flex justify-between items-baseline border-t pt-2 mt-2"><span className="font-semibold">Total</span><span className="text-xl font-bold text-eagle-orange">{quoteResult.currency} {quoteResult.finalPrice.toFixed(2)}</span></div>
                    <p className="text-xs text-muted-foreground mt-2">Estimated delivery: {quoteResult.estimatedDays} business days</p>
                    <Link to="/ship"><Button className="w-full mt-3 bg-eagle-orange hover:bg-eagle-orange-hover text-white">Book This Shipment</Button></Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {CERTIFICATIONS.map((cert, i) => (
              <AnimatedSection key={cert.label} delay={i * 100} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-eagle-orange transition-colors cursor-default">
                <cert.icon className="h-8 w-8" />
                <span className="text-xs font-medium">{cert.label}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 eagle-gradient" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eagle-orange rounded-full blur-[150px]" />
        </div>
        <AnimatedSection className="container relative z-10 text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Ship?</h2>
          <p className="text-white/80 max-w-lg mx-auto">Join thousands of businesses and individuals who trust EAGLE-EXPRESS for their global logistics needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/ship"><Button size="lg" className="bg-eagle-orange hover:bg-eagle-orange-hover text-white hover:scale-105 transition-transform shadow-lg">Ship Now</Button></Link>
            <Link to="/signup"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">Create Account</Button></Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
