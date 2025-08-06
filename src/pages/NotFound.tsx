import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageTitle } from '../hooks/usePageTitle';
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  usePageTitle('Page Not Found');
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Oops! Page not found
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
          
          <br className="sm:hidden" />
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 w-full sm:w-auto sm:ml-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
