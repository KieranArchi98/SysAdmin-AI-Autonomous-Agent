import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { List, X, Terminal } from "@phosphor-icons/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);

    // Update active section based on scroll position
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <motion.div
          className={`flex items-center justify-between px-6 py-3 transition-all duration-300 ${isScrolled
            ? "backdrop-blur-md bg-background/90 border border-border shadow-lg"
            : "backdrop-blur-sm bg-background/50 border border-transparent"
            }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-xl"
          >
            <Terminal weight="fill" className="w-6 h-6 text-primary" />
            <span className="font-mono text-xl tracking-tight">
              kieran<span className="text-primary">.</span>archi98
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ y: -2 }}
                className={`relative text-sm font-medium transition-colors ${activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-all"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border border-border hover:border-primary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X weight="bold" className="w-5 h-5" />
            ) : (
              <List weight="bold" className="w-5 h-5" />
            )}
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden backdrop-blur-md bg-background/95 border border-t-0 border-border"
        >
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block text-lg py-2 transition-colors ${activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {">"} {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full mt-4"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
