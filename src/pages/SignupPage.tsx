import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/context/AuthContext';
import { generateTrackingNumber } from '@/lib/store';
import { ClientType } from '@/types';
import { toast } from 'sonner';
import { UserPlus, Mail } from 'lucide-react';

export default function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [welcomeEmail, setWelcomeEmail] = useState('');
  const [sampleTracking, setSampleTracking] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      const user = signup(
        fd.get('name') as string,
        fd.get('email') as string,
        fd.get('password') as string,
        fd.get('clientType') as ClientType,
        fd.get('company') as string || undefined,
      );
      setWelcomeEmail(user.email);
      setSampleTracking(generateTrackingNumber());
      setWelcomeOpen(true);
      toast.success('Account created successfully!');
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen py-8 md:py-16 flex items-center justify-center">
      <div className="container max-w-md">
        <Card className="animate-fade-in">
          <CardHeader className="text-center">
            <UserPlus className="h-10 w-10 text-eagle-orange mx-auto mb-2" />
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>Join EAGLE-EXPRESS and start shipping globally</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Full Name *</label>
                <Input name="name" placeholder="John Doe" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email *</label>
                <Input name="email" type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Password *</label>
                <Input name="password" type="password" placeholder="Min. 6 characters" minLength={6} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Client Type *</label>
                <Select name="clientType" defaultValue="private">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">Private Individual</SelectItem>
                    <SelectItem value="international">International Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Company (optional)</label>
                <Input name="company" placeholder="Your company name" />
              </div>
              <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white">Create Account</Button>
            </form>
          </CardContent>
        </Card>

        {/* Welcome Modal */}
        <Dialog open={welcomeOpen} onOpenChange={v => { if (!v) { setWelcomeOpen(false); navigate('/dashboard'); } }}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">Welcome to EAGLE-EXPRESS! 🦅</DialogTitle>
            </DialogHeader>
            <div className="text-center space-y-4 py-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-eagle-orange" />
                <span>Automated message sent to <strong>{welcomeEmail}</strong></span>
              </div>
              <div className="p-4 rounded-lg bg-secondary border">
                <p className="text-sm font-medium mb-2">Welcome to EAGLE-EXPRESS!</p>
                <p className="text-xs text-muted-foreground">Your account is now active. Start shipping to 200+ countries worldwide.</p>
                <p className="text-xs text-muted-foreground mt-2">Sample tracking number: <span className="font-mono font-bold text-eagle-orange">{sampleTracking}</span></p>
                <p className="text-xs text-muted-foreground mt-2">Founded 2024 in Zurich, Switzerland. Ready to ship with us.</p>
              </div>
              <Button onClick={() => { setWelcomeOpen(false); navigate('/dashboard'); }} className="bg-eagle-orange hover:bg-eagle-orange-hover text-white">
                Go to Dashboard
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
