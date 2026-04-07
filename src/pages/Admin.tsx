import { useState } from "react";
import { useTracking } from "../context/TrackingContext";
import { ShieldCheck, Search, Edit2 } from "lucide-react";

const Admin = () => {
  const { tracks } = useTracking(); // We would need an updateTrack method, but for simplicity we can manipulate the array or add a feature later. Let's just list them and provide a conceptual update.
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTracks = tracks.filter(t => t.id.includes(searchTerm) || t.customerName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center space-x-4 mb-8 border-b pb-4">
          <ShieldCheck className="w-10 h-10 text-eagle-gold" />
          <div>
            <h1 className="text-3xl font-bold text-eagle-blue">System Administration</h1>
            <p className="text-slate-600">Global Operations Center - Zurich</p>
          </div>
        </div>

        <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-slate-100">
          <div className="flex items-center w-full max-w-md bg-slate-100 rounded-lg px-4 py-2">
            <Search className="text-slate-400 mr-2" size={20} />
            <input 
              type="text" 
              placeholder="Search by Tracking ID or Customer..." 
              className="bg-transparent border-none outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm font-bold text-eagle-blue bg-eagle-gold/20 px-4 py-2 rounded-lg">
            Total Records: {tracks.length}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-eagle-blue text-white text-sm uppercase tracking-wider border-b border-eagle-blue">
                  <th className="p-4 font-medium">Tracking ID</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Route</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Location</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTracks.map(t => (
                  <tr key={t.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-mono font-bold text-slate-800">{t.id}</td>
                    <td className="p-4 text-sm font-medium">{t.customerName}</td>
                    <td className="p-4 text-sm">{t.origin} → {t.destination}</td>
                    <td className="p-4">
                      <select className="border border-slate-200 rounded p-1 text-sm bg-white" defaultValue={t.status}>
                        <option>Pending</option>
                        <option>In Transit</option>
                        <option>Customs Clearance</option>
                        <option>Delivered</option>
                      </select>
                    </td>
                    <td className="p-4 text-sm">{t.currentLocation}</td>
                    <td className="p-4 text-right">
                      <button className="text-eagle-blue hover:text-eagle-gold transition p-2"><Edit2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
