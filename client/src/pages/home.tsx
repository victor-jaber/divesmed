import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { FeatureSection } from "@/components/sections/feature-section";
import { ValuesSection } from "@/components/sections/values";
import { Button } from "@/components/ui/button";

// Images
import powerSkinImg from "@assets/generated_images/power_skin_glowing_cellular_texture.png";
import hydraRoyalImg from "@assets/generated_images/hydra_royal_water_luxury.png";
import fillerImg from "@assets/generated_images/dermal_fillers_aesthetic_gel.png";
import peelImg from "@assets/generated_images/chemical_peel_acid_drop.png";
import silhouetteImg from "@assets/generated_images/silhouette_modeling_abstract_curves.png";

export default function Home() {
  const products = [
    "Cuidados com a Pele",
    "Enchimentos",
    "Mesoterapia",
    "Família Real Hidra",
    "Cascas Químicas",
    "Tópicos",
    "Dispositivos",
    "Estimuladores de Tecidos"
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <ValuesSection />
        
        <FeatureSection
          id="power-skin"
          title="Power Skin"
          subtitle="Pele Poderosa"
          description="Solução científica e de pesquisa inovadora para a luta por uma pele bonita e saudável. Descubra a verdadeira potência da sua pele através da nossa tecnologia avançada."
          image={powerSkinImg}
          imageAlt="Power Skin Technology"
        />

        <FeatureSection
          id="hydra-royal"
          title="Família Real Hidra"
          subtitle="Tratamento Luxuoso"
          description="Mergulhe com a Família Real Hidra. Um tratamento luxuoso com efeito de pele real, proporcionando hidratação profunda e revitalização imediata."
          image={hydraRoyalImg}
          imageAlt="Hydra Royal Treatment"
          reversed
          theme="dark"
        />

        <FeatureSection
          id="fillers"
          title="Enchimentos Ultra Lidocaine"
          subtitle="Qualidade e Segurança"
          description="A mais alta qualidade e segurança confirmada pelos certificados internacionais ISO 13485, ISO 9001 e Certificado Médico Europeu CE2195."
          image={fillerImg}
          imageAlt="Dives Med Fillers"
        />

        <FeatureSection
          id="peels"
          title="Peelings Químicos"
          subtitle="Uso Profissional"
          description="Uma ampla gama de concentrados de ácidos terapêuticos para problemas de pele avançados. Resultados visíveis e transformação profunda."
          image={peelImg}
          imageAlt="Chemical Peels"
          reversed
          theme="dark"
        />

        <FeatureSection
          id="silhouette"
          title="Modelagem de Silhuetas"
          subtitle="Rápido e Eficaz"
          description="Gama inovadora de produtos para lipólise e modelagem construída por biotecnólogos. A mais alta eficiência garantida pela condensação sinérgica das mais fortes substâncias lipolíticas."
          image={silhouetteImg}
          imageAlt="Silhouette Modeling"
        />

        {/* Product List Section */}
        <section id="products" className="py-24 bg-accent/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-16">Nossos Produtos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {products.map((product, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-8 aspect-square flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group border border-transparent hover:border-primary/20"
                  onClick={() => window.open("https://divesmed.com.br", "_blank")}
                >
                  <span className="font-serif text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                    {product}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 px-10 py-6 text-lg rounded-none tracking-widest"
                onClick={() => window.open("https://divesmed.com.br", "_blank")}
              >
                VER TODOS OS PRODUTOS
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif font-bold mb-6">DIVES MED</h2>
              <p className="text-white/70 max-w-md leading-relaxed">
                Uma nova dimensão de produtos médicos e cosméticos criados para lutar por uma pele saudável e bonita.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 tracking-wider text-sm uppercase text-white/90">Links Rápidos</h4>
              <ul className="space-y-4">
                <li><a href="#presentation" className="text-white/70 hover:text-white transition-colors">Apresentação</a></li>
                <li><a href="#products" className="text-white/70 hover:text-white transition-colors">Produtos</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 tracking-wider text-sm uppercase text-white/90">Contato</h4>
              <p className="text-white/70 mb-2">Fale Conosco</p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary mt-4 w-full justify-center"
                onClick={() => window.open("https://divesmed.com.br", "_blank")}
              >
                Visitar Loja Oficial
              </Button>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>&copy; 2023 DIVES MED. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>Termos de Uso</span>
              <span>Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
