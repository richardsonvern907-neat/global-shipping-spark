import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-9xl font-bold text-eagle-blue mb-4">404</h1>
    <h2 className="text-2xl font-bold text-slate-800 mb-6">Destination Not Found</h2>
    <p className="text-slate-600 mb-8">The page you are looking for has been re-routed or does not exist.</p>
    <Link to="/" className="bg-eagle-gold text-eagle-blue font-bold px-8 py-3 rounded hover:bg-yellow-400 transition">
      Return to Base
    </Link>
  </div>
);

export default NotFound;
