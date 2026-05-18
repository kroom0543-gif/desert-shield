import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../../i18n/I18nProvider";
import { Shield, Menu, X, Globe, Phone, Mail, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const { language, changeLanguage, direction } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.industries"), path: "/industries" },
    { name: "Technology", path: "/technology" },
    { name: "Cases", path: "/cases" },
    { name: "FAQ", path: "/faq" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-brand-black/95 backdrop-blur-md border-white/10 shadow-lg py-3" 
            : "bg-[#0F1115]/80 backdrop-blur-sm border-white/5 py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-sm rotate-45 shadow-gold group-hover:scale-110 transition-all">
              <div className="-rotate-45 font-extrabold text-black text-lg">DS</div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-brand-white tracking-tight uppercase">Desert Shield</span>
              <span className="text-[9px] text-brand-gold uppercase tracking-[0.2em] font-semibold">Security & Protection</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[11px] uppercase tracking-widest font-bold transition-all hover:text-brand-gold",
                  location.pathname === link.path ? "text-brand-gold" : "text-white/70"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
              className="text-[11px] font-bold text-brand-gold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              {language === "en" ? "العربية" : "English"}
            </button>
            <div className="w-px h-4 bg-white/20"></div>
            <Link
              to="/quote"
              className="bg-transparent border border-brand-gold text-brand-gold px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all"
            >
              {t("nav.getQuote")}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-brand-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black pt-24 px-4 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-brand-white hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-brand-white/10 my-4" />
              <button
                onClick={() => {
                  changeLanguage(language === "en" ? "ar" : "en");
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 text-xl font-medium text-brand-white/80"
              >
                <Globe className="w-6 h-6" />
                {language === "en" ? "العربية" : "English"}
              </button>
              <Link
                to="/quote"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-gold text-brand-black text-center py-4 rounded-sm text-xl font-bold uppercase"
              >
                {t("nav.getQuote")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-brand-black text-brand-white pt-20 pb-10 border-t border-brand-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6 pointer-events-none">
                <Shield className="w-10 h-10 text-brand-gold" />
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-bold text-brand-white tracking-widest uppercase">Desert Shield</span>
                  <span className="text-xs text-brand-gold uppercase tracking-[0.2em]">Security Solutions</span>
                </div>
              </Link>
              <p className="text-brand-white/60 mb-8 max-w-md leading-relaxed">
                Elite security solutions for a changing world. We provide premium protection for high-value assets, corporate environments, and critical infrastructure across the GCC region.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-brand-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                  {/* Social Icon */}
                  <span className="sr-only">Social</span>
                  <Globe className="w-5 h-5" />
                </a>
                {/* More social icons... */}
              </div>
            </div>

            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4 text-brand-white/60">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-brand-gold transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-6">Contact Us</h4>
              <ul className="space-y-4 text-brand-white/60">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>+966 50 XXX XXXX</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>info@desertshield.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>Riyadh, Kingdom of Saudi Arabia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-brand-white/10 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-brand-white/40 text-xs">
            <p>© 2026 Desert Shield Security Solutions. All rights reserved.</p>
            <div className="flex gap-6 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-black/95 backdrop-blur-md border-t border-brand-white/10 z-[60] md:hidden">
        <div className="flex justify-around py-3 px-2">
          <a href="tel:+966500000000" className="flex flex-col items-center gap-1 text-[10px] text-brand-white uppercase font-bold tracking-tighter">
            <div className="bg-brand-white/10 p-2 rounded-full"><Phone className="w-5 h-5 text-brand-gold" /></div>
            <span>Call Now</span>
          </a>
          <a href="https://wa.me/966500000000" className="flex flex-col items-center gap-1 text-[10px] text-brand-white uppercase font-bold tracking-tighter">
            <div className="bg-brand-white/10 p-2 rounded-full"><MessageSquare className="w-5 h-5 text-green-500" /></div>
            <span>WhatsApp</span>
          </a>
          <Link to="/quote" className="flex flex-col items-center gap-1 text-[10px] text-brand-white uppercase font-bold tracking-tighter">
            <div className="bg-brand-gold p-2 rounded-full"><Shield className="w-5 h-5 text-brand-black" /></div>
            <span>Get Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
