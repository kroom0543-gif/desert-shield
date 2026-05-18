import { motion } from "motion/react";
import { ChevronRight, Clock, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Modern Surveillance",
    excerpt: "How computer vision is revolutionizing rapid response in giga-projects across Riyadh.",
    date: "Oct 24, 2025",
    author: "Dr. Hamad Al-Qahtani",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Securing High-Profile Events: A Tactical Guide",
    excerpt: "Best practices for crowd management and VIP safety during international summits.",
    date: "Sep 12, 2025",
    author: "Maj. David Thompson",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Managing Risk in Industrial Logistics",
    excerpt: "Why traditional guarding is no longer enough for modern supply chain security.",
    date: "Aug 05, 2025",
    author: "Eng. Sara Al-Fahad",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  }
];

export function Blog() {
  return (
    <div className="pt-20">
      <section className="bg-brand-black py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Security Insights</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-white uppercase tracking-tighter mb-8 italic">The Edge.</h1>
              <p className="text-brand-white/60 text-lg max-w-2xl mx-auto">
                Analyzing the evolving security landscape of the Middle East.
              </p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.map((post, i) => (
                <motion.article
                   key={post.id}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group cursor-pointer"
                >
                   <div className="aspect-video overflow-hidden rounded-sm mb-6 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-brand-gold text-brand-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        {post.category}
                      </div>
                   </div>
                   <div className="flex items-center gap-4 text-brand-charcoal/40 text-[10px] uppercase font-bold tracking-widest mb-4">
                      <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</div>
                      <div className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</div>
                   </div>
                   <h3 className="text-xl font-bold text-brand-black mb-4 uppercase tracking-tighter group-hover:text-brand-gold transition-colors">{post.title}</h3>
                   <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                   </p>
                   <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold">
                      Read Analysis <ChevronRight className="w-4 h-4" />
                   </div>
                </motion.article>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
