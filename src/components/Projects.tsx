import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description:
        "Built an interactive Tableau dashboard analyzing 2 years of sales data, revealing key trends and actionable insights for business stakeholders.",
      tags: ["Tableau", "SQL", "Data Analysis"],
      color: "from-primary/20 to-secondary/20",
    },
    {
      title: "ETL Pipeline for E-commerce",
      description:
        "Designed and implemented an automated data pipeline using Python and Airflow to process daily transaction data from multiple sources.",
      tags: ["Python", "Airflow", "PostgreSQL"],
      color: "from-secondary/20 to-primary/20",
    },
    {
      title: "Customer Segmentation Model",
      description:
        "Applied clustering algorithms to segment customers based on purchasing behavior, enabling targeted marketing strategies.",
      tags: ["Python", "Scikit-learn", "Pandas"],
      color: "from-primary/20 to-secondary/20",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A selection of my recent data work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-display font-bold text-2xl gradient-text">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
