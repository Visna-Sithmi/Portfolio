import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Code2, BarChart3, Workflow, Smartphone } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Database, label: "Data Engineering", desc: "ETL & data pipelines" },
    { icon: BarChart3, label: "Data Analytics", desc: "Power BI & insights" },
    { icon: Workflow, label: "Machine Learning", desc: "Fundamentals & evaluation" },
    { icon: Code2, label: "Software Development", desc: "MERN & Spring Boot" },
    { icon: Smartphone, label: "Mobile Applications", desc: "Android & mobile apps" },
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
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                I’m a{" "}
                <span className="text-primary font-semibold">
                  Data Science undergraduate
                </span>{" "}
                specializing in{" "}
                <span className="text-primary font-semibold">
                  Data Engineering and Data Analytics
                </span>
                , focused on converting raw data into structured, actionable
                insights.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                I use{" "}
                <span className="text-primary font-semibold">
                  SQL, Python, and Power BI
                </span>{" "}
                to build reliable data pipelines, create interactive dashboards,
                and support data-driven decision-making. While I have a solid
                understanding of{" "}
                <span className="text-primary font-semibold">
                  Machine Learning fundamentals
                </span>
                , my primary interest lies in scalable data solutions and
                analytics.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Along side data work, I’m experienced in{" "}
                <span className="text-primary font-semibold">
                  software and mobile application development
                </span>{" "}
                using{" "}
                <span className="text-primary font-semibold">
                  MERN stack, Spring Boot, HTML, CSS, and mobile technologies
                </span>
                , allowing me to contribute across end-to-end systems.
              </p>
            </motion.div>

            {/* RIGHT CARDS */}
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
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {item.desc}
                  </p>
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
