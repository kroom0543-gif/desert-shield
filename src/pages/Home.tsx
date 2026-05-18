import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Shield, Target, Users, Clock, Zap, ZapOff, CheckCircle2, ChevronRight, BarChart3, Database, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function Home() {
  const { t } = useTranslation();

  const services = [
    { icon: <Shield className="w-8 h-8" />, name: t("home.services.guards"), desc: "Elite static & mobile manned guarding solutions." },
    { icon: <Target className="w-8 h-8" />, name: t("home.services.vip"), desc: "Close protection for high-net-worth individuals." },
    { icon: <Clock className="w-8 h-8" />, name: t("home.services.event"), desc: "Large-scale crowd management & event safety." },
    { icon: <Eye className="w-8 h-8" />, name: t("home.services.cctv"), desc: "24/7 remote surveillance and rapid response." },
    { icon: <Zap className="w-8 h-8" />, name: t("home.services.rapid"), desc: "Strategic emergency units available 24/7." },
    { icon: <Database className="w-8 h-8" />, name: t("home.services.audit"), desc: "Expert assessment and security master planning." },
  ];

  const stats = [
    { value: "15+", label: t("home.stats.experience") },
    { value: "2500+", label: t("home.stats.personnel") },
    { value: "500+", label: t("home.stats.clients") },
    { value: "24/7", label: t("home.stats.ops") },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-brand-black overflow-hidden">
        {/* Visual Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <img
            src="https://images.unsplash.com/photo-1541872703-74c5e443d1f5?auto=format&fit=crop&q=80&w=2600"
            alt="Security"
            className="absolute right-0 w-1/2 h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-brand-gold"></div>
              <span className="text-brand-gold text-[11px] font-bold uppercase tracking-[0.4em]">{t("trust.licensed")}</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold text-brand-white mb-8 leading-[1] tracking-tighter uppercase italic">
              {t("hero.title").split(' ').map((word, i) => (
                <span key={i} className={word === 'Protection' ? 'text-brand-gold' : ''}>{word} </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-md leading-relaxed font-medium">
              Professional security solutions built for absolute protection of high-value assets across Saudi Arabia & the GCC region.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/quote"
                className="bg-brand-gold text-brand-black px-12 py-5 text-xs font-bold uppercase tracking-widest shadow-gold hover:scale-105 transition-all text-center"
              >
                Talk to an Expert
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-white/20 text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center"
              >
                Our Capabilities
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-12 border-t border-white/5 pt-12">
               {stats.slice(0, 3).map((stat, i) => (
                 <div key={i} className="space-y-1">
                    <div className="text-2xl md:text-4xl font-bold text-white tracking-tighter italic">{stat.value}</div>
                    <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">{stat.label}</div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries SNAPSHOT - From the Theme Design */}
      <section className="py-24 bg-[#0F1115] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               <motion.div {...fadeInUp}>
                  <h3 className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-12">Industries Served</h3>
                  <div className="space-y-6">
                    {[
                      "Government & Diplomatic",
                      "Corporate & Luxury Real Estate",
                      "Critical Industrial Infrastructure",
                      "High-Value Logistics & Assets"
                    ].map((industry, i) => (
                      <div key={i} className="flex items-center gap-6 border-b border-white/5 pb-6 group cursor-pointer hover:border-brand-gold/30 transition-colors">
                        <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-brand-gold font-bold text-sm group-hover:bg-brand-gold group-hover:text-black transition-all">0{i+1}</div>
                        <span className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">{industry}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <motion.div {...fadeInUp} className="bg-brand-gold p-12 text-black flex flex-col justify-between h-80 rounded-sm">
                  <div>
                    <h4 className="font-extrabold text-3xl md:text-4xl leading-tight uppercase tracking-tighter italic italic">Certified <br/> Excellence</h4>
                    <p className="text-base mt-4 opacity-80 font-medium italic">ISO 9001, 45001 & HCIS Compliant security firm based in Riyadh.</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-black/10 pt-8">
                     <Shield className="w-12 h-12" />
                     <span className="text-xs font-black uppercase tracking-[0.3em]">Est. 2004</span>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Services snapshot - Refined for New Theme */}
      <section className="py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-xs font-bold text-brand-gold uppercase tracking-[0.4em] mb-4">Tactical Operations</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 uppercase tracking-tighter italic">Absolute Protection.</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1 bg-white/5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-black p-12 group hover:bg-brand-gold transition-all duration-500"
              >
                <div className="mb-8 text-brand-gold group-hover:text-black transition-colors">{service.icon}</div>
                <h4 className="text-2xl font-bold text-brand-white mb-4 uppercase tracking-tighter group-hover:text-black transition-colors">{service.name}</h4>
                <p className="text-white/40 mb-10 text-sm leading-relaxed group-hover:text-black/60 transition-colors">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] group-hover:text-black transition-colors">
                  View Detail <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Desert Shield */}
      <section className="py-24 bg-brand-black relative">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <Shield className="w-full h-full text-brand-gold stroke-1" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-white mb-8 leading-tight">
                Corporate Excellence. <br /> Military Precision.
              </h3>
              <p className="text-brand-white/60 mb-10 text-lg leading-relaxed">
                Desert Shield is not just a guard company. We are a tactical partner dedicated to the preservation of value and the safety of personnel across the most demanding environments in Saudi Arabia.
              </p>

              <div className="space-y-6">
                {[
                  "G4S-Standard Trained Personnel",
                  "Nationwide Ops Center (24/7/365)",
                  "Real-time Digital Incident Reporting",
                  "Fully Managed Compliance & Risk Systems",
                  "Luxury Uniformed Presence"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    </div>
                    <span className="text-brand-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="relative aspect-square md:aspect-video rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
                alt="Security Team"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 border-[20px] border-brand-white/5 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 luxury-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-5xl font-bold text-brand-white mb-8"
          >
            Need Professional Security Protection?
          </motion.h2>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/quote"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black px-12 py-5 rounded-sm text-lg font-bold transition-all shadow-gold hover:scale-105 uppercase"
            >
              Request a Security Quote
            </Link>
            <a
              href="https://wa.me/966500000000"
              className="bg-brand-white/10 hover:bg-brand-white/20 backdrop-blur-md text-brand-white px-12 py-5 rounded-sm text-lg font-bold transition-all hover:scale-105 uppercase border border-brand-white/20"
            >
              WhatsApp Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
