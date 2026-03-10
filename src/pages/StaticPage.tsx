import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const DOMAIN = "https://slice-master.us";

interface StaticPageProps {
  page: string;
}

const pageContent: Record<string, { title: string; content: string }> = {
  about: {
    title: "About Slice Master",
    content: `Slice Master (slice-master.us) is the ultimate destination for free online slicing games. Our mission is to provide the best collection of browser-based cutting, slicing, and chopping games — all completely free, with no downloads required.

Whether you're looking for fruit slicing games, ninja sword action, or relaxing puzzle cutting games, Slice Master has something for every player. All our games are carefully curated to provide the most satisfying slicing experience possible.

Our games work on desktop and mobile devices, are unblocked, and accessible from anywhere. We believe gaming should be free, instant, and fun.

Contact us at game@slice-master.us for any inquiries.`,
  },
  contact: {
    title: "Contact Us",
    content: `We'd love to hear from you! Whether you have a question about our games, want to suggest a new game to add, or need to report an issue, please reach out.

Email: game@slice-master.us

We typically respond within 24-48 hours. For DMCA requests, please visit our DMCA page.

For business inquiries, partnerships, or game submissions, please include "Business" in your email subject line.`,
  },
  privacy: {
    title: "Privacy Policy",
    content: `Privacy Policy for slice-master.us

Last updated: March 2026

1. Information We Collect
We collect minimal information necessary to provide our service. This includes usage data (pages visited, time spent), device information (browser type, screen size), and cookies for functionality and analytics.

2. How We Use Information
We use collected information to improve our service, analyze usage patterns, and ensure the security of our platform. We do not sell personal information to third parties.

3. Cookies
We use essential cookies for site functionality and analytics cookies to understand usage patterns. You can control cookie preferences through your browser settings.

4. Third-Party Services
Our games are embedded from third-party providers. Each provider has their own privacy policy. We recommend reviewing their policies for information about data they may collect.

5. Children's Privacy
Our service is intended for general audiences. We do not knowingly collect personal information from children under 13. Parents, please see our Parents Info page.

6. Contact
For privacy inquiries, contact us at game@slice-master.us.`,
  },
  terms: {
    title: "Terms of Service",
    content: `Terms of Service for slice-master.us

Last updated: March 2026

1. Acceptance of Terms
By accessing slice-master.us, you agree to these Terms of Service. If you do not agree, please do not use our service.

2. Service Description
Slice Master provides free access to browser-based games through embedded iframes. Games are provided by third-party developers and platforms.

3. User Conduct
You agree to use our service lawfully and not to attempt to disrupt, hack, or interfere with the operation of our website or the embedded games.

4. Intellectual Property
Game content is owned by their respective developers and publishers. The Slice Master website design, branding, and original content are owned by slice-master.us.

5. Disclaimer
Games are provided "as is" without warranty. We are not responsible for the content or functionality of third-party embedded games.

6. Limitation of Liability
slice-master.us shall not be liable for any damages arising from the use of our service.

7. Changes to Terms
We may update these terms at any time. Continued use constitutes acceptance of updated terms.

Contact: game@slice-master.us`,
  },
  "cookie-policy": {
    title: "Cookie Policy",
    content: `Cookie Policy for slice-master.us

Last updated: March 2026

What Are Cookies?
Cookies are small text files stored on your device when you visit websites. They help websites function properly and provide information to site owners.

Cookies We Use:
- Essential Cookies: Required for basic site functionality (language preference, session management).
- Analytics Cookies: Help us understand how visitors use our site (pages visited, time spent).
- Third-Party Cookies: Our embedded games may set their own cookies. These are governed by the respective game providers' cookie policies.

Managing Cookies:
You can control and delete cookies through your browser settings. Note that disabling cookies may affect site functionality.

Contact: game@slice-master.us`,
  },
  dmca: {
    title: "DMCA Notice",
    content: `DMCA Policy for slice-master.us

slice-master.us respects intellectual property rights and responds to valid DMCA takedown requests.

Filing a DMCA Notice:
If you believe content on our site infringes your copyright, please send a notice to game@slice-master.us with:

1. Your name and contact information
2. Identification of the copyrighted work
3. The URL of the infringing content on our site
4. A statement of good faith belief that the use is not authorized
5. A statement under penalty of perjury that the information is accurate
6. Your physical or electronic signature

We will respond to valid DMCA notices within 48 hours and remove infringing content promptly.

Counter-Notification:
If you believe content was removed in error, you may file a counter-notification with the required information.

Contact: game@slice-master.us`,
  },
  legal: {
    title: "Legal Notice",
    content: `Legal Notice for slice-master.us

Website: https://slice-master.us
Contact: game@slice-master.us

Disclaimer:
The games available on slice-master.us are provided through embedded iframes from third-party sources. slice-master.us does not host, store, or distribute any game files directly.

Liability:
slice-master.us makes no warranties regarding the availability, accuracy, or functionality of embedded games. Use of the service is at your own risk.

Links to Third Parties:
Our site contains links and embedded content from third-party websites. We are not responsible for the content or practices of these sites.

Governing Law:
These terms are governed by applicable international law.`,
  },
  parents: {
    title: "Parents Info",
    content: `Parents Information for slice-master.us

Dear Parents and Guardians,

Slice Master provides free browser-based games suitable for general audiences. Here's what you should know:

Safety:
- All games are browser-based — no downloads or installations required
- We do not require account creation or personal information
- No in-app purchases or premium content

Content:
- Our games focus on casual slicing and cutting gameplay
- Games are non-violent cartoon-style entertainment
- We curate our game selection for broad audience appeal

Privacy:
- We do not knowingly collect data from children under 13
- Cookies are used for site functionality only
- Third-party game providers may have their own data practices

Recommendations:
- We recommend supervising younger children during online gaming
- Set appropriate time limits for gaming sessions
- Discuss online safety with your children

Questions? Contact us at game@slice-master.us`,
  },
};

const StaticPage = ({ page }: StaticPageProps) => {
  const { t, language, localizedPath } = useLanguage();
  const content = pageContent[page];

  if (!content) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="font-heading font-bold text-2xl text-foreground">Page not found</h1>
        <Link to={localizedPath("/")} className="mt-4 inline-block text-primary text-sm">{t("back_to_games")}</Link>
      </div>
    );
  }

  useSEO({
    title: `${content.title} | Slice Master`,
    description: content.content.substring(0, 155) + "...",
    canonical: `${DOMAIN}${localizedPath(`/${page}`)}`,
    lang: language,
  });

  return (
    <div className="container px-4 py-8 max-w-3xl">
      <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6">
        <Link to={localizedPath("/")} className="hover:text-primary">{t("home")}</Link>
        <span>/</span>
        <span className="text-foreground">{content.title}</span>
      </nav>

      <h1 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-foreground">{content.title}</h1>

      <div className="prose prose-sm max-w-none">
        {content.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StaticPage;
