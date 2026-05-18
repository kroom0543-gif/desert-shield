import { motion } from "motion/react";
import { Cpu, Shield, Eye, Smartphone, Zap, Database, Search, Lock } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const techFeatures = [
  {
    title: "Real-time Guard Reporting",
    icon: <Smartphone className="w-10 h-10" />,
    desc: "Every guard is equipped with a digital patrol system that logs every checkpoint and incident instantly."
  },
  {
    title: "AI Surveillance Hub",
    icon: <Cpu className="w-10 h-10" />,
    desc: "Our control center uses computer vision to detect anomalies before they become security breaches."
  },
  {
    title: "GPS Patrol Tracking",
    icon: <Database className="w-10 h-10" />,
    desc: "Strategic transparency. Clients can view live patrol locations and coverage through our portal."
  },
  {
    title: "Advanced Biometrics",
    icon: <Lock className="w-10 h-10" />,
    desc: "Facial recognition and fingerprint access control systems integrated for high-security zones."
  }
];

export function Technology() {
  return (
    <div className="pt-20">
      <section className="bg-brand-black py-24 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-5">
           <Cpu className="w-full h-full text-brand-gold stroke-1" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <motion.div {...fadeInUp} className="max-w-3xl">
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Command & Control</h2>
              <h1 className="text-4xl md:text-7xl font-bold text-brand-white uppercase tracking-tighter mb-8 italic">
                The Digital <br /> Shield.
              </h1>
              <p className="text-brand-white/60 text-xl leading-relaxed">
                Security is no longer just physical. We leverage a sophisticated tech stack to ensure absolute vigilance across every operation.
              </p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {techFeatures.map((tech, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-gray-light p-12 border-l-4 border-brand-gold relative group hover:bg-brand-gold transition-all duration-500"
                >
                   <div className="text-brand-gold mb-6 group-hover:scale-110 group-hover:text-black transition-all origin-left">{tech.icon}</div>
                   <h3 className="text-2xl font-bold text-white group-hover:text-black uppercase tracking-tighter transition-colors mb-4">{tech.title}</h3>
                   <p className="text-white/40 group-hover:text-black/60 leading-relaxed transition-colors">
                      {tech.desc}
                   </p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-brand-gold p-12 md:p-20 shadow-premium flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                 <h2 className="text-brand-black text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 italic">Control Center <br /> Integration.</h2>
                 <p className="text-brand-black/70 mb-8 font-medium">
                    Our 24/7 National Operations Center serves as the brain of Desert Shield, coordinating between intelligence, technology, and on-site personnel in Riyadh.
                 </p>
                 <button className="bg-brand-black text-brand-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-black/90 transition-all">
                    Request a Demo
                 </button>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-brand-black/10 rounded-sm flex items-center justify-center border border-black/5">
                 <Shield className="w-32 h-32 text-brand-black/20" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
