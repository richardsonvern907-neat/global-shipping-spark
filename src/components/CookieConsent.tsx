import React from 'react';
import { getCookieConsent, setCookieConsent } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

/**
 * GDPR/DSG Cookie Consent Banner
 * Swiss HQ compliance (DSG = Datenschutzgesetz)
 */
export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    setCookieConsent(true);
    setVisible(false);
    // 📊 ANALYTICS PLACEHOLDER: initializeAnalytics()
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t shadow-lg animate-slide-up">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm">
          <Shield className="h-5 w-5 text-eagle-orange shrink-0" />
          <p className="text-muted-foreground">
            We use cookies to enhance your experience. By continuing, you agree to our{' '}
            <a href="#" className="underline text-foreground">Cookie Policy</a> and comply with Swiss DSG / EU GDPR regulations.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={accept}>Decline</Button>
          <Button size="sm" onClick={accept} className="bg-eagle-orange hover:bg-eagle-orange-hover text-white">Accept All</Button>
        </div>
      </div>
    </div>
  );
}
