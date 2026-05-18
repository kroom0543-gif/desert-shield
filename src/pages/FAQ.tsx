import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus, Shield } from "lucide-react";

const faqs = [
  {
    q: "Are your security guards professionally trained?",
    a: "Every Desert Shield security professional undergoes a rigorous 4-week training program at our academy, followed by continuous on-site training. We follow G4S-equivalent international guarding standards."
  },
  {
    q: "Which regions do you operate in?",
    a: "We currently provide full operations across the Kingdom of Saudi Arabia, with headquarters in Riyadh and regional offices in Jeddah, Dammam, and NEOM."
  },
  {
    q: "How quickly can you deploy a security team?",
    a: "Depending on the location and scale, we can typically deploy emergency guarding units within 24-48 hours after risk assessment and contract finalization."
  },
  {
    q: "Do you provide armed security services?",
    a: "Yes, we provide specialized armed security for high-value asset transport and critical infrastructure, fully compliant with Saudi Ministry of Interior regulations."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20">
      <section className="bg-brand-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Support & Info</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8 italic">Frequently Asked <br /> Questions.</h1>
           </div>

           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-brand-gray-light border border-white/5 rounded-sm overflow-hidden group">
                   <button
                     onClick={() => setOpenIndex(openIndex === i ? null : i)}
                     className="w-full p-8 text-left flex items-center justify-between group/btn"
                   >
                      <span className="text-lg font-bold text-white uppercase tracking-tight group-hover/btn:text-brand-gold transition-colors">
                        {faq.q}
                      </span>
                      {openIndex === i ? <Minus className="text-brand-gold" /> : <Plus className="text-brand-gold" />}
                   </button>
                   <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                           <div className="p-8 pt-0 text-white/40 leading-relaxed border-t border-white/5 font-medium">
                              {faq.a}
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              ))}
           </div>

           <div className="mt-16 bg-brand-black p-12 text-center rounded-sm">
               <Shield className="w-12 h-12 text-brand-gold mx-auto mb-6" />
               <h3 className="text-brand-white text-2xl font-bold uppercase mb-4">Still have questions?</h3>
               <p className="text-brand-white/40 mb-8">Our security experts are available 24/7 to provide high-priority support.</p>
               <button className="bg-brand-gold text-brand-black px-10 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-gold">
                  Talk to an Expert
               </button>
           </div>
        </div>
      </section>
    </div>
  );
}
