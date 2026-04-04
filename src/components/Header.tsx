import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import eagleLogo from '@/assets/eagle-logo.png';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { t } = useLanguage();
  const location = useLocation();

  const NAV_LINKS = [
    { to: '/', label: t.nav_home },
    { to: '/ship', label: t.nav_ship },
    { to: '/tracking', label: t.nav_track },
    { to: '/about', label: t.nav_about },
    { to: '/contact', label: t.nav_contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-90 transition-opacity">
          <img src={eagleLogo} alt="EAGLE-EXPRESS" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="eagle-text-gradient">EAGLE-EXPRESS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative hover:text-eagle-orange ${
                location.pathname === link.to ? 'text-eagle-orange' : 'text-foreground/80'
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-eagle-orange rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <Link to={isAdmin ? '/admin' : '/dashboard'}>
                <Button variant="ghost" size="sm" className="gap-1">
                  {isAdmin ? <Shield className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  {user?.name}
                </Button>
              </Link>
              <Button variant="ghost" size="icon" onClick={logout} aria-label={t.nav_logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Link to="/login"><Button variant="ghost" size="sm">{t.nav_login}</Button></Link>
              <Link to="/signup"><Button size="sm" className="bg-eagle-orange hover:bg-eagle-orange-hover text-white hover:scale-105 transition-transform">{t.nav_signup}</Button></Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
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
              <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.to ? 'text-eagle-orange bg-secondary' : ''}`}>
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-2 mt-2 flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link to={isAdmin ? '/admin' : '/dashboard'} onClick={() => setMobileOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      {isAdmin ? <Shield className="h-4 w-4" /> : <User className="h-4 w-4" />}{user?.name}
                    </Button>
                  </Link>
                  <Button variant="ghost" onClick={() => { logout(); setMobileOpen(false); }} className="w-full justify-start gap-2">
                    <LogOut className="h-4 w-4" /> {t.nav_logout}
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMobileOpen(false)}><Button variant="ghost" className="w-full">{t.nav_login}</Button></Link>
                  <Link to="/signup" onClick={() => setMobileOpen(false)}><Button className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white">{t.nav_signup}</Button></Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
