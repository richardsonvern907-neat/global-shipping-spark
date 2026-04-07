import { useAuth } from "../context/AuthContext";
import { useTracking } from "../context/TrackingContext";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const { tracks } = useTracking();
  
  // Basic filtering based on user email/name in a real app. Here we just show a few or empty state for demo if not admin.
  // Actually let's just show all tracks for demo purposes if they booked it (but we don't link them strongly in this simple demo)
  // We will filter by customerName matching user.name roughly, or just show all for simplicity if no auth was required for booking.
  const userTracks = tracks.filter(t => t.customerName.toLowerCase().includes(user?.name.toLowerCase() || "") || t.customerName === "Guest User");

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-eagle-blue">Welcome, {user?.name}</h1>
            <p className="text-slate-600">Enterprise Logistics Dashboard</p>
          </div>
          <Link to="/ship" className="bg-eagle-gold text-eagle-blue font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition flex items-center">
            <Plus className="mr-2" size={20} /> New Shipment
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-eagle-blue">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Active Shipments</p>
            <p className="text-3xl font-bold text-eagle-blue">{userTracks.filter(t => t.status !== "Delivered").length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-green-500">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Delivered</p>
            <p className="text-3xl font-bold text-eagle-blue">{userTracks.filter(t => t.status === "Delivered").length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-eagle-gold">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Total Invoices</p>
            <p className="text-3xl font-bold text-eagle-blue">CHF 0.00</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-xl font-bold text-eagle-blue">Recent Shipments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider border-b border-slate-200">
                  <th className="p-4 font-medium">Tracking ID</th>
                  <th className="p-4 font-medium">Route</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {userTracks.length === 0 ? (
                  <tr><td colSpan={4} className="p-8 text-center text-slate-500">No shipments found.</td></tr>
                ) : (
                  userTracks.map(t => (
                    <tr key={t.id} className="hover:bg-slate-50 transition">
                      <td className="p-4 font-mono font-bold text-eagle-blue">{t.id}</td>
                      <td className="p-4"><div className="text-sm"><span className="font-bold">{t.origin}</span> → <span className="font-bold">{t.destination}</span></div></td>
                      <td className="p-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${t.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                          {t.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <Link to={`/tracking/${t.id}`} className="text-eagle-gold font-bold hover:underline">Track</Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
