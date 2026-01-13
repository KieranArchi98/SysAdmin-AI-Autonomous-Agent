import { motion, useScroll, useTransform } from "framer-motion";
import { Envelope, GithubLogo, LinkedinLogo, TwitterLogo, ArrowRight, PaperPlaneTilt, MapPin, Calendar, Coffee } from "@phosphor-icons/react";
import { useState, useRef } from "react";

const socials = [
  { icon: GithubLogo, label: "GitHub", href: "https://github.com/kieranarchi98", username: "@kieranarchi98" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "https://linkedin.com/in/kieranarchi98", username: "/in/kieranarchi98" },
  { icon: TwitterLogo, label: "X", href: "https://x.com/kieranarchi98", username: "@kieranarchi98" },
  { icon: Envelope, label: "Email", href: "mailto:flashkieran@outlook.com", username: "flashkieran@outlook.com" },
];

const services = [
  { title: "Full-Stack Development", description: "End-to-end web applications with modern tech stacks" },
  { title: "Networking", description: "Network infrastructure, security configuration, and optimization" },
  { title: "Systems Administration", description: "Linux/Windows server management, deployment, and maintenance" },
  { title: "Technical Support", description: "Hardware/Software troubleshooting and user support specialist" },
];

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" ref={containerRef} className="py-32 relative overflow-hidden">

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's <span className="text-primary">Build</span> Something Amazing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have an exciting project in mind, need technical expertise, or just want to
            connect? I'm always open to discussing new opportunities and creative collaborations.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-4 mb-16"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-border bg-card/30 hover:border-border/80 transition-colors text-center rounded-2xl"
            >
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-border bg-card/50 rounded-3xl backdrop-blur-sm"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold">Send Message</h3>
              <p className="text-sm text-muted-foreground mt-1">I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-muted/50 border px-4 py-3 text-sm focus:outline-none transition-colors rounded-xl ${focused === "name" ? "border-primary" : "border-border"
                    }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-muted/50 border px-4 py-3 text-sm focus:outline-none transition-colors rounded-xl ${focused === "email" ? "border-primary" : "border-border"
                    }`}
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-muted/50 border px-4 py-3 text-sm focus:outline-none transition-colors resize-none rounded-xl ${focused === "message" ? "border-primary" : "border-border"
                    }`}
                  placeholder="Hi Kieran, I'd love to discuss a project with you..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all"
              >
                <PaperPlaneTilt weight="fill" className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-8">
              Connect With Me
            </h3>

            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 p-4 border border-border hover:border-primary/50 bg-card/30 transition-all rounded-2xl"
              >
                <div className="p-3 border border-border bg-muted group-hover:bg-primary/10 rounded-xl transition-colors">
                  <social.icon weight="duotone" className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {social.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {social.username}
                  </div>
                </div>
                <ArrowRight
                  weight="bold"
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                />
              </motion.a>
            ))}

            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 border border-border bg-card/30 rounded-2xl"
              >
                <MapPin weight="duotone" className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="font-semibold">Galashiels, Scotland</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-4 border border-border bg-card/30 rounded-2xl"
              >
                <Calendar weight="duotone" className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Timezone</p>
                <p className="font-semibold">GMT (UTC+0)</p>
              </motion.div>
            </div>

            {/* Status */}
            <div className="mt-6 p-6 border border-border bg-card/30 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="text-sm font-medium text-secondary">Open for opportunities</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Currently accepting freelance projects and full-time opportunities.
                I typically respond within 24 hours.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Coffee weight="duotone" className="w-4 h-4" />
                <span>Let's grab a virtual coffee!</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
