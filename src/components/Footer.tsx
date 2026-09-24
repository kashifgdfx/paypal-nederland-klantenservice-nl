"use client";

import React from "react";
import { Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Agar section nahi mila toh page ke top par ya kisi fallback section par bhej dega
        e.preventDefault();
        window.scrollTo({ top: 100, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#000000] text-[#c0c0c0] text-sm font-normal border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Logo & Primary Nav Links */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#222222]">
          {/* PayPal White Logo */}
          <div className="flex items-center shrink-0">
            <span className="text-white text-5xl font-black tracking-tight">
              PayPal
            </span>
          </div>

          {/* Primary Row Links */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-white font-semibold text-sm">
            <li>
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, "#faq")}
                className="hover:underline"
              >
                Hulp
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hover:underline"
              >
                Contactgegevens
              </a>
            </li>
            <li>
              <a
                href="#betalingsproblemen"
                onClick={(e) => handleNavClick(e, "#betalingsproblemen")}
                className="hover:underline"
              >
                Kosten
              </a>
            </li>
            <li>
              <a
                href="#veiligheid"
                onClick={(e) => handleNavClick(e, "#veiligheid")}
                className="hover:underline"
              >
                Veiligheid
              </a>
            </li>
            <li>
              <a
                href="#apps"
                onClick={(e) => handleNavClick(e, "#apps")}
                className="hover:underline"
              >
                Apps
              </a>
            </li>
            <li>
              <a
                href="#shopping"
                onClick={(e) => handleNavClick(e, "#shopping")}
                className="hover:underline"
              >
                Shopping
              </a>
            </li>
            <li>
              <a
                href="#enterprise"
                onClick={(e) => handleNavClick(e, "#enterprise")}
                className="hover:underline"
              >
                Enterprise
              </a>
            </li>
            <li>
              <a
                href="#partners"
                onClick={(e) => handleNavClick(e, "#partners")}
                className="hover:underline"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="#eu-digital-services"
                onClick={(e) => handleNavClick(e, "#eu-digital-services")}
                className="hover:underline"
              >
                EU Digital Services Act
              </a>
            </li>
          </ul>

          {/* Netherlands Location Link redirecting to Amsterdam map */}
          <div className="shrink-0 lg:ml-auto">
            <a
              href="https://www.google.com/maps/place/Amsterdam,+Netherlands"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:underline"
            >
              <Globe className="w-4 h-4 text-white" />
              <span>Netherlands</span>
            </a>
          </div>
        </div>

        {/* Secondary Row Links & Copyright */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-8 border-b border-[#222222]">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-white font-semibold text-sm">
            <li>
              <a
                href="#info"
                onClick={(e) => handleNavClick(e, "#info")}
                className="hover:underline"
              >
                Info
              </a>
            </li>
            <li>
              <a
                href="#newsroom"
                onClick={(e) => handleNavClick(e, "#newsroom")}
                className="hover:underline"
              >
                Newsroom
              </a>
            </li>
            <li>
              <a
                href="#vacatures"
                onClick={(e) => handleNavClick(e, "#vacatures")}
                className="hover:underline"
              >
                Vacatures
              </a>
            </li>
            <li>
              <a
                href="#ontwikkelaar"
                onClick={(e) => handleNavClick(e, "#ontwikkelaar")}
                className="hover:underline"
              >
                Ontwikkelaar
              </a>
            </li>
          </ul>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-x-6 gap-y-3 w-full lg:w-auto text-white font-semibold text-xs">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>© 1999 - 2026</span>
              <a
                href="#toegankelijkheid"
                onClick={(e) => handleNavClick(e, "#toegankelijkheid")}
                className="hover:underline"
              >
                Toegankelijkheid
              </a>
              <a
                href="#privacy"
                onClick={(e) => handleNavClick(e, "#privacy")}
                className="hover:underline"
              >
                Privacy
              </a>
              <a
                href="#cookies"
                onClick={(e) => handleNavClick(e, "#cookies")}
                className="hover:underline"
              >
                Cookies
              </a>
              <a
                href="#legal"
                onClick={(e) => handleNavClick(e, "#legal")}
                className="hover:underline"
              >
                Legal
              </a>
              <a
                href="#klachten"
                onClick={(e) => handleNavClick(e, "#klachten")}
                className="hover:underline"
              >
                Klachten
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#222222] hover:bg-[#333333] text-white text-xs font-medium transition-colors shrink-0"
            >
              <span>Naar boven</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer Disclaimers & Fine Print */}
       <div className="pt-6 space-y-3 text-[11px] text-[#888888] leading-relaxed">
  <p>Alle schermafbeeldingen zijn uitsluitend ter illustratie.</p>

  <p>
    <span className="text-white font-semibold">1</span>{" "}
    Aankoopbescherming kan alleen van toepassing zijn op bepaalde in aanmerking
    komende transacties. De voorwaarden voor geschiktheid, termijnen en
    aanvullende voorwaarden kunnen variëren. Raadpleeg de voorwaarden van
    Aankoopbescherming in de{" "}
    <a
      href="#gebruikersovereenkomst"
      onClick={(e) => handleNavClick(e, "#gebruikersovereenkomst")}
      className="text-white underline hover:text-blue-400"
    >
      Gebruikersovereenkomst
    </a>{" "}
    die van toepassing is op uw locatie voor volledige details.
  </p>

  <p>
    <span className="text-white font-semibold">2</span>{" "}
    U heeft een in aanmerking komend account nodig om geld te verzenden of te
    ontvangen. Er kunnen wisselkoerskosten van toepassing zijn bij het
    omrekenen van valuta. Er kunnen ook extra kosten in rekening worden gebracht
    wanneer u een andere valuta dan GBP overmaakt naar een account in een ander
    land.{" "}
    <a
      href="#betalingsproblemen"
      onClick={(e) => handleNavClick(e, "#betalingsproblemen")}
      className="text-white underline hover:text-blue-400"
    >
      Raadpleeg het toepasselijke kostenoverzicht
    </a>{" "}
    voor actuele tarieven en voorwaarden.
  </p>
</div>
      </div>
    </footer>
  );
}