import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ShieldCheck, Zap, ArrowRight } from "lucide-react";

const Home = () => {
  const [trackId, setTrackId] = useState("");
  const nav = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackId.length === 10) nav(`/tracking/${trackId}`);
    else alert("Please enter a valid 10-digit tracking number.");
  };

  return (
    <div>
      <section className="bg-eagle-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed3890082?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-eagle-gold">Swiss Precision.<br/><span className="text-white">Global Reach.</span></h1>
            <p className="text-xl mb-8 text-blue-100">Zurich-based EAGLE-EXPRESS delivers your enterprise cargo with unmatched speed, security, and reliability across the globe.</p>
            <div className="bg-white p-2 rounded-lg shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl">
              <input 
                type="text" 
                placeholder="Enter 10-digit Tracking Number (e.g., EE12345678)" 
                className="flex-grow px-4 py-3 text-slate-900 rounded outline-none"
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                maxLength={12}
              />
              <button onClick={handleTrack} className="bg-eagle-gold text-eagle-blue font-bold px-8 py-3 rounded hover:bg-yellow-400 transition flex items-center justify-center">
                Track <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-eagle-blue">Why Choose EAGLE-EXPRESS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <Zap className="text-eagle-gold w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-slate-600">Next-day delivery available across major global hubs. Time is money, and we save you both.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <ShieldCheck className="text-eagle-gold w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-3">Zurich Security Standard</h3>
              <p className="text-slate-600">Bank-grade security protocols for your high-value cargo. End-to-end encryption for all digital records.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <Globe className="text-eagle-gold w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-slate-600">Seamless logistics across 190+ countries. We navigate the complexities of international trade for you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
