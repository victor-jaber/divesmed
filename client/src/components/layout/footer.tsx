import { motion } from "framer-motion";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-32 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* CTA Section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6">
            Pronto para <span className="gradient-text">Transformar</span>?
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
            Descubra nossa linha completa de produtos e inicie sua jornada de renovação.
          </p>
          <MagneticButton 
            className="px-12 py-5 bg-white text-background font-semibold text-lg rounded-full tracking-wide uppercase group inline-flex items-center gap-3"
            onClick={() => window.open("https://divesmed.com.br", "_blank")}
          >
            Visitar Loja Oficial
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </MagneticButton>
        </motion.div>
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-3xl font-serif font-bold mb-6">
              <span className="gradient-text">DIVES</span>
              <span className="text-white ml-1">MED</span>
            </div>
            <p className="text-white/50 max-w-md leading-relaxed mb-6">
              Uma nova dimensão de produtos médicos e cosméticos criados para lutar por uma pele saudável e bonita.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:contato@divesmed.com.br" 
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-all"
              >
                <Mail size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-all"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 tracking-wider text-sm uppercase text-white/90">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#discover" className="text-white/50 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#products" className="text-white/50 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#power-skin" className="text-white/50 hover:text-white transition-colors">Power Skin</a></li>
              <li><a href="#hydra-royal" className="text-white/50 hover:text-white transition-colors">Hydra Royal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 tracking-wider text-sm uppercase text-white/90">Produtos</h4>
            <ul className="space-y-4">
              <li><a href="https://divesmed.com.br" target="_blank" className="text-white/50 hover:text-white transition-colors">Enchimentos</a></li>
              <li><a href="https://divesmed.com.br" target="_blank" className="text-white/50 hover:text-white transition-colors">Mesoterapia</a></li>
              <li><a href="https://divesmed.com.br" target="_blank" className="text-white/50 hover:text-white transition-colors">Peelings</a></li>
              <li><a href="https://divesmed.com.br" target="_blank" className="text-white/50 hover:text-white transition-colors">Modelagem</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
          <p>&copy; 2024 DIVES MED. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
