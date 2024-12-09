import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <h2 className="text-9xl font-extrabold">404</h2>
        <p className="text-2xl md:text-3xl font-semibold">Page Not Found</p>
        <p className="text-lg">Something went wrong!</p>
        <Link
          to="/"
          className="btn border-none bg-black text-white flex items-center justify-center gap-2"
        >
          <FaHome size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
