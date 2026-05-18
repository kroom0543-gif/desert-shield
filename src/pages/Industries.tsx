import { motion } from "motion/react";
import { Building, GraduationCap, Hospital, ShoppingBag, Truck, HardHat, Warehouse, Briefcase } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const industries = [
  {
    name: "Government",
    icon: <Building className="w-12 h-12" />,
    desc: "Securing national infrastructure and critical state assets with the high-level clearance.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Corporate",
    icon: <Briefcase className="w-12 h-12" />,
    desc: "Premium office security, executive protection, and concierge services for business hubs.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Construction",
    icon: <HardHat className="w-12 h-12" />,
    desc: "Preventing theft and unauthorized access for multi-billion dollar giga-projects.",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Retail",
    icon: <ShoppingBag className="w-12 h-12" />,
    desc: "Loss prevention and safety management for luxury malls and flagship retail stores.",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Healthcare",
    icon: <Hospital className="w-12 h-12" />,
    desc: "Safe environments for hospitals and clinics, ensuring peace of mind for staff and patients.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Education",
    icon: <GraduationCap className="w-12 h-12" />,
    desc: "Securing schools and universities to provide a safe space for the next generation.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"
  }
];

export function Industries() {
  return (
    <div className="pt-20">
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div {...fadeInUp} className="max-w-3xl">
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Strategic Protection</h2>
              <h1 className="text-4xl md:text-7xl font-bold text-brand-white uppercase tracking-tighter mb-8 italic">
                Sectors We <br /> Secure.
              </h1>
              <p className="text-brand-white/60 text-xl leading-relaxed">
                Specialized security protocols tailored for the unique challenges of every industry in the GCC.
              </p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {industries.map((item, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="group">
                   <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                        alt={item.name}
                      />
                      <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-transparent transition-all" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                         <div className="text-brand-gold mb-4 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                         <h3 className="text-2xl font-bold text-brand-white uppercase tracking-tighter mb-2">{item.name}</h3>
                      </div>
                   </div>
                   <p className="text-brand-charcoal/60 leading-relaxed text-sm">
                      {item.desc}
                   </p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
