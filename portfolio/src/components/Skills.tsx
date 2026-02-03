import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "TypeScript", "Java", "Kotlin", "C++", "C", "php"],
    },
    {
      title: "Data Science & ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Keras"],
    },
    {
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"],
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Spring Boot", "HTML/CSS", "REST APIs", "Node.js"],
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Git", "Docker", "AWS", "Android Studio", "VS Code", "InteliJ IDEA"],
    },
  ];

  const certifications = [
    {
      title: "AI/ML Engineer – Stage 2",
      issuer: "SLIIT",
      issued: "Jan 2026",
      credentialId: "bxssqdet1j",
      url: "https://code.sliit.org/certificates/bxssqdet1j",
    },
    {
      title: "AI/ML Engineer – Stage 1",
      issuer: "SLIIT",
      issued: "Dec 2025",
      credentialId: "inwkklley7",
      url: "https://code.sliit.org/certificates/inwkklley7",
    },
    {
      title: "Python Programming",
      issuer: "University of Moratuwa (CODL)",
      issued: "Dec 2025",
      credentialId: "SfTAAmki9l",
      url: "https://open.uom.lk/verify",
    },
    {
      title: "Python Programming for Beginers",
      issuer: "University of Moratuwa (CODL)",
      issued: "Feb 2025",
      credentialId: "BRQTNvH4Tl",
      url: "https://open.uom.lk/verify",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-dark relative overflow-hidden" ref={ref}>
      {/* Yellow ambient glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto space-y-20"
        >
          {/* ================= SKILLS ================= */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white relative">
                Skills & Expertise
                <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-primary rounded-full" />
              </h2>
              <div className="flex-1 h-px bg-white/20" />
            </motion.div>

            <div className="space-y-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  whileHover={{ boxShadow: "0 0 40px rgba(255, 204, 0, 0.15)" }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6"
                >
                  <h3 className="font-heading font-semibold text-primary text-base sm:text-lg mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                          boxShadow: "0 0 20px rgba(255, 204, 0, 0.5)",
                        }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 text-white rounded-full text-xs sm:text-sm font-medium 
                          hover:bg-primary hover:text-black transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= CERTIFICATIONS ================= */}
          <div id="certifications">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white relative">
                Certifications
                <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-primary rounded-full" />
              </h2>
              <div className="flex-1 h-px bg-white/20" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 0 50px rgba(255, 204, 0, 0.25)",
                  }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 block"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ rotate: [0, 6, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-primary mt-1"
                    >
                      <Award size={24} />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-heading font-semibold text-white text-base sm:text-lg">
                          {cert.title}
                        </h3>
                        <ExternalLink className="text-white/60 shrink-0" size={18} />
                      </div>

                      <p className="text-white/70 text-sm mt-1">{cert.issuer}</p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs sm:text-sm text-white/60">
                        <span>Issued: {cert.issued}</span>
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
