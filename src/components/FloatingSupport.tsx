import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createTicket, generateTicketNumber } from '@/lib/store';
import { toast } from 'sonner';

export function FloatingSupport() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketNum, setTicketNum] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const ticket = createTicket({
      name: fd.get('name') as string || 'Guest',
      email: fd.get('email') as string || '',
      subject: 'Quick Support Request',
      message: fd.get('message') as string || '',
      priority: 'medium',
    });
    setTicketNum(ticket.ticketNumber);
    setSubmitted(true);
    toast.success(`Ticket ${ticket.ticketNumber} created!`);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => { setOpen(!open); setSubmitted(false); }}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-eagle-orange hover:bg-eagle-orange-hover text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Open support chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Support panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 rounded-lg border bg-card shadow-xl animate-slide-up">
          <div className="p-4 border-b eagle-gradient rounded-t-lg">
            <h3 className="font-semibold text-white">EAGLE-EXPRESS Support</h3>
            <p className="text-xs text-white/80">We typically reply within minutes</p>
          </div>
          <div className="p-4">
            {submitted ? (
              <div className="text-center space-y-2">
                <div className="text-eagle-success text-3xl">✓</div>
                <p className="font-medium">Ticket Created!</p>
                <p className="text-sm text-muted-foreground">Reference: <span className="font-mono font-bold">{ticketNum}</span></p>
                <p className="text-xs text-muted-foreground">Our team will respond shortly. Thank you for contacting EAGLE-EXPRESS.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input name="name" placeholder="Your name" required className="text-sm" />
                <Input name="email" type="email" placeholder="Email" required className="text-sm" />
                <Textarea name="message" placeholder="How can we help?" required className="text-sm h-20 resize-none" />
                <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white gap-1">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
