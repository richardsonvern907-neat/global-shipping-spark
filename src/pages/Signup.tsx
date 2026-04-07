import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { signup } = useAuth();
  const nav = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    signup(name, email);
    nav("/dashboard");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-eagle-blue text-eagle-gold rounded-full flex items-center justify-center mb-4"><UserPlus /></div>
          <h2 className="text-3xl font-extrabold text-eagle-blue">Enterprise Signup</h2>
          <p className="mt-2 text-sm text-slate-600">Join the Zurich network today.</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input required type="text" value={name} onChange={e => setName(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-eagle-blue focus:border-eagle-blue focus:z-10 sm:text-sm" placeholder="Full Name or Company" />
            </div>
            <div>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-eagle-blue focus:border-eagle-blue focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <input required type="password" minLength={8} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-eagle-blue focus:border-eagle-blue focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-eagle-blue hover:bg-eagle-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eagle-blue transition">
              Create Enterprise Account
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          Already have an account? <Link to="/login" className="font-medium text-eagle-blue hover:text-eagle-gold">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
