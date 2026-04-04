import { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-lg">
              <Package className="h-6 w-6 text-eagle-orange" />
              <span className="eagle-text-gradient">EAGLE-EXPRESS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Founded 2024 in Zurich, Switzerland. Connecting the world with reliable, sustainable logistics.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> Zurich, Switzerland
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/ship" className="hover:text-eagle-orange transition-colors">Express Shipping</Link></li>
              <li><Link to="/ship" className="hover:text-eagle-orange transition-colors">International Freight</Link></li>
              <li><Link to="/ship" className="hover:text-eagle-orange transition-colors">E-Commerce Solutions</Link></li>
              <li><Link to="/ship" className="hover:text-eagle-orange transition-colors">Warehousing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-eagle-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-eagle-orange transition-colors">Contact & Support</Link></li>
              <li><Link to="/tracking" className="hover:text-eagle-orange transition-colors">Track Shipment</Link></li>
              <li><a href="#" className="hover:text-eagle-orange transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-eagle-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-eagle-orange transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-eagle-orange transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-eagle-orange transition-colors">Cookie Policy</a></li>
            </ul>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="h-3 w-3" /> info@eagle-express.ch</div>
              <div className="flex items-center gap-2"><Phone className="h-3 w-3" /> +41 44 000 0000</div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 EAGLE-EXPRESS AG, Zurich, Switzerland. All rights reserved.</p>
          {/* 🌐 MULTI-LANGUAGE PLACEHOLDER: Add language switcher here */}
          <p className="text-xs">EN | DE</p>
        </div>
      </div>
    </footer>
  );
}
