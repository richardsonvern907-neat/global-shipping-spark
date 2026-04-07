import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      const from = location.state?.from?.pathname || "/dashboard";
      nav(from, { replace: true });
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-eagle-blue text-eagle-gold rounded-full flex items-center justify-center mb-4"><Lock /></div>
          <h2 className="text-3xl font-extrabold text-eagle-blue">Secure Portal Access</h2>
          <p className="mt-2 text-sm text-slate-600">Zurich Enterprise Authentication</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && <div className="text-red-500 text-sm text-center font-bold">{error}</div>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-eagle-blue focus:border-eagle-blue focus:z-10 sm:text-sm" placeholder="Email address (admin@eagle.ch for admin)" />
            </div>
            <div>
              <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-eagle-blue focus:border-eagle-blue focus:z-10 sm:text-sm" placeholder="Password (eagle-admin-2024 for admin)" />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-eagle-blue hover:bg-eagle-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eagle-blue transition">
              Authenticate
            </button>
          </div>
        </form>
        <div className="text-center text-sm mt-4">
          Need an account? <Link to="/signup" className="font-medium text-eagle-blue hover:text-eagle-gold">Request Enterprise Access</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
