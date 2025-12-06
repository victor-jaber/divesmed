import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@assets/generated_images/hero_background_luxury_medical_aesthetic.png";
import { Particles } from "@/components/effects/particles";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden" style={{ position: 'relative' }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(270,30%,8%)] to-background" />
      
      {/* Parallax Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <img
          src={heroBg}
          alt="Medical Aesthetic Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </motion.div>
      
      {/* Floating Particles */}
      <Particles count={40} />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-secondary/15 blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 glass rounded-full text-primary text-sm font-medium tracking-[0.3em] uppercase">
              Nova Dimensão da Beleza
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="gradient-text text-glow">DIVES</span>
            <br />
            <span className="text-white">MED</span>
          </motion.h1>
          
          <motion.p 
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Produtos médicos e cosméticos criados para lutar por uma pele saudável e bonita.
            Onde a <span className="text-primary font-medium">Beleza</span> e a <span className="text-secondary font-medium">Juventude</span> são novamente possíveis.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton 
              className="px-10 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-full glow-cyan tracking-wide uppercase"
              onClick={() => window.open("https://divesmed.com.br", "_blank")}
            >
              Explorar Produtos
            </MagneticButton>
            
            <MagneticButton 
              className="px-10 py-4 glass text-white font-medium text-lg rounded-full gradient-border tracking-wide uppercase"
              onClick={() => document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Descubra Mais
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
