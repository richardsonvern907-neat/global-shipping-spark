import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Package, User, LogOut, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/context/AuthContext';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/ship', label: 'Ship Now' },
  { to: '/tracking', label: 'Track' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Package className="h-7 w-7 text-eagle-orange" />
          <span className="eagle-text-gradient">EAGLE-EXPRESS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-eagle-orange ${
                location.pathname === link.to ? 'text-eagle-orange' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <Link to={isAdmin ? '/admin' : '/dashboard'}>
                <Button variant="ghost" size="sm" className="gap-1">
                  {isAdmin ? <Shield className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  {user?.name}
                </Button>
              </Link>
              <Button variant="ghost" size="icon" onClick={logout} aria-label="Logout">
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Link to="/login"><Button variant="ghost" size="sm">Login</Button></Link>
              <Link to="/signup"><Button size="sm" className="bg-eagle-orange hover:bg-eagle-orange-hover text-white">Sign Up</Button></Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background animate-slide-up">
          <nav className="container py-4 flex flex-col gap-2">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.to ? 'text-eagle-orange bg-secondary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-2 mt-2 flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link to={isAdmin ? '/admin' : '/dashboard'} onClick={() => setMobileOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      {isAdmin ? <Shield className="h-4 w-4" /> : <User className="h-4 w-4" />}
                      {user?.name}
                    </Button>
                  </Link>
                  <Button variant="ghost" onClick={() => { logout(); setMobileOpen(false); }} className="w-full justify-start gap-2">
                    <LogOut className="h-4 w-4" /> Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMobileOpen(false)}><Button variant="ghost" className="w-full">Login</Button></Link>
                  <Link to="/signup" onClick={() => setMobileOpen(false)}><Button className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white">Sign Up</Button></Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
