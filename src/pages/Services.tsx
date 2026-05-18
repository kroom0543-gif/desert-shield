import { motion } from "motion/react";
import { Shield, Building, Users, Eye, Zap, Lock, Truck, Search, Briefcase, GraduationCap, Home, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const serviceDetails = [
  {
    id: "manned",
    title: "Manned Guarding",
    icon: <Users className="w-10 h-10" />,
    desc: "Elite security personnel for static and mobile duties, trained to the highest international standards.",
    features: ["Uniformed guards", "Concierge security", "Bilingual personnel", "Incident management"]
  },
  {
    id: "vip",
    title: "VIP Protection",
    icon: <Shield className="w-10 h-10" />,
    desc: "Executive protection and close security for VIPs, businessmen, and public figures across the GCC.",
    features: ["Bodyguards", "Secure transport", "Route planning", "Risk assessment"]
  },
  {
    id: "monitoring",
    title: "CCTV & Monitoring",
    icon: <Eye className="w-10 h-10" />,
    desc: "State-of-the-art remote monitoring center operational 24/7 with immediate response capabilities.",
    features: ["Remote CCTV hubs", "Motion detection", "Access control", "Digital reporting"]
  },
  {
     id: "event",
     title: "Event Security",
     icon: <Activity className="w-10 h-10" />,
     desc: "Comprehensive safety planning and crowd management for large scale events and conferences.",
     features: ["Crowd control", "Baggage screening", "VIP entry management", "Emergency evacuation"]
  },
  {
    id: "industrial",
    title: "Industrial Security",
    icon: <Building className="w-10 h-10" />,
    desc: "Specialized protection for warehouses, construction sites, and multi-billion-dollar infrastructure.",
    features: ["Perimeter patrol", "Asset tracking", "Safety audits", "Restricted access"]
  },
  {
    id: "patrol",
    title: "Mobile Patrols",
    icon: <Truck className="w-10 h-10" />,
    desc: "Strategic vehicle-based security inspections to ensure wide-area protection and rapid response.",
    features: ["GPS tracked vehicles", "Random inspections", "Alarm response", "Lockup services"]
  }
];

export function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-black py-24 border-b border-brand-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div {...fadeInUp} className="max-w-3xl">
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Elite Solutions</h2>
              <h1 className="text-4xl md:text-7xl font-bold text-brand-white uppercase tracking-tighter mb-8 italic">
                Advanced Security <br /> Architecture.
              </h1>
              <p className="text-brand-white/60 text-xl leading-relaxed">
                From physical presence to digital intelligence, we offer a complete ecosystem of protection.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {serviceDetails.map((service, i) => (
                <motion.div key={service.id} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                   <div className="mb-6 text-brand-gold flex items-center justify-between group">
                      {service.icon}
                      <span className="text-[10px] font-bold text-brand-black/20 uppercase tracking-[0.5em] group-hover:text-brand-gold transition-colors">0{i + 1}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-tighter">{service.title}</h3>
                   <p className="text-brand-charcoal/60 mb-8 text-sm leading-relaxed">{service.desc}</p>
                   <div className="h-px bg-brand-black/10 mb-8" />
                   <ul className="space-y-4 mb-10">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-3 text-brand-black font-medium text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                           {feature}
                        </li>
                      ))}
                   </ul>
                   <Link to="/quote" className="text-xs font-bold uppercase tracking-widest text-brand-gold group flex items-center gap-2 hover:translate-x-2 transition-transform">
                      Inquire about this service <ChevronRight className="w-4 h-4" />
                   </Link>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Industries Served Preview */}
      <section className="py-24 bg-brand-gray-light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-20">
              <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Industries Served</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-black mb-6 uppercase tracking-tighter italic">We Secure Your Assets.</h3>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {[
                 { name: "Government", icon: <Building /> },
                 { name: "Financial", icon: <Shield /> },
                 { name: "Retail", icon: <Briefcase /> },
                 { name: "Education", icon: <GraduationCap /> },
                 { name: "Hospitality", icon: <Home /> },
                 { name: "Healthcare", icon: <Shield /> },
                 { name: "Construction", icon: <Building /> },
                 { name: "Luxury Estate", icon: <Shield /> }
               ].map((item, i) => (
                 <motion.div
                   key={i}
                   {...fadeInUp}
                   transition={{ delay: i * 0.05 }}
                   className="bg-brand-white p-8 group hover:bg-brand-gold transition-all duration-300 rounded-sm text-center border border-black/5"
                 >
                    <div className="text-brand-gold group-hover:text-brand-black transition-colors mb-4 flex justify-center">{item.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-brand-black transition-colors">{item.name}</span>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Final Quote */}
      <section className="py-32 bg-brand-black text-center border-t border-brand-white/10">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-white mb-10 uppercase tracking-tighter">Ready to secure your business?</h2>
        <Link to="/quote" className="bg-brand-gold text-brand-black px-12 py-5 font-bold uppercase tracking-widest shadow-gold hover:scale-105 transition-transform inline-block">
           Get Custom Quote
        </Link>
      </section>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
