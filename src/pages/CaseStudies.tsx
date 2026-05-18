import { motion } from "motion/react";
import { ChevronRight, BarChart3, Shield, Target } from "lucide-react";

const cases = [
  {
    title: "NEOM Industrial Zone Protection",
    result: "78% Reduction in Theft",
    desc: "Implementing a multi-layered drone and manned guarding system for a critical giga-project infrastructure.",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1541872703-74c5e443d1f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Riyadh Season Crowd Management",
    result: "0 Major Incidents over 30 Days",
    desc: "Providing safety and crowd control services for over 1 million attendees across various zones.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Global Bank HQ Security Audit",
    result: "99.9% System Compliance",
    desc: "Complete overhaul of physical and digital access controls for a major financial institution in Riyadh.",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800"
  }
];

export function CaseStudies() {
  return (
    <div className="pt-20">
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Proven Outcomes</h2>
              <h1 className="text-4xl md:text-7xl font-bold text-brand-white uppercase tracking-tighter italic">Measured <br /> Protection.</h1>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
           {cases.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={i % 2 === 0 ? "flex flex-col lg:flex-row gap-16 items-center" : "flex flex-col lg:flex-row-reverse gap-16 items-center"}
             >
                <div className="flex-1 w-full relative">
                   <div className="aspect-[16/10] overflow-hidden rounded-sm">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-80" />
                   </div>
                   <div className="absolute -bottom-10 -right-10 hidden xl:block">
                      <div className="bg-brand-gold p-12 shadow-premium">
                         <h4 className="text-brand-black text-3xl font-bold italic tracking-tighter mb-2">{item.result}</h4>
                         <p className="text-brand-black/60 text-[10px] font-bold uppercase tracking-widest">Client Outcome</p>
                      </div>
                   </div>
                </div>

                <div className="flex-1 space-y-6">
                   <div className="bg-brand-black text-brand-gold px-4 py-1 text-[10px] font-bold uppercase tracking-widest inline-block mb-4">
                      {item.category}
                   </div>
                   <h3 className="text-3xl md:text-4xl font-bold text-brand-black uppercase tracking-tighter leading-none italic">{item.title}</h3>
                   <p className="text-brand-charcoal/60 leading-relaxed text-lg">
                      {item.desc}
                   </p>
                   {/* Mobile result badge */}
                   <div className="xl:hidden bg-brand-gold p-8 inline-block">
                      <h4 className="text-brand-black text-2xl font-bold italic tracking-tighter mb-1">{item.result}</h4>
                      <p className="text-brand-black/60 text-[10px] font-bold uppercase tracking-widest">Client Outcome</p>
                   </div>
                   <div className="pt-8">
                     <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-black border-b-2 border-brand-black pb-2 hover:text-brand-gold hover:border-brand-gold transition-all">
                        Full Case Report <ChevronRight className="w-4 h-4" />
                     </button>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
}
