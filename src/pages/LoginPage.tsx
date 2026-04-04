import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      login(fd.get('email') as string, fd.get('password') as string);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen py-8 md:py-16 flex items-center justify-center">
      <div className="container max-w-md">
        <Card className="animate-fade-in">
          <CardHeader className="text-center">
            <LogIn className="h-10 w-10 text-eagle-orange mx-auto mb-2" />
            <CardTitle>Login</CardTitle>
            <CardDescription>Access your EAGLE-EXPRESS account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input name="email" type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Password</label>
                <Input name="password" type="password" placeholder="Your password" required />
              </div>
              <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white">Login</Button>
            </form>
            <p className="text-sm text-center mt-4 text-muted-foreground">
              Don't have an account? <Link to="/signup" className="text-eagle-orange hover:underline">Sign up</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
