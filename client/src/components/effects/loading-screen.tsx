import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  images: string[];
  onComplete: () => void;
  minDuration?: number;
}

export function LoadingScreen({ images, onComplete, minDuration = 2000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;
    const startTime = Date.now();

    const updateProgress = () => {
      loadedCount++;
      const imageProgress = (loadedCount / totalImages) * 100;
      setProgress(imageProgress);

      if (loadedCount === totalImages) {
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, minDuration - elapsed);
        
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 800);
        }, remainingTime);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = src;
    });

    if (totalImages === 0) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, minDuration);
    }
  }, [images, onComplete, minDuration]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-pulse-glow" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold">
                <span className="gradient-text">DIVES</span>
                <span className="text-white ml-2">MED</span>
              </h1>
            </motion.div>

            {/* DNA Helix Animation */}
            <motion.div 
              className="relative w-20 h-32 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 w-3 h-3 rounded-full"
                  style={{
                    top: `${i * 20}%`,
                    backgroundColor: i % 2 === 0 ? "hsl(185, 80%, 50%)" : "hsl(270, 60%, 50%)",
                    boxShadow: `0 0 20px ${i % 2 === 0 ? "hsl(185, 80%, 50%)" : "hsl(270, 60%, 50%)"}`,
                  }}
                  animate={{
                    x: ["-20px", "20px", "-20px"],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`mirror-${i}`}
                  className="absolute left-1/2 w-3 h-3 rounded-full"
                  style={{
                    top: `${i * 20}%`,
                    backgroundColor: i % 2 === 0 ? "hsl(270, 60%, 50%)" : "hsl(185, 80%, 50%)",
                    boxShadow: `0 0 20px ${i % 2 === 0 ? "hsl(270, 60%, 50%)" : "hsl(185, 80%, 50%)"}`,
                  }}
                  animate={{
                    x: ["20px", "-20px", "20px"],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Progress bar */}
            <motion.div 
              className="w-64 md:w-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              <div className="flex justify-between mt-4 text-sm text-white/50">
                <span>Carregando experiência...</span>
                <span className="font-mono">{Math.round(progress)}%</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-8 text-white/40 text-sm tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Nova Dimensão da Beleza
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
