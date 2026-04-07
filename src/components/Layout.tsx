import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X, LogOut, User, MessageCircle, Phone, Mail } from "lucide-react";

const Header = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-eagle-blue text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 bg-white px-2 py-1 rounded-md">
          <img src="/logo.svg" alt="EAGLE-EXPRESS" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-eagle-gold transition">Home</Link>
          <Link to="/ship" className="hover:text-eagle-gold transition">Ship Now</Link>
          <Link to="/tracking" className="hover:text-eagle-gold transition">Tracking</Link>
          <Link to="/about" className="hover:text-eagle-gold transition">About</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="flex items-center space-x-1 hover:text-eagle-gold transition">
                <User size={18} />
                <span>Dashboard</span>
              </Link>
              {user.isAdmin && <Link to="/admin" className="text-eagle-gold font-bold">Admin</Link>}
              <button onClick={logout} className="p-2 hover:bg-white/10 rounded-full transition"><LogOut size={18} /></button>
            </>
          ) : (
            <Link to="/login" className="bg-eagle-gold text-eagle-blue px-4 py-2 rounded font-bold hover:bg-white transition">Login</Link>
          )}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="md:hidden bg-eagle-blue border-t border-white/10 p-4 space-y-4 flex flex-col">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/ship" onClick={() => setOpen(false)}>Ship Now</Link>
          <Link to="/tracking" onClick={() => setOpen(false)}>Tracking</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
              <button onClick={() => { logout(); setOpen(false); }} className="text-left">Logout</button>
            </>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="bg-white inline-block px-2 py-1 rounded-md mb-4">
          <img src="/logo.svg" alt="EAGLE-EXPRESS" className="h-6 w-auto" />
        </div>
        <p className="text-sm">Zurich 2024 Branding. Global logistics solutions at your fingertips. Precision, Speed, Security.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/ship">Ship Package</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Support</h4>
        <ul className="space-y-2 text-sm">
          <li>FAQ</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contact Zurich</h4>
        <p className="text-sm">Bahnhofstrasse 100<br/>8001 Zurich, Switzerland<br/>support@eagle.ch</p>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
      &copy; 2024 EAGLE-EXPRESS Enterprise. All rights reserved.
    </div>
  </footer>
);

const FloatingSupport = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="bg-white rounded-lg shadow-2xl p-6 mb-4 w-72 border border-slate-200 animate-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-eagle-blue">EE Support</h3>
            <button onClick={() => setOpen(false)}><X size={18} /></button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-slate-600 hover:text-eagle-blue cursor-pointer transition">
              <Phone size={18} /> <span>+41 44 123 45 67</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600 hover:text-eagle-blue cursor-pointer transition">
              <Mail size={18} /> <span>support@eagle.ch</span>
            </div>
            <div className="pt-4 border-t">
              <button className="w-full bg-eagle-blue text-white py-2 rounded font-bold hover:bg-eagle-blue/90 transition flex items-center justify-center space-x-2">
                <MessageCircle size={18} /> <span>Live Chat</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <button 
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-eagle-blue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition active:scale-95"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingSupport />
    </div>
  );
};

export default Layout;
