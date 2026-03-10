import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { SUPPORTED_LANGS, languageNames, type Language } from "@/i18n/translations";

export function LanguageSelector() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (newLang: Language) => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    let cleanPath: string;

    if (SUPPORTED_LANGS.includes(pathParts[0] as Language) && pathParts[0] !== "en") {
      cleanPath = "/" + pathParts.slice(1).join("/") || "/";
    } else {
      cleanPath = location.pathname;
    }

    if (cleanPath === "") cleanPath = "/";
    const newPath = newLang === "en" ? cleanPath : `/${newLang}${cleanPath === "/" ? "" : cleanPath}`;
    navigate(newPath);
  };

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => handleChange(e.target.value as Language)}
        className="appearance-none bg-card border blade-border px-3 py-1.5 pr-7 text-xs font-heading font-medium text-foreground cursor-pointer focus:outline-none focus:border-primary"
      >
        {SUPPORTED_LANGS.map((lang) => (
          <option key={lang} value={lang}>
            {languageNames[lang]}
          </option>
        ))}
      </select>
      <svg className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 4L5 7L8 4" />
      </svg>
    </div>
  );
}
