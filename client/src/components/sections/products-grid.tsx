import { motion } from "framer-motion";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { ArrowUpRight, Sparkles } from "lucide-react";

const products = [
  { name: "Cuidados com a Pele", color: "primary" },
  { name: "Enchimentos", color: "secondary" },
  { name: "Mesoterapia", color: "accent" },
  { name: "Família Real Hidra", color: "primary" },
  { name: "Cascas Químicas", color: "secondary" },
  { name: "Tópicos", color: "accent" },
  { name: "Dispositivos", color: "primary" },
  { name: "Estimuladores", color: "secondary" }
];

export function ProductsGrid() {
  return (
    <section id="products" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/70 tracking-widest uppercase">Portfólio Completo</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-4">
            Nossos <span className="gradient-text">Produtos</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Explore nossa linha completa de soluções médicas e estéticas
          </p>
        </motion.div>
        
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => window.open("https://divesmed.com.br", "_blank")}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-square glass rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 ${
                product.color === 'primary' ? 'hover:border-primary/50' :
                product.color === 'secondary' ? 'hover:border-secondary/50' :
                'hover:border-accent/50'
              }`}>
                {/* Hover gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  product.color === 'primary' ? 'bg-gradient-to-br from-primary/20 to-transparent' :
                  product.color === 'secondary' ? 'bg-gradient-to-br from-secondary/20 to-transparent' :
                  'bg-gradient-to-br from-accent/20 to-transparent'
                }`} />
                
                <span className="relative z-10 font-serif text-lg md:text-xl font-medium text-white/80 group-hover:text-white transition-colors">
                  {product.name}
                </span>
                
                <motion.div 
                  className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                    product.color === 'primary' ? 'text-primary' :
                    product.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`}
                  initial={{ x: -10, y: 10 }}
                  whileHover={{ x: 0, y: 0 }}
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <MagneticButton 
            className="px-12 py-5 bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold text-lg rounded-full tracking-wide uppercase animate-gradient"
            onClick={() => window.open("https://divesmed.com.br", "_blank")}
          >
            Ver Todos os Produtos
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
