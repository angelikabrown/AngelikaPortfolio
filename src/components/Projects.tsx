import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    

    {
        title: "2638 Management Group: Case Study",
        description:
          "Worked with a small business preparing to expand into the B2B space by organizing outreach data and building a structured tracking system.",
        tags: ["Excel", "Glide", "Collaboration", "Research"],
        color: "from-primary/20 to-secondary/20",
        details: "/projects/2638-case-study",
    },

    {
      title: "Census Data EDA & Dashboard",
      description:
        "Conducted comprehensive exploratory data analysis on census data, creating an interactive dashboard to visualize demographic trends and insights.",
      tags: ["Python", "Pandas", "Data Cleaning", "EDA", "Tableau", "Visualization"],
      color: "from-secondary/20 to-primary/20",
      github: "https://github.com/angelikabrown/CensusDataEDA",
      details: "/projects/census-eda",
    },

    {
      title: "MuseDash: Listening Analytics",
      description:
        "With a team of three, I built an interactive, AI-infused Streamlit dashboard analyzing a million row listening dataset, revealing key trends and actionable insights for a fictional music streaming company.",
      tags: ["Streamlit", "Python", "Altair", "Plotly", "Router AI", "Amazon S3", "EDA", "Pyspark", "Pandas"],
      color: "from-primary/20 to-secondary/20",
      github: "https://github.com/ZCWDataSixZero/MuseDash",
      details: "/projects/musedash",
    }


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
                  {/* View Details (Primary) */}
                  <Link to={project.details} className="flex-1">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>

                  {/* Code Button (Only if GitHub exists) */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
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

