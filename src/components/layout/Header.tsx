import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { categories } from "@/data/games";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const { t, localizedPath } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b blade-border bg-card">
      <div className="container flex items-center justify-between h-14 px-4">
        <Link to={localizedPath("/")} className="font-heading font-bold text-xl tracking-tight text-foreground">
          SLICE<span className="text-primary">MASTER</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat.id}
              to={localizedPath(`/category/${cat.slug}`)}
              className="font-heading text-sm font-medium text-foreground hover:text-primary transition-colors duration-150"
            >
              {cat.name}
            </Link>
          ))}
          <LanguageSelector />
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t blade-border bg-card wipe-in">
          <div className="container px-4 py-4 flex flex-col gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={localizedPath(`/category/${cat.slug}`)}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-sm font-medium text-foreground hover:text-primary py-1"
              >
                {cat.name}
              </Link>
            ))}
            <div className="pt-2 border-t blade-border">
              <LanguageSelector />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
