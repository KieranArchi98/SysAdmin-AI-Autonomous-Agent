import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo, Eye, Cube, GameController, Wallet, Robot, Globe, ChartLine, Database } from "@phosphor-icons/react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "NeuralCanvas AI",
    description: "AI-powered creative platform enabling real-time collaborative content generation with neural network visualization. Features include text-to-image generation, style transfer, and intelligent content suggestions powered by GPT-4 and DALL-E.",
    tags: ["React", "Python", "TensorFlow", "WebGL", "OpenAI"],
    icon: Robot,
    color: "cyan",
    link: "https://neuralcanvas.ai",
    github: "https://github.com/kieranarchi98/neuralcanvas",
    featured: true,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "DeFiHub Protocol",
    description: "Comprehensive Web3 portfolio tracker and DeFi aggregator with cross-chain analytics, yield optimization algorithms, and automated rebalancing strategies. Supports 15+ blockchains and 200+ protocols.",
    tags: ["Next.js", "Solidity", "Ethers.js", "GraphQL", "The Graph"],
    icon: Wallet,
    color: "primary",
    link: "https://defihub.io",
    github: "https://github.com/kieranarchi98/defihub",
    featured: true,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "MetaWorld Engine",
    description: "Browser-based 3D metaverse builder featuring real-time multiplayer collaboration, custom physics engine, procedural terrain generation, and seamless asset importing. Built entirely with WebGL and WebRTC.",
    tags: ["Three.js", "WebRTC", "Rust", "WASM", "Socket.io"],
    icon: Cube,
    color: "secondary",
    link: "https://metaworld.dev",
    github: "https://github.com/kieranarchi98/metaworld",
    featured: true,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "ChainQuest",
    description: "Play-to-earn gaming platform featuring on-chain game logic, dynamic NFT character progression, governance token integration, and decentralized tournament systems with provably fair outcomes.",
    tags: ["Unity", "Solana", "Rust", "React", "Anchor"],
    icon: GameController,
    color: "cyan",
    link: "https://chainquest.game",
    github: "https://github.com/kieranarchi98/chainquest",
    featured: false,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "DataPulse Analytics",
    description: "Enterprise-grade real-time analytics dashboard with customizable visualizations, ML-powered anomaly detection, and automated reporting. Processes millions of events per second.",
    tags: ["React", "D3.js", "ClickHouse", "Kafka", "Python"],
    icon: ChartLine,
    color: "primary",
    link: "https://datapulse.io",
    github: "https://github.com/kieranarchi98/datapulse",
    featured: false,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "CloudForge",
    description: "Developer-first infrastructure automation platform with GitOps workflows, multi-cloud deployment pipelines, and intelligent cost optimization. Used by 500+ engineering teams worldwide.",
    tags: ["Go", "Terraform", "Kubernetes", "React", "PostgreSQL"],
    icon: Database,
    color: "secondary",
    link: "https://cloudforge.dev",
    github: "https://github.com/kieranarchi98/cloudforge",
    featured: false,
    image: "/placeholder.svg",
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          border: "border-primary/30",
          bg: "bg-primary/10",
          text: "text-primary",
          hoverBg: "group-hover:bg-primary/20",
        };
      case "secondary":
        return {
          border: "border-purple-500/30",
          bg: "bg-purple-500/10",
          text: "text-purple-500",
          hoverBg: "group-hover:bg-purple-500/20",
        };
      case "cyan":
        return {
          border: "border-cyan-400/30",
          bg: "bg-cyan-400/10",
          text: "text-cyan-400",
          hoverBg: "group-hover:bg-cyan-400/20",
        };
      default:
        return {
          border: "border-primary/30",
          bg: "bg-primary/10",
          text: "text-primary",
          hoverBg: "group-hover:bg-primary/20",
        };
    }
  };

  return (
    <section id="projects" ref={containerRef} className="py-32 relative overflow-hidden">

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A curated selection of my recent work. Each project represents unique challenges
            and innovative solutions spanning web development, blockchain, and creative tech.
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="space-y-8 mb-12">
          {projects.filter(p => p.featured).map((project, i) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15 }}
                className="group relative grid md:grid-cols-2 gap-8 border border-border bg-card/50 backdrop-blur-sm hover:border-border/80 transition-all duration-500 p-8 rounded-3xl"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 rounded-xl border ${colors.border} ${colors.bg} ${colors.hoverBg} transition-colors`}
                    >
                      <project.icon weight="duotone" className={`w-8 h-8 ${colors.text}`} />
                    </motion.div>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 border border-border hover:border-border/80 hover:text-primary transition-colors rounded-full"
                        aria-label="View source code"
                      >
                        <GithubLogo weight="fill" className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 border border-border hover:border-border/80 hover:text-primary transition-colors rounded-full"
                        aria-label="View live demo"
                      >
                        <Globe weight="fill" className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium border border-border bg-muted/50 hover:border-border/80 transition-colors rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                  >
                    <span>Explore Project</span>
                    <ArrowUpRight
                      weight="bold"
                      className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
                  </motion.a>
                </div>

                {/* Preview area */}
                <div className="relative aspect-video md:aspect-auto bg-muted/30 border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <project.icon weight="thin" className={`w-16 h-16 mx-auto ${colors.text} opacity-50`} />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Project Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Other Projects - Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative border border-border bg-card/50 backdrop-blur-sm hover:border-border/80 transition-all duration-500 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </div>

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-lg border ${colors.border} ${colors.bg}`}
                    >
                      <project.icon weight="duotone" className={`w-6 h-6 ${colors.text}`} />
                    </motion.div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <GithubLogo weight="fill" className="w-4 h-4" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Globe weight="fill" className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium text-muted-foreground bg-muted/50 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 font-mono text-xs text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/kieranarchi98"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-card text-foreground font-semibold rounded-full hover:bg-muted transition-all"
          >
            <GithubLogo weight="fill" className="w-5 h-5" />
            View All On GitHub
            <ArrowUpRight weight="bold" className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
