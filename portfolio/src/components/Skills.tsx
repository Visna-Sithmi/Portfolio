import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "TypeScript", "Java"],
    },
    {
      title: "Data Science & ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Keras"],
    },
    {
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "D3.js"],
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "FastAPI", "Django", "HTML/CSS", "REST APIs"],
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Git", "Docker", "AWS"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
              Skills & Expertise
            </h2>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6"
              >
                <h3 className="font-heading font-semibold text-primary text-base sm:text-lg mb-3 sm:mb-4">
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
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 text-white rounded-full text-xs sm:text-sm font-medium 
                        hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
