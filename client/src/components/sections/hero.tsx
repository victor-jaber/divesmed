import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/hero_background_luxury_medical_aesthetic.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Medical Aesthetic Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-white text-lg md:text-xl tracking-[0.3em] uppercase mb-4 font-medium">
            Nova Dimensão da Beleza
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            DIVES MED
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Produtos médicos e cosméticos criados para lutar por uma pele saudável e bonita.
            Onde a Beleza e a Juventude são novamente POSSÍVEIS.
          </p>
          
          <Button 
            size="lg"
            className="bg-white/10 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-primary transition-all duration-500 text-lg px-8 py-6 rounded-none uppercase tracking-widest"
            onClick={() => document.getElementById('presentation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Descubra Mais
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
