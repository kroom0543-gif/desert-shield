import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-black border-b border-brand-white/10">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center max-w-3xl mx-auto"
           >
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Connect with Excellence</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-8 tracking-tighter uppercase italic">Talk to a Security Expert</h1>
              <p className="text-brand-white/60 text-lg">
                Available 24/7 for emergency inquiries and high-priority consultations across the Kingdom.
              </p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                 <div>
                    <h3 className="text-2xl font-bold text-brand-black uppercase tracking-tighter mb-8">Direct Channels</h3>
                    <div className="space-y-8">
                       <div className="flex gap-6 items-start">
                          <div className="w-14 h-14 bg-brand-gold flex items-center justify-center shrink-0 rounded-sm">
                             <Phone className="w-6 h-6 text-brand-black" />
                          </div>
                          <div>
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40 mb-2">Primary Line</h4>
                             <p className="text-2xl font-bold text-brand-black">+966 50 XXX XXXX</p>
                          </div>
                       </div>
                       <div className="flex gap-6 items-start">
                          <div className="w-14 h-14 bg-brand-gold flex items-center justify-center shrink-0 rounded-sm">
                             <MessageSquare className="w-6 h-6 text-brand-black" />
                          </div>
                          <div>
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40 mb-2">WhatsApp Business</h4>
                             <p className="text-2xl font-bold text-brand-black">+966 50 XXX XXXX</p>
                          </div>
                       </div>
                       <div className="flex gap-6 items-start">
                          <div className="w-14 h-14 bg-brand-gold flex items-center justify-center shrink-0 rounded-sm">
                             <Mail className="w-6 h-6 text-brand-black" />
                          </div>
                          <div>
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40 mb-2">Corporate Inquiries</h4>
                             <p className="text-2xl font-bold text-brand-black">info@desertshield.com</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div>
                    <h3 className="text-2xl font-bold text-brand-black uppercase tracking-tighter mb-8">Headquarters</h3>
                    <div className="flex gap-6 items-start">
                        <MapPin className="w-8 h-8 text-brand-gold shrink-0" />
                        <p className="text-lg text-brand-charcoal/60 leading-relaxed font-medium">
                           Building 42, King Fahd Road,<br />
                           Al Olaya District, Riyadh 12211,<br />
                           Kingdom of Saudi Arabia.
                        </p>
                    </div>
                 </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-white p-12 shadow-premium rounded-sm"
              >
                  <h3 className="text-2xl font-bold text-brand-black uppercase tracking-tighter mb-8 italic">Quick Inquiry</h3>
                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">Full Name</label>
                           <input className="w-full bg-brand-gray-light border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">Email</label>
                           <input className="w-full bg-brand-gray-light border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">Subject</label>
                        <input className="w-full bg-brand-gray-light border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">Message</label>
                        <textarea rows={4} className="w-full bg-brand-gray-light border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold transition-all" />
                     </div>
                     <button className="w-full bg-brand-black text-brand-gold py-5 font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all flex items-center justify-center gap-3">
                        Send Message <Send className="w-4 h-4" />
                     </button>
                  </form>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}
