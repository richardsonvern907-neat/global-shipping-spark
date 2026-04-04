import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Truck, Globe, ShoppingBag, Warehouse, ChevronRight, Award, Shield, Leaf, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { calculateQuote } from '@/lib/store';
import { ClientType, QuoteResult } from '@/types';

const SERVICES = [
  { icon: Truck, title: 'Express Shipping', desc: 'Next-day and same-day delivery across Switzerland and Europe.' },
  { icon: Globe, title: 'International Freight', desc: 'Global cargo solutions for businesses of any size, any route.' },
  { icon: ShoppingBag, title: 'E-Commerce Solutions', desc: 'Seamless fulfillment and returns management for online retailers.' },
  { icon: Warehouse, title: 'Warehousing & Logistics', desc: 'State-of-the-art storage facilities with real-time inventory tracking.' },
];

const CERTIFICATIONS = [
  { icon: Award, label: 'ISO 9001:2015' },
  { icon: Shield, label: 'Swiss GDP Certified' },
  { icon: Plane, label: 'IATA Member' },
  { icon: Leaf, label: 'EcoVadis Gold' },
];

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
    const result = calculateQuote({
      origin: quoteOrigin,
      destination: quoteDestination,
      weight: parseFloat(quoteWeight),
      clientType: quoteClientType,
    });
    setQuoteResult(result);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative eagle-gradient py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-eagle-orange rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
              Connecting the World<br />
              <span className="text-eagle-orange">from Zurich</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 animate-fade-in">
              Enterprise logistics powered by Swiss precision. Ship anywhere, track everything, deliver on time.
            </p>

            {/* Track Your Shipment Box */}
            <form onSubmit={handleTrack} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto animate-slide-up">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  value={trackingInput}
                  onChange={e => setTrackingInput(e.target.value)}
                  placeholder="Track your shipment (e.g. EE1234567890)"
                  className="pl-10 h-12 bg-white text-foreground border-0"
                  aria-label="Tracking number"
                />
              </div>
              <Button type="submit" className="h-12 px-8 bg-eagle-orange hover:bg-eagle-orange-hover text-white font-semibold">
                Track <ChevronRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/70">
              <span>✓ Real-time tracking</span>
              <span>✓ 200+ countries</span>
              <span>✓ Swiss quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(svc => (
              <Card key={svc.title} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <svc.icon className="h-10 w-10 text-eagle-orange mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{svc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{svc.desc}</p>
                  <Link to="/ship" className="inline-flex items-center mt-3 text-sm font-medium text-eagle-orange hover:underline">
                    Learn more <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="py-16 bg-secondary/50">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Get an Instant Quote</h2>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleQuote} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Origin</label>
                    <Input value={quoteOrigin} onChange={e => setQuoteOrigin(e.target.value)} placeholder="e.g. Dubai, UAE" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Destination</label>
                    <Input value={quoteDestination} onChange={e => setQuoteDestination(e.target.value)} placeholder="e.g. United States" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Weight (kg)</label>
                    <Input type="number" min="0.1" step="0.1" value={quoteWeight} onChange={e => setQuoteWeight(e.target.value)} placeholder="5.0" required />
                  </div>
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
                <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white">Calculate Quote</Button>
              </form>

              {quoteResult && (
                <div className="mt-6 p-4 rounded-lg bg-secondary border animate-slide-up">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm text-muted-foreground">Service</span>
                    <span className="font-medium">{quoteResult.service}</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm text-muted-foreground">Base Price</span>
                    <span>{quoteResult.currency} {quoteResult.basePrice.toFixed(2)}</span>
                  </div>
                  {quoteResult.discount > 0 && (
                    <div className="flex justify-between items-baseline mb-2 text-eagle-success">
                      <span className="text-sm">International Discount (15%)</span>
                      <span>-{quoteResult.currency} {quoteResult.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-baseline border-t pt-2 mt-2">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-eagle-orange">{quoteResult.currency} {quoteResult.finalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Estimated delivery: {quoteResult.estimatedDays} business days</p>
                  <Link to="/ship">
                    <Button className="w-full mt-3 bg-eagle-orange hover:bg-eagle-orange-hover text-white">Book This Shipment</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {CERTIFICATIONS.map(cert => (
              <div key={cert.label} className="flex flex-col items-center gap-2 text-muted-foreground">
                <cert.icon className="h-8 w-8" />
                <span className="text-xs font-medium">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 eagle-gradient">
        <div className="container text-center text-white space-y-6">
          <h2 className="text-3xl font-bold">Ready to Ship?</h2>
          <p className="text-white/80 max-w-lg mx-auto">Join thousands of businesses and individuals who trust EAGLE-EXPRESS for their global logistics needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/ship"><Button size="lg" className="bg-eagle-orange hover:bg-eagle-orange-hover text-white">Ship Now</Button></Link>
            <Link to="/signup"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Create Account</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
