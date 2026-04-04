import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [dark, setDark] = React.useState(() => document.documentElement.classList.contains('dark'));

  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
    localStorage.setItem('eagle_theme', !dark ? 'dark' : 'light');
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('eagle_theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle dark mode">
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
