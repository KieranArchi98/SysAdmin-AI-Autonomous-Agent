import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ArrowDown, Code, Lightning, CaretDown } from "@phosphor-icons/react";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background grid with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute inset-0 grid-bg opacity-30"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="container relative z-10 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Terminal header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-border bg-card/50 backdrop-blur-sm rounded-full"
          >
            <span className="text-sm font-medium text-muted-foreground">Kieran Archi98 / Portfolio</span>
          </motion.div>

          {/* Main heading with glitch */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground glitch" data-text="KIERAN ARCHI98">
              KIERAN ARCHI98
            </span>
            <br />
            <span className="text-primary text-neon">FULL-STACK ENGINEER</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 font-light leading-relaxed"
          >
            I craft <span className="text-cyan-400">high-performance</span> web applications
            and immersive <span className="text-primary">digital experiences</span> with
            modern JavaScript, WebGL, and decentralized technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-card text-foreground font-semibold rounded-full hover:bg-muted transition-all"
            >
              Let's Collaborate
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl"
          >
            {[
              { value: "4+", label: "Years Experience" },
              { value: "35+", label: "Projects Shipped" },
              { value: "15+", label: "Happy Clients" },
              { value: "4000+", label: "Hours Coding" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary text-neon">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}

      </motion.div>
    </section>
  );
};

export default HeroSection;
