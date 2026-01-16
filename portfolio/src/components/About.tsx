import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Code2, Brain, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Database, label: "Data Engineering", desc: "Building robust data pipelines" },
    { icon: Brain, label: "Machine Learning", desc: "Predictive modeling & AI" },
    { icon: Code2, label: "Software Dev", desc: "Full-stack applications" },
    { icon: TrendingUp, label: "Analytics", desc: "Data-driven insights" },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate <span className="text-primary font-semibold">Data Science undergraduate</span> with 
                a deep curiosity for uncovering patterns in data and building intelligent systems. 
                My journey bridges the worlds of data science and software engineering.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I thrive on turning complex datasets into actionable insights using 
                machine learning algorithms, statistical analysis, and modern visualization techniques. 
                Beyond analytics, I love crafting clean, efficient code that brings data solutions to life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not diving into data, you'll find me exploring new technologies, 
                contributing to open-source projects, and continuously learning in this 
                ever-evolving field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 sm:p-6 rounded-lg hover-lift group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
