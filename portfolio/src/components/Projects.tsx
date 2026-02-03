import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  BarChart3,
  Bot,
  LineChart,
  Database,
  Smartphone,
} from "lucide-react";

const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "HopeFlow - Blood Donation Platform",
      description:
        "Full-stack Blood Donation Website for donors and administrators. Features user registration, donation tracking, blood bank management, and comprehensive admin dashboard. Group project.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      icon: Database,
      github: "https://github.com/Visna-Sithmi/SLIIT-IWT-Project",
      live: "",
    },
    {
      title: "CeylonBrew - Tea Plantation Management",
      description:
        "Enterprise full-stack application automating tea plantation workflows. Features role-based access for farmers, suppliers, factory staff, and delivery teams with real-time coordination. Group project.",
      tech: ["Next.js", "Spring Boot", "PostgreSQL", "Docker"],
      icon: Bot,
      github: "https://github.com/Visna-Sithmi/CeylonBrew",
      live: "",
    },
    {
      title: "ChocoNest - Chocolate Shopping App",
      description:
        "Android mobile application delivering an elegant chocolate shopping experience. Features curated gift items, product catalog, payment integration, and polished checkout flow. Solo project.",
      tech: ["Kotlin", "Android", "XML", "Material Design"],
      icon: Smartphone,
      github: "https://github.com/Visna-Sithmi/ChocoNest",
      live: "",
    },
    {
      title: "Vitalize - Wellness & Habit Tracker",
      description:
        "Android app promoting healthy habits with accelerometer-based step tracking, BMI calculator, mood journaling, water reminders, and home screen widget. Solo project.",
      tech: ["Kotlin", "Android Sensors", "Material Design", "AlarmManager"],
      icon: LineChart,
      github: "https://github.com/Visna-Sithmi/Vitalize",
      live: "",
    },
    {
      title: "Sales Analysis Dashboard",
      description:
        "Power BI dashboard providing insights into revenue, sales trends, customer performance, and market analysis. Features interactive slicers and KPI visualizations. Learning project.",
      tech: ["SQL", "Power BI", "DAX", "Excel"],
      icon: BarChart3,
      github: "https://github.com/Visna-Sithmi/Sales-Analysing-Project",
      live: "",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const hasLive = Boolean(project.live && project.live.trim().length > 0);

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/50
                    hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center
                        group-hover:bg-primary transition-colors duration-300"
                    >
                      <Icon
                        className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground
                          transition-colors duration-300"
                      />
                    </div>

                    <div className="flex gap-2 sm:gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>

                      {hasLive && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors p-1"
                          aria-label="View live project"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3
                    className="font-heading font-semibold text-lg sm:text-xl text-foreground mb-2 sm:mb-3
                      group-hover:text-primary transition-colors duration-300"
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
