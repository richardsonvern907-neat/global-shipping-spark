import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage, LANGUAGES } from '@/context/LanguageContext';
import eagleLogo from '@/assets/eagle-logo.png';

export function Footer() {
  const { t, lang, setLang } = useLanguage();

  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-lg">
              <img src={eagleLogo} alt="EAGLE-EXPRESS" width={28} height={28} className="h-7 w-7 object-contain" />
              <span className="eagle-text-gradient">EAGLE-EXPRESS</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.about_story}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Zurich, Switzerland</div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t.services_title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/ship" className="hover:text-eagle-orange transition-colors">{t.service_express}</Link></li>
              <li><Link to="/ship" className="hover:text-eagle-orange transition-colors">{t.service_freight}</Link></li>
              <li><Link to="/ship" className="hover:text-eagle-orange transition-colors">{t.service_ecommerce}</Link></li>
              <li><Link to="/ship" className="hover:text-eagle-orange transition-colors">{t.service_warehouse}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t.nav_about}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-eagle-orange transition-colors">{t.about_title}</Link></li>
              <li><Link to="/contact" className="hover:text-eagle-orange transition-colors">{t.contact_title}</Link></li>
              <li><Link to="/tracking" className="hover:text-eagle-orange transition-colors">{t.track_title}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-eagle-orange transition-colors">{t.footer_privacy}</a></li>
              <li><a href="#" className="hover:text-eagle-orange transition-colors">{t.footer_terms}</a></li>
              <li><a href="#" className="hover:text-eagle-orange transition-colors">{t.footer_impressum}</a></li>
              <li><a href="#" className="hover:text-eagle-orange transition-colors">{t.footer_cookies}</a></li>
            </ul>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="h-3 w-3" /> info@eagle-express.ch</div>
              <div className="flex items-center gap-2"><Phone className="h-3 w-3" /> +41 44 000 0000</div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 EAGLE-EXPRESS AG, Zurich, Switzerland. {t.footer_rights}</p>
          <div className="flex gap-2 flex-wrap">
            {LANGUAGES.slice(0, 6).map(l => (
              <button key={l.code} onClick={() => setLang(l.code)} className={`text-xs hover:text-eagle-orange transition-colors ${lang === l.code ? 'text-eagle-orange font-semibold' : ''}`}>
                {l.flag} {l.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
