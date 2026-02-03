import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import myImg from "../assets/myimg.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    // If you have a sticky navbar, set this to -70 or -80
    const yOffset = -70;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-heading text-lg md:text-xl font-medium"
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mt-4 mb-4 md:mb-6"
            >
              Visna Sithmi<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-2xl text-white/70 font-body max-w-2xl leading-relaxed"
            >
              Data Science Undergraduate passionate about transforming raw data
              into meaningful insights and building intelligent software
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 md:mt-10"
            >
              {/* ✅ SCROLL TO CONTACT */}
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 font-heading font-semibold text-sm sm:text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Get in Touch
              </button>

              {/* ✅ SCROLL TO PROJECTS */}
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-heading font-semibold text-sm sm:text-lg hover:bg-white hover:text-dark transition-all duration-300"
              >
                View Projects
              </button>

              {/* ✅ DOWNLOAD CV */}
              <a
                href="/VisnaSithmi_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 font-heading font-semibold text-sm sm:text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-6 mt-12"
            >
              <a
                href="https://github.com/Visna-Sithmi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/visna-sithmi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ihvisnasithmi@gmail.com"
                className="text-white/60 hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end lg:pr-8"
          >
            <motion.div
              className="absolute w-[460px] h-[460px] rounded-full bg-primary/30 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute w-[480px] h-[480px] rounded-full border border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10"
            >
              <img
                src={myImg}
                alt="Visna Sithmi"
                className="
                  w-72 h-72
                  sm:w-80 sm:h-80
                  md:w-96 md:h-96
                  lg:w-[420px] lg:h-[420px]
                  object-cover
                  rounded-full
                  border-4 border-primary
                  shadow-2xl
                  shadow-primary/50
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="text-white/40 hover:text-primary transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
