import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-eagle-blue mb-16">Contact Enterprise Support</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-eagle-blue">Send us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully. A representative will contact you within 24 hours."); }}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                <input type="text" required className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-eagle-blue outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" required className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-eagle-blue outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Inquiry Type</label>
                <select className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-eagle-blue outline-none">
                  <option>Enterprise Shipping Rates</option>
                  <option>API Integration Support</option>
                  <option>Customs Clearance</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} required className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-eagle-blue outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-eagle-blue text-white font-bold py-3 rounded-lg hover:bg-eagle-blue/90 transition flex items-center justify-center">
                Send Inquiry <Send className="ml-2" size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-eagle-blue text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-eagle-gold">Global Headquarters</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-eagle-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Zurich Office</h4>
                    <p className="text-blue-100 text-sm mt-1">Bahnhofstrasse 100<br/>8001 Zurich<br/>Switzerland</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-eagle-gold shrink-0" />
                  <p className="text-blue-100">+41 44 123 45 67</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-eagle-gold shrink-0" />
                  <p className="text-blue-100">enterprise@eagle.ch</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-eagle-blue mb-2">24/7 Priority Support</h3>
              <p className="text-slate-600 text-sm mb-4">Enterprise clients with active SLA contracts have access to dedicated routing channels.</p>
              <button className="text-eagle-blue font-bold border border-eagle-blue px-4 py-2 rounded hover:bg-eagle-blue hover:text-white transition w-full">
                Access Client Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
