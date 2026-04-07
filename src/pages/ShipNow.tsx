import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTracking, TrackingInfo } from "../context/TrackingContext";
import { CheckCircle } from "lucide-react";

const ShipNow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    origin: "", destination: "", weight: "", service: "express", name: ""
  });
  const [generatedId, setGeneratedId] = useState("");
  const { addTrack } = useTracking();
  const nav = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else submitOrder();
  };

  const submitOrder = () => {
    const id = "EE" + Math.floor(10000000 + Math.random() * 90000000).toString();
    const newTrack: TrackingInfo = {
      id,
      origin: formData.origin,
      destination: formData.destination,
      status: "Pending",
      currentLocation: formData.origin,
      customerName: formData.name || "Guest User",
      history: [
        { date: new Date().toISOString().split("T")[0], location: formData.origin, status: "Order Received" }
      ]
    };
    addTrack(newTrack);
    setGeneratedId(id);
    setStep(4);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-eagle-blue mb-8 text-center">Book a Shipment</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          {step < 4 && (
            <div className="flex justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 h-1 bg-eagle-gold -z-10 -translate-y-1/2 transition-all" style={{ width: `${(step - 1) * 50}%` }}></div>
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= i ? "bg-eagle-gold text-eagle-blue" : "bg-slate-200 text-slate-500"}`}>
                  {i}
                </div>
              ))}
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-6 animate-in fade-in zoom-in-95">
              <h2 className="text-xl font-bold text-eagle-blue">Route Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Origin City/Country</label>
                  <input required type="text" value={formData.origin} onChange={e => setFormData({...formData, origin: e.target.value})} className="w-full border p-3 rounded" placeholder="e.g. Zurich, CH" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Destination City/Country</label>
                  <input required type="text" value={formData.destination} onChange={e => setFormData({...formData, destination: e.target.value})} className="w-full border p-3 rounded" placeholder="e.g. New York, US" />
                </div>
              </div>
              <button className="w-full bg-eagle-blue text-white py-3 rounded font-bold mt-6">Continue</button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-6 animate-in fade-in zoom-in-95">
              <h2 className="text-xl font-bold text-eagle-blue">Package Details</h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Total Weight (kg)</label>
                <input required type="number" min="0.1" step="0.1" value={formData.weight} onChange={e => setFormData({...formData, weight: e.target.value})} className="w-full border p-3 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Level</label>
                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full border p-3 rounded">
                  <option value="standard">Standard Freight (5-7 Days)</option>
                  <option value="express">Eagle Express (1-3 Days)</option>
                  <option value="secure">Secure Transport (Valuables)</option>
                </select>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-slate-200 py-3 rounded font-bold">Back</button>
                <button className="w-2/3 bg-eagle-blue text-white py-3 rounded font-bold">Continue</button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-6 animate-in fade-in zoom-in-95">
              <h2 className="text-xl font-bold text-eagle-blue">Sender Information</h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name / Company</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border p-3 rounded" />
              </div>
              <div className="bg-blue-50 p-4 rounded text-sm text-eagle-blue">
                <strong>Summary:</strong> Shipping from {formData.origin} to {formData.destination}. Service: {formData.service}.
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(2)} className="w-1/3 bg-slate-200 py-3 rounded font-bold">Back</button>
                <button className="w-2/3 bg-eagle-gold text-eagle-blue py-3 rounded font-bold">Confirm & Book</button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center space-y-6 animate-in zoom-in">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold text-eagle-blue">Booking Confirmed!</h2>
              <p className="text-slate-600">Your shipment has been registered in the system.</p>
              <div className="bg-slate-100 p-6 rounded-lg inline-block">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Tracking Number</p>
                <p className="text-3xl font-mono font-bold text-eagle-blue">{generatedId}</p>
              </div>
              <div>
                <button onClick={() => nav(`/tracking/${generatedId}`)} className="bg-eagle-blue text-white px-8 py-3 rounded font-bold mt-4 hover:bg-eagle-blue/90">
                  Track Package
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShipNow;
