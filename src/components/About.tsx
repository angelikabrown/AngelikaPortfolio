import { Database, BarChart3, Code2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Maintain current data pipelines and build new ones to ensure data is clean, reliable, and accessible",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Turn your unruly data into actionable insights and compelling visualizations",
    },
    {
      icon: Code2,
      title: "Collaboration",
      description: "Finding solutions unique to your business needs, working closely with stakeholders to ensure data-driven decision making",
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
              Turning complex data into clear, actionable insight.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I’m a data analyst and data engineer focused on bringing clarity to complex, 
              messy data so teams can make better decisions, save time, and improve how their 
              organizations operate day to day. My path into data has been shaped by curiosity, 
              persistence, and a strong interest in understanding how information is actually 
              used in real-world settings.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy working on problems where the solution isn’t obvious at the start — 
              taking time to understand context, ask the right questions, and build thoughtful, 
              practical solutions. Whether I’m cleaning and transforming data, designing a 
              database schema, or creating analytics that meet stakeholders where they are, 
              I bring intention, adaptability, and a continuous learning mindset to every project.
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
