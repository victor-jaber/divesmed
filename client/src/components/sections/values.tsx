import { Beaker, Globe, Award, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: Beaker,
    title: "Soluções Pioneiras",
    description: "Tecnologias modernas e inovação científica para resultados superiores.",
    color: "primary"
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "O maior portfólio de produtos construído em anos de dedicação.",
    color: "secondary"
  },
  {
    icon: Globe,
    title: "Equipe Global",
    description: "Pesquisa e ciência unidas por especialistas de todo o mundo.",
    color: "accent"
  }
];

export function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={ref} id="discover" className="relative py-32 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ opacity }}
      >
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white/70 tracking-widest uppercase">Nossos Valores</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">
            Por Que <span className="gradient-text">DIVES MED</span>?
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Combinamos ciência de ponta com décadas de experiência para entregar resultados excepcionais.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative glass rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 group-hover:border-white/20">
                {/* Hover glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                  value.color === 'primary' ? 'from-primary/20' : 
                  value.color === 'secondary' ? 'from-secondary/20' : 
                  'from-accent/20'
                } to-transparent rounded-3xl`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      value.color === 'primary' ? 'bg-primary/20 text-primary' :
                      value.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                      'bg-accent/20 text-accent'
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <value.icon strokeWidth={1.5} size={32} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-serif font-medium text-white mb-4">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
