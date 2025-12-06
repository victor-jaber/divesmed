import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  accentColor?: "cyan" | "gold" | "purple";
}

export function FeatureSection({
  id,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  reversed = false,
  accentColor = "cyan",
}: FeatureSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  
  const accentColors = {
    cyan: "from-primary/30 to-primary/5",
    gold: "from-secondary/30 to-secondary/5",
    purple: "from-accent/30 to-accent/5",
  };
  
  const glowColors = {
    cyan: "glow-cyan",
    gold: "glow-gold", 
    purple: "glow-purple",
  };
  
  const textColors = {
    cyan: "text-primary",
    gold: "text-secondary",
    purple: "text-accent",
  };

  return (
    <section 
      ref={ref}
      id={id}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Background glow */}
      <div className={cn(
        "absolute inset-0 bg-gradient-radial opacity-50",
        accentColors[accentColor]
      )} />
      
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        style={{ opacity }}
      >
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
          reversed ? "lg:flex-row-reverse" : ""
        )}>
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle && (
              <motion.span 
                className={cn(
                  "inline-block text-sm font-bold tracking-[0.3em] uppercase",
                  textColors[accentColor]
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {subtitle}
              </motion.span>
            )}
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-white/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <MagneticButton 
                className={cn(
                  "inline-flex items-center gap-3 px-8 py-4 glass rounded-full font-medium tracking-wide group",
                  textColors[accentColor]
                )}
                onClick={() => window.open("https://divesmed.com.br", "_blank")}
              >
                DESCUBRA MAIS
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none"
            style={{ y, scale }}
          >
            <motion.div 
              className={cn(
                "relative aspect-square overflow-hidden rounded-3xl",
                glowColors[accentColor]
              )}
              initial={{ opacity: 0, scale: 0.8, rotate: reversed ? -5 : 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, rotate: reversed ? 2 : -2 }}
            >
              <div className="absolute inset-0 glass-strong rounded-3xl" />
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-full object-cover rounded-3xl"
              />
              {/* Overlay gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t rounded-3xl",
                accentColors[accentColor]
              )} />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
