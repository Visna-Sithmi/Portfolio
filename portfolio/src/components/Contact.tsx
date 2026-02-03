import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ihvisnasithmi@gmail.com",
      href: "mailto:ihvisnasithmi@gmail.com",
      external: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sri Lanka",
      // ✅ better than "#"
      href: "https://www.google.com/maps/search/?api=1&query=Sri+Lanka",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Visna-Sithmi",
      href: "https://github.com/Visna-Sithmi",
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/visna-sithmi",
      href: "https://www.linkedin.com/in/visna-sithmi/",
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary font-heading font-medium text-lg"
          >
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-4 sm:mb-6"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 px-2"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl
                  hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center
                  group-hover:bg-primary transition-colors duration-300 flex-shrink-0"
                >
                  <item.icon
                    className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground
                    transition-colors duration-300"
                  />
                </div>

                <div className="text-left min-w-0">
                  <p className="text-white/40 text-xs sm:text-sm">{item.label}</p>
                  <p className="text-white font-medium text-sm sm:text-base truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="mailto:ihvisnasithmi@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-6 sm:px-10 py-3 sm:py-5
              font-heading font-semibold text-sm sm:text-lg hover:shadow-lg hover:shadow-primary/30
              transition-all duration-300"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
