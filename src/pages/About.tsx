import { motion } from "motion/react";
import { Shield, Users, Target, Award, Globe, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2600"
            alt="Desert Shield HQ"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 uppercase tracking-tighter">
              Protection You <br /> Can Trust.
            </h1>
            <p className="text-xl text-brand-gold font-medium uppercase tracking-widest mb-8">
              Securing the future of Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 uppercase tracking-tighter">A Legacy of Vigilance</h3>
              <div className="space-y-6 text-brand-charcoal/70 leading-relaxed text-lg">
                <p>
                  Founded on the principles of military discipline and corporate excellence, Desert Shield was established to address the growing need for sophisticated, high-end security services in the Kingdom of Saudi Arabia.
                </p>
                <p>
                  Our journey began with a single mission: to provide the most reliable, professionally trained m guarding solutions in the region. Today, we have evolved into a technology-driven security titan, protecting billions in assets and thousands of lives every day.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div {...fadeInUp} className="bg-brand-gray-light p-8 rounded-sm text-center border-b-4 border-brand-gold">
                <Users className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-black">2.5k</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40">Active Guards</div>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-brand-black p-8 rounded-sm text-center border-b-4 border-brand-gold">
                <Globe className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-white">12</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-white/40">Cities Covered</div>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-brand-gray-light p-8 rounded-sm text-center border-b-4 border-brand-gold">
                <Briefcase className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-black">500+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40">Contracts</div>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-brand-black p-8 rounded-sm text-center border-b-4 border-brand-gold">
                <Award className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-white">99%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-white/40">Client Retention</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
             <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">Leadership</h2>
             <h3 className="text-3xl md:text-5xl font-bold text-brand-black mb-6 uppercase tracking-tighter">Expert Governance</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="group">
                <div className="aspect-[4/5] bg-brand-black mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden rounded-sm relative">
                   <img
                     src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800`}
                     alt="Leader"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-black to-transparent">
                      <div className="text-brand-white font-bold uppercase tracking-widest text-sm">Managing Director</div>
                   </div>
                </div>
                <h4 className="text-xl font-bold text-brand-black uppercase tracking-tighter mb-1">Ahmed Al-Sulaiman</h4>
                <p className="text-brand-charcoal/60 text-xs font-bold uppercase tracking-widest">Special Operations Expert</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Standards */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-black p-12 md:p-20 rounded-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full opacity-10">
              <Shield className="w-1/2 h-full stroke-1 text-brand-gold" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Training Academy</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-brand-white mb-8 uppercase tracking-tighter">Elite Recruitment. <br /> Continuous Training.</h3>
                <p className="text-brand-white/60 mb-8 leading-relaxed">
                  Our recruitment process selects only the top 5% of applicants. Once selected, every guard undergoes intensive training at the Desert Shield Academy, covering:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Crowd Control", "First Aid & CPR", "Conflict Resolution", "Fire Safety", "Cyber Awareness", "Counter-Terrorism"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-white/80 text-sm font-medium">
                      <Shield className="w-4 h-4 text-brand-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm flex items-center justify-center">
                <Shield className="w-20 h-20 text-brand-gold/20" />
                <span className="absolute text-brand-gold/40 text-[10px] uppercase font-bold tracking-[0.5em]">Command Center Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
