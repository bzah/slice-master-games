import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface GameIframeProps {
  src: string;
  title: string;
  className?: string;
}

export function GameIframe({ src, title, className = "" }: GameIframeProps) {
  const { t } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  return (
    <div ref={containerRef} className={`relative bg-foreground ${className}`}>
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0"
        allow="fullscreen; autoplay; gamepad"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        loading="lazy"
      />
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-3 right-3 bg-card border blade-border p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-150"
        aria-label={isFullscreen ? t("exit_fullscreen") : t("fullscreen")}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          {isFullscreen ? (
            <>
              <polyline points="5,1 5,5 1,5" />
              <polyline points="11,1 11,5 15,5" />
              <polyline points="5,15 5,11 1,11" />
              <polyline points="11,15 11,11 15,11" />
            </>
          ) : (
            <>
              <polyline points="1,5 1,1 5,1" />
              <polyline points="15,5 15,1 11,1" />
              <polyline points="1,11 1,15 5,15" />
              <polyline points="15,11 15,15 11,15" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}
