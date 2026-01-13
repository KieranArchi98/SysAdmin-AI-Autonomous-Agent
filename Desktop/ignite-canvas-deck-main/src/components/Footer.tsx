import { motion } from "framer-motion";
import { Terminal, Heart, ArrowUp, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GithubLogo, href: "https://github.com/kieranarchi98", label: "GitHub" },
  { icon: LinkedinLogo, href: "https://linkedin.com/in/kieranarchi98", label: "LinkedIn" },
  { icon: TwitterLogo, href: "https://twitter.com/kieranarchi98", label: "Twitter" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">

      <div className="container px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                Kieran Archi98
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full-stack engineer crafting exceptional digital experiences with
              modern web technologies, WebGL, and blockchain.
            </p>
            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon weight="fill" className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">NAVIGATION</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {">"} {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">GET IN TOUCH</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:flashkieran@outlook.com" className="hover:text-primary transition-colors">
                  flashkieran@outlook.com
                </a>
              </li>
              <li>Galashiels, Scotland</li>
              <li>GMT (UTC+0)</li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                  </span>
                  <span className="text-secondary">Available for work</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Kieran Archi98</span>
            </div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 border border-border hover:border-border/80 text-muted-foreground hover:text-primary transition-colors text-sm rounded-full"
            >
              <ArrowUp weight="bold" className="w-4 h-4" />
              Back to top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
