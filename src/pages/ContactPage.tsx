import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createTicket } from '@/lib/store';
import { TicketPriority } from '@/types';
import { toast } from 'sonner';
import { Send, CheckCircle, Headphones, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [ticketNum, setTicketNum] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const ticket = createTicket({
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      subject: fd.get('subject') as string,
      message: fd.get('message') as string,
      priority: (fd.get('priority') as TicketPriority) || 'medium',
    });
    setTicketNum(ticket.ticketNumber);
    setSubmitted(true);
    toast.success(`Support ticket ${ticket.ticketNumber} created!`);
  };

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact & Support</h1>
          <p className="text-muted-foreground">Our team is here to help 24/7. Reach out anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Headphones className="h-5 w-5 text-eagle-orange" />
                  <div>
                    <p className="font-medium text-sm">24/7 Support</p>
                    <p className="text-xs text-muted-foreground">We respond within minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-eagle-orange" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-xs text-muted-foreground">support@eagle-express.ch</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-eagle-orange" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-xs text-muted-foreground">+41 44 000 0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-eagle-orange" />
                  <div>
                    <p className="font-medium text-sm">Headquarters</p>
                    <p className="text-xs text-muted-foreground">Zurich, Switzerland</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Form */}
          <div className="md:col-span-2">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Submit a Support Ticket</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you immediately.</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle className="h-16 w-16 text-eagle-success mx-auto" />
                    <h3 className="text-xl font-bold">Ticket Submitted!</h3>
                    <p className="text-muted-foreground">Your reference number: <span className="font-mono font-bold text-eagle-orange">{ticketNum}</span></p>
                    <p className="text-sm text-muted-foreground">Our support team has been notified and will respond within minutes. You will receive a confirmation email shortly.</p>
                    <div className="p-4 rounded-lg bg-secondary border text-sm text-left">
                      <p className="font-medium mb-1">Escalation Workflow:</p>
                      <p className="text-muted-foreground">1. Ticket assigned to specialist → 2. Initial response within 15 min → 3. Resolution within 24h → 4. Follow-up confirmation</p>
                    </div>
                    <Button onClick={() => { setSubmitted(false); }} className="bg-eagle-orange hover:bg-eagle-orange-hover text-white">Submit Another Ticket</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Name *</label>
                        <Input name="name" placeholder="Your name" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email *</label>
                        <Input name="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Subject *</label>
                        <Input name="subject" placeholder="What do you need help with?" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Priority</label>
                        <Select name="priority" defaultValue="medium">
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Message *</label>
                      <Textarea name="message" placeholder="Describe your issue or question in detail..." className="min-h-[120px]" required />
                    </div>
                    <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white gap-1">
                      <Send className="h-4 w-4" /> Submit Ticket
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
