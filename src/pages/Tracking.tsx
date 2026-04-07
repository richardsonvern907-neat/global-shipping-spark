import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTracking, TrackingInfo } from "../context/TrackingContext";
import { Search, MapPin, CheckCircle, Package, Truck, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const Tracking = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { getTrack } = useTracking();
  const [searchId, setSearchId] = useState(id || "");
  const [data, setData] = useState<TrackingInfo | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      const result = getTrack(id);
      if (result) {
        setData(result);
        setError("");
      } else {
        setData(null);
        setError("Tracking number not found in the system.");
      }
    }
  }, [id, getTrack]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId) nav(`/tracking/${searchId}`);
  };

  const getProgress = (status: string) => {
    switch (status) {
      case "Pending": return 10;
      case "Customs Clearance": return 40;
      case "In Transit": return 60;
      case "Delivered": return 100;
      default: return 0;
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <form onSubmit={handleSearch} className="mb-12 flex gap-2">
          <input 
            type="text" 
            value={searchId} 
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter 10-digit Tracking Number"
            className="flex-grow p-4 rounded-lg border border-slate-300 shadow-sm focus:ring-2 focus:ring-eagle-blue outline-none text-lg"
          />
          <button className="bg-eagle-blue text-white px-8 py-4 rounded-lg font-bold flex items-center hover:bg-eagle-blue/90 transition">
            <Search className="mr-2" /> Track
          </button>
        </form>

        {error && (
          <div className="bg-red-50 text-red-600 p-6 rounded-lg flex items-center border border-red-200">
            <AlertCircle className="mr-4" />
            <span className="font-bold">{error}</span>
          </div>
        )}

        {data && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-4">
            <div className="bg-eagle-blue text-white p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-blue-200 uppercase tracking-wider text-sm font-bold mb-1">Tracking Number</p>
                  <h2 className="text-3xl font-mono font-bold text-eagle-gold">{data.id}</h2>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-white/20 px-4 py-2 rounded-full font-bold">
                    {data.status}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8 border-t border-white/20 pt-8">
                <div>
                  <p className="text-blue-200 text-sm mb-1">Origin</p>
                  <p className="font-bold text-lg">{data.origin}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-200 text-sm mb-1">Destination</p>
                  <p className="font-bold text-lg">{data.destination}</p>
                </div>
              </div>
            </div>

            <div className="p-8 border-b border-slate-100">
              <div className="relative pt-8 pb-4">
                <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-100 -z-10 -translate-y-1/2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${getProgress(data.status)}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-eagle-gold"
                  />
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-500 relative">
                  <div className={`flex flex-col items-center ${getProgress(data.status) >= 10 ? "text-eagle-blue" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${getProgress(data.status) >= 10 ? "bg-eagle-gold" : "bg-slate-200"}`}><Package size={16} /></div>
                    Processed
                  </div>
                  <div className={`flex flex-col items-center ${getProgress(data.status) >= 60 ? "text-eagle-blue" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${getProgress(data.status) >= 60 ? "bg-eagle-gold" : "bg-slate-200"}`}><Truck size={16} /></div>
                    In Transit
                  </div>
                  <div className={`flex flex-col items-center ${getProgress(data.status) === 100 ? "text-eagle-blue" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${getProgress(data.status) === 100 ? "bg-eagle-gold" : "bg-slate-200"}`}><CheckCircle size={16} /></div>
                    Delivered
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold text-eagle-blue mb-6">Travel History</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {data.history.map((h, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-eagle-gold text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <MapPin size={16} className="text-eagle-blue" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 shadow-sm bg-white">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-eagle-blue">{h.status}</div>
                        <time className="text-sm font-medium text-slate-500">{h.date}</time>
                      </div>
                      <div className="text-slate-600 text-sm">{h.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
