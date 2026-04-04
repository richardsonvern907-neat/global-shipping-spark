import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { createShipment, createBooking, calculateQuote, createTicket, updateBookingPayment } from '@/lib/store';
import { useAuth } from '@/context/AuthContext';
import { ClientType } from '@/types';
import { toast } from 'sonner';
import { Package, ChevronRight, ChevronLeft, Send, CheckCircle } from 'lucide-react';

type Step = 'details' | 'review' | 'payment' | 'confirmation';

export default function ShipPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('details');

  // Form state
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [packageType, setPackageType] = useState('parcel');
  const [description, setDescription] = useState('');
  const [clientType, setClientType] = useState<ClientType>(user?.clientType || 'private');

  // Result state
  const [trackingNumber, setTrackingNumber] = useState('');
  const [bookingId, setBookingId] = useState('');
  const [price, setPrice] = useState(0);

  // Payment modal
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [paymentTicketId, setPaymentTicketId] = useState('');

  const handleCreateShipment = () => {
    const quote = calculateQuote({ origin, destination, weight: parseFloat(weight), clientType });
    setPrice(quote.finalPrice);

    const shipment = createShipment({
      origin,
      destination,
      weight: parseFloat(weight),
      description,
      clientType,
      userId: user?.id,
    });

    const booking = createBooking({
      shipmentId: shipment.id,
      trackingNumber: shipment.trackingNumber,
      userId: user?.id,
      origin,
      destination,
      weight: parseFloat(weight),
      packageType,
      clientType,
      price: quote.finalPrice,
    });

    setTrackingNumber(shipment.trackingNumber);
    setBookingId(booking.id);
    setStep('review');
    toast.success(`Shipment ${shipment.trackingNumber} created!`);
  };

  const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const ticket = createTicket({
      name: fd.get('name') as string || user?.name || '',
      email: fd.get('email') as string || user?.email || '',
      subject: `Payment Confirmation - ${trackingNumber}`,
      message: fd.get('message') as string || `Payment for booking ${trackingNumber}`,
      priority: 'high',
    });
    updateBookingPayment(bookingId, ticket.ticketNumber);
    setPaymentTicketId(ticket.ticketNumber);
    setPaymentSubmitted(true);
  };

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container max-w-2xl">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {(['details', 'review', 'payment', 'confirmation'] as Step[]).map((s, i) => (
            <React.Fragment key={s}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === s ? 'bg-eagle-orange text-white' :
                (['details','review','payment','confirmation'].indexOf(step) > i) ? 'bg-eagle-success text-white' :
                'bg-secondary text-muted-foreground'
              }`}>
                {i + 1}
              </div>
              {i < 3 && <div className="w-8 h-0.5 bg-border" />}
            </React.Fragment>
          ))}
        </div>

        {step === 'details' && (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Package className="h-5 w-5 text-eagle-orange" /> Shipment Details</CardTitle>
              <CardDescription>Enter your shipment information. We support any global route.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={e => { e.preventDefault(); handleCreateShipment(); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Origin *</label>
                    <Input value={origin} onChange={e => setOrigin(e.target.value)} placeholder="e.g. Dubai, UAE" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Destination *</label>
                    <Input value={destination} onChange={e => setDestination(e.target.value)} placeholder="e.g. New York, USA" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Weight (kg) *</label>
                    <Input type="number" min="0.1" step="0.1" value={weight} onChange={e => setWeight(e.target.value)} placeholder="5.0" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Package Type</label>
                    <Select value={packageType} onValueChange={setPackageType}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parcel">Parcel</SelectItem>
                        <SelectItem value="envelope">Envelope</SelectItem>
                        <SelectItem value="pallet">Pallet</SelectItem>
                        <SelectItem value="freight">Freight Container</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Client Type</label>
                  <Select value={clientType} onValueChange={(v: ClientType) => setClientType(v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="international">International Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Description (optional)</label>
                  <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Package contents, special instructions..." className="resize-none" />
                </div>
                <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white">
                  Create Shipment <ChevronRight className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 'review' && (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-eagle-success" /> Booking Confirmed</CardTitle>
              <CardDescription>Your shipment has been booked successfully.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary border">
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground">Tracking Number</p>
                  <p className="text-2xl font-mono font-bold text-eagle-orange">{trackingNumber}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><span className="text-muted-foreground">From:</span> {origin}</div>
                  <div><span className="text-muted-foreground">To:</span> {destination}</div>
                  <div><span className="text-muted-foreground">Weight:</span> {weight} kg</div>
                  <div><span className="text-muted-foreground">Type:</span> {packageType}</div>
                  <div className="col-span-2"><span className="text-muted-foreground">Total:</span> <span className="font-bold text-eagle-orange">CHF {price.toFixed(2)}</span></div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => navigate(`/tracking?number=${trackingNumber}`)}>
                  Track Shipment
                </Button>
                <Button className="flex-1 bg-eagle-orange hover:bg-eagle-orange-hover text-white" onClick={() => { setStep('payment'); setPaymentModalOpen(true); }}>
                  Proceed to Payment <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 'payment' && (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Payment</CardTitle>
              <CardDescription>Complete your payment to finalize the shipment.</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">Amount due: <span className="font-bold text-xl text-eagle-orange">CHF {price.toFixed(2)}</span></p>
              <Button className="bg-eagle-orange hover:bg-eagle-orange-hover text-white" onClick={() => setPaymentModalOpen(true)}>
                Contact Support for Payment Confirmation
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 'confirmation' && (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-eagle-success"><CheckCircle className="h-6 w-6" /> Payment Confirmed</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">Your payment has been processed. Ticket reference: <span className="font-mono font-bold">{paymentTicketId}</span></p>
              <p className="text-sm text-muted-foreground">Tracking Number: <span className="font-mono font-bold text-eagle-orange">{trackingNumber}</span></p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => navigate(`/tracking?number=${trackingNumber}`)}>Track Shipment</Button>
                <Button className="bg-eagle-orange hover:bg-eagle-orange-hover text-white" onClick={() => { setStep('details'); setOrigin(''); setDestination(''); setWeight(''); setDescription(''); }}>Ship Another</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Payment Support Modal */}
        <Dialog open={paymentModalOpen} onOpenChange={setPaymentModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Support for Payment</DialogTitle>
              <DialogDescription>Submit your payment details and our team will confirm instantly.</DialogDescription>
            </DialogHeader>
            {paymentSubmitted ? (
              <div className="text-center space-y-3 py-4">
                <div className="text-4xl">✅</div>
                <p className="font-semibold text-eagle-success">Payment Confirmed Successfully!</p>
                <p className="text-sm text-muted-foreground">Ticket ID: <span className="font-mono font-bold">{paymentTicketId}</span></p>
                <p className="text-xs text-muted-foreground">A confirmation has been sent to your email. Your shipment {trackingNumber} is now being processed.</p>
                <Button onClick={() => { setPaymentModalOpen(false); setStep('confirmation'); }} className="bg-eagle-orange hover:bg-eagle-orange-hover text-white">Done</Button>
              </div>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-3">
                <Input name="name" defaultValue={user?.name} placeholder="Full Name" required />
                <Input name="email" type="email" defaultValue={user?.email} placeholder="Email" required />
                <Textarea name="message" defaultValue={`Payment for shipment ${trackingNumber} — CHF ${price.toFixed(2)}`} className="resize-none" required />
                <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white gap-1">
                  <Send className="h-4 w-4" /> Confirm Payment
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
