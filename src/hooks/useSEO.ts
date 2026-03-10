import { useEffect } from "react";
import { SUPPORTED_LANGS } from "@/i18n/translations";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object | object[];
  lang?: string;
}

const DOMAIN = "https://slice-master.us";

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, attrs?: Record<string, string>) {
  const selector = attrs
    ? `link[rel="${rel}"]${Object.entries(attrs).map(([k, v]) => `[${k}="${v}"]`).join("")}`
    : `link[rel="${rel}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  (el as HTMLLinkElement).href = href;
}

export function useSEO({ title, description, canonical, ogImage, ogType = "website", jsonLd, lang = "en" }: SEOProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    setMeta("description", description);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    const url = canonical || DOMAIN;
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", url, true);
    setMeta("og:site_name", "Slice Master", true);
    setMeta("og:locale", lang, true);
    setMeta("og:image", ogImage || `${DOMAIN}/og-image.jpg`, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", "@slicemaster");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage || `${DOMAIN}/og-image.jpg`);

    setLink("canonical", url);

    // hreflang tags
    const path = new URL(url, DOMAIN).pathname;
    const cleanPath = path.replace(/^\/(en|es|fr|de|it|tr)/, "") || "/";
    SUPPORTED_LANGS.forEach((l) => {
      const href = l === "en" ? `${DOMAIN}${cleanPath}` : `${DOMAIN}/${l}${cleanPath}`;
      setLink("alternate", href, { hreflang: l });
    });
    setLink("alternate", `${DOMAIN}${cleanPath}`, { hreflang: "x-default" });

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, ogImage, ogType, jsonLd, lang]);
}
