import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeatureSection } from "@/components/sections/feature-section";
import { ValuesSection } from "@/components/sections/values";
import { ProductsGrid } from "@/components/sections/products-grid";
import { LoadingScreen } from "@/components/effects/loading-screen";

import powerSkinImg from "@assets/generated_images/power_skin_glowing_cellular_texture.png";
import hydraRoyalImg from "@assets/generated_images/hydra_royal_water_luxury.png";
import fillerImg from "@assets/generated_images/dermal_fillers_aesthetic_gel.png";
import peelImg from "@assets/generated_images/chemical_peel_acid_drop.png";
import silhouetteImg from "@assets/generated_images/silhouette_modeling_abstract_curves.png";
import heroBg from "@assets/generated_images/hero_background_luxury_medical_aesthetic.png";

const allImages = [
  heroBg,
  powerSkinImg,
  hydraRoyalImg,
  fillerImg,
  peelImg,
  silhouetteImg,
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingScreen 
        images={allImages} 
        onComplete={() => setIsLoaded(true)}
        minDuration={2500}
      />
      
      {isLoaded && (
        <div className="min-h-screen bg-background font-sans text-foreground animate-in fade-in duration-1000">
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
              accentColor="cyan"
            />

            <FeatureSection
              id="hydra-royal"
              title="Família Real Hidra"
              subtitle="Tratamento Luxuoso"
              description="Mergulhe com a Família Real Hidra. Um tratamento luxuoso com efeito de pele real, proporcionando hidratação profunda e revitalização imediata."
              image={hydraRoyalImg}
              imageAlt="Hydra Royal Treatment"
              reversed
              accentColor="gold"
            />

            <FeatureSection
              id="fillers"
              title="Enchimentos Ultra"
              subtitle="Qualidade e Segurança"
              description="A mais alta qualidade e segurança confirmada pelos certificados internacionais ISO 13485, ISO 9001 e Certificado Médico Europeu CE2195."
              image={fillerImg}
              imageAlt="Dives Med Fillers"
              accentColor="purple"
            />
            
            <ProductsGrid />

            <FeatureSection
              id="peels"
              title="Peelings Químicos"
              subtitle="Uso Profissional"
              description="Uma ampla gama de concentrados de ácidos terapêuticos para problemas de pele avançados. Resultados visíveis e transformação profunda."
              image={peelImg}
              imageAlt="Chemical Peels"
              reversed
              accentColor="cyan"
            />

            <FeatureSection
              id="silhouette"
              title="Modelagem de Silhuetas"
              subtitle="Rápido e Eficaz"
              description="Gama inovadora de produtos para lipólise e modelagem construída por biotecnólogos. A mais alta eficiência garantida pela condensação sinérgica das mais fortes substâncias lipolíticas."
              image={silhouetteImg}
              imageAlt="Silhouette Modeling"
              accentColor="gold"
            />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
