import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useSEO({
    title: "404 — Page Not Found | Slice Master",
    description: "The page you're looking for doesn't exist. Browse our collection of free online slicing games at Slice Master.",
  });

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-4">
        <h1 className="mb-2 text-7xl font-extrabold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-foreground">Page Not Found</h2>
        <p className="mb-6 text-muted-foreground">
          Sorry, the page <code className="bg-muted px-2 py-0.5 rounded text-sm">{location.pathname}</code> doesn't exist.
          It may have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            🎮 Play Games
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
