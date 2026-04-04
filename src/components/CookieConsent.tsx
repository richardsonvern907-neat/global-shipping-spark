import React from 'react';
import { getCookieConsent, setCookieConsent } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => { if (!getCookieConsent()) setVisible(true); }, []);
  if (!visible) return null;

  const accept = () => { setCookieConsent(true); setVisible(false); };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t shadow-lg animate-slide-up">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm">
          <Shield className="h-5 w-5 text-eagle-orange shrink-0" />
          <p className="text-muted-foreground">
            {t.cookie_message.split('Cookie Policy')[0]}
            <a href="#" className="underline text-foreground">Cookie Policy</a>
            {t.cookie_message.split('Cookie Policy')[1] || ''}
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={accept}>{t.cookie_decline}</Button>
          <Button size="sm" onClick={accept} className="bg-eagle-orange hover:bg-eagle-orange-hover text-white">{t.cookie_accept}</Button>
        </div>
      </div>
    </div>
  );
}
