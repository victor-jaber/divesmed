import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  theme?: "light" | "dark";
}

export function FeatureSection({
  id,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  reversed = false,
  theme = "light",
}: FeatureSectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-24 md:py-32 overflow-hidden",
        theme === "dark" ? "bg-primary text-white" : "bg-background text-foreground"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-12 md:gap-20",
          reversed ? "md:flex-row-reverse" : ""
        )}>
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {subtitle && (
              <span className={cn(
                "text-sm font-bold tracking-[0.2em] uppercase",
                theme === "dark" ? "text-white/70" : "text-secondary"
              )}>
                {subtitle}
              </span>
            )}
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
              {title}
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed max-w-xl",
              theme === "dark" ? "text-white/80" : "text-muted-foreground"
            )}>
              {description}
            </p>
            
            <div className="pt-4">
              <Button 
                variant="link" 
                className={cn(
                  "p-0 text-lg h-auto font-medium tracking-wide group",
                  theme === "dark" ? "text-white decoration-white" : "text-primary decoration-primary"
                )}
                onClick={() => window.open("https://divesmed.com.br", "_blank")}
              >
                DESCUBRA MAIS
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-muted">
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Decorative border */}
              <div className={cn(
                "absolute inset-4 border border-white/30 pointer-events-none",
                theme === "light" ? "border-white/50" : "border-white/20"
              )} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
