import { Database, BarChart3, Code2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building efficient ETL pipelines and data warehouses",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Extracting insights and creating impactful visualizations",
    },
    {
      icon: Code2,
      title: "Problem Solving",
      description: "Writing clean, efficient code to solve complex problems",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A curious mind with a passion for data and technology
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm an entry-level data professional with a strong foundation in data analysis 
                and engineering. My journey into data started with a fascination for uncovering 
                patterns and stories hidden within numbers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on challenges that require both analytical thinking and creative 
                problem-solving. Whether it's designing a database schema or crafting an 
                insightful dashboard, I bring enthusiasm and attention to detail to every project.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-6 rounded-xl flex gap-4 items-start hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
