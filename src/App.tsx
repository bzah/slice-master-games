import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Index from "./pages/Index";
import GamePage from "./pages/GamePage";
import CategoryPage from "./pages/CategoryPage";
import StaticPage from "./pages/StaticPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const staticPages = ["about", "contact", "privacy", "terms", "cookie-policy", "dmca", "legal", "parents"] as const;

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

function AppRoutes() {
  return (
    <>
      {/* English routes */}
      <Route path="/" element={<AppLayout><Index /></AppLayout>} />
      <Route path="/game/:slug" element={<AppLayout><GamePage /></AppLayout>} />
      <Route path="/category/:slug" element={<AppLayout><CategoryPage /></AppLayout>} />
      {staticPages.map((page) => (
        <Route key={page} path={`/${page}`} element={<AppLayout><StaticPage page={page} /></AppLayout>} />
      ))}

      {/* Multi-language routes */}
      <Route path="/:lang" element={<AppLayout><Index /></AppLayout>} />
      <Route path="/:lang/game/:slug" element={<AppLayout><GamePage /></AppLayout>} />
      <Route path="/:lang/category/:slug" element={<AppLayout><CategoryPage /></AppLayout>} />
      {staticPages.map((page) => (
        <Route key={`lang-${page}`} path={`/:lang/${page}`} element={<AppLayout><StaticPage page={page} /></AppLayout>} />
      ))}

      <Route path="*" element={<AppLayout><NotFound /></AppLayout>} />
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          {AppRoutes()}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
