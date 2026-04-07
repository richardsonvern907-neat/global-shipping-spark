import { Building2, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-eagle-blue mb-6">About EAGLE-EXPRESS</h1>
          <p className="text-xl text-slate-600">Founded in Zurich, Switzerland. Redefining enterprise logistics since 2024 with a commitment to precision, sustainability, and technological innovation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" alt="Zurich Headquarters" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-eagle-blue">The Zurich Standard</h2>
            <p className="text-slate-600 mb-6">At EAGLE-EXPRESS, we believe that logistics is more than just moving boxes. It is about enabling global trade, connecting businesses, and keeping promises. Our roots in Zurich instill in us a profound respect for punctuality, security, and meticulous planning.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Building2 className="text-eagle-gold shrink-0" />
                <div>
                  <h4 className="font-bold">150+</h4>
                  <p className="text-sm text-slate-500">Global Hubs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-eagle-gold shrink-0" />
                <div>
                  <h4 className="font-bold">10k+</h4>
                  <p className="text-sm text-slate-500">Employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-eagle-blue text-white rounded-2xl p-12 text-center">
          <Trophy className="w-16 h-16 text-eagle-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="italic mb-4">"EAGLE-EXPRESS transformed our European supply chain. Their tracking accuracy is unparalleled."</p>
              <p className="font-bold text-eagle-gold">- Sarah Jenkins, TechCorp</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="italic mb-4">"The Zurich level of security gives us peace of mind when shipping high-value electronics globally."</p>
              <p className="font-bold text-eagle-gold">- Michael Chang, GlobalTrade</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="italic mb-4">"Fast, reliable, and exceptional customer service. The best logistics partner we have ever had."</p>
              <p className="font-bold text-eagle-gold">- Elena Rossi, Moda Milano</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
