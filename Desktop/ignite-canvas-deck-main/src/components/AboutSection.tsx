import { motion, useScroll, useTransform } from "framer-motion";
import { User, Briefcase, GraduationCap, MapPin, Certificate, Coffee, Rocket, Heart } from "@phosphor-icons/react";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend", color: "from-cyan-400 to-primary" },
  { name: "TypeScript / JavaScript", level: 95, category: "Languages", color: "from-cyan-400 to-primary" },
  { name: "Node.js / Express", level: 88, category: "Backend", color: "from-cyan-400 to-primary" },
  { name: "Python", level: 85, category: "Scripting / Backend", color: "from-cyan-400 to-primary" },
  { name: "Supabase / MongoDB / MySQL", level: 90, category: "Databases", color: "from-cyan-400 to-primary" },
];

const experience = [
  {
    period: "2025 - 2026",
    role: "Freelance Developer",
    company: "Self-Employed",
    description: "Building custom web solutions and automation tools for diverse clients.",
  },
  {
    period: "2023 - 2025",
    role: "1st Line Tech Support",
    company: "Computershare",
    description: "Provided in-house technical support, troubleshooting hardware/software issues for employees.",
  },
  {
    period: "2020 - 2023",
    role: "2nd Line Tech Support",
    company: "HGS",
    description: "Advanced troubleshooting for broadband and telecommunications services.",
  },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            The <span className="text-primary">Story</span> Behind The Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-6 border border-border bg-card/50 rounded-3xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-border pb-4">
                <span className="font-semibold text-sm text-foreground">Profile Details</span>
              </div>
              <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-primary">{"{"}</span>
                  {"\n  "}
                  <span className="text-2xl font-bold text-primary">"name"</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-2xl font-bold text-cyan-400"> "Kieran Archi98"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}
                  <span className="text-primary">"title"</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-cyan-400"> "Full-Stack Developer"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}
                  <span className="text-primary">"location"</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-cyan-400"> "Galashiels, Scotland"</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}
                  <span className="text-primary">"focus"</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-cyan-400"> ["React", "Python", "Networking"]</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}
                  <span className="text-primary">"status"</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-cyan-400"> "Open for Opportunities"</span>
                  {"\n"}
                  <span className="text-primary">{"}"}</span>
                </code>
              </pre>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey there! I'm Kieran, a passionate full-stack engineer with over 7 years of
              experience crafting digital products. I specialize in building
              <span className="text-primary"> scalable web applications</span>,
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"> immersive 3D experiences</span>, and
              decentralized applications that push the boundaries of what's possible on the web.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects,
              exploring the latest in AI/ML, or experimenting with creative coding and
              generative art. I believe in writing clean, maintainable code and creating
              user experiences that truly delight.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: User, label: "4 Years Dev" },
                { icon: Briefcase, label: "35+ Projects" },
                { icon: GraduationCap, label: "CS @ Stirling" },
                { icon: MapPin, label: "Galashiels" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 border border-border bg-card/50 hover:border-border/80 transition-colors rounded-xl"
                >
                  <item.icon weight="duotone" className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-lg font-semibold text-foreground">
              Technical Expertise
            </h3>

            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden w-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    style={{ boxShadow: "var(--shadow-neon)" }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Experience Timeline */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Career History
              </h3>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{exp.period}</span>
                    <h4 className="font-semibold mt-1">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech marquee */}
            <div className="mt-8 overflow-hidden border-y border-border py-4">
              <motion.div
                animate={{ x: "-50%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 whitespace-nowrap"
              >
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8">
                    {["REACT", "TYPESCRIPT", "NODE", "WEB3", "THREEJS", "PYTHON", "KUBERNETES", "GRAPHQL", "AWS", "DOCKER"].map((tech) => (
                      <span key={tech} className="font-semibold text-muted-foreground text-sm tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
