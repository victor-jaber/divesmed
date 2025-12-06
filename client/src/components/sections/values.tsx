import { Beaker, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Beaker,
    title: "Soluções Pioneiras",
    description: "Tecnologias modernas e inovação científica para resultados superiores."
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "O maior portfólio de produtos construído em anos de dedicação."
  },
  {
    icon: Globe,
    title: "Equipe Global",
    description: "Pesquisa e ciência unidas por especialistas de todo o mundo."
  }
];

export function ValuesSection() {
  return (
    <section id="presentation" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center space-y-4 group"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <value.icon strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
