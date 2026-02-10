const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Databases",
      skills: ["Python", "SQL", "Java", "PostgreSQL", "MySQL", "SQL Server", "Azure SQL Database"],
    },
    {
      title: "Data Tools",
      skills: ["Pandas", "NumPy", "Apache Spark"],
    },
    {
      title: "Visualization",
      skills: ["Power BI", "Matplotlib", "Plotly", "Seaborn", "Streamlit", "Excel"],
    },
    {
      title: "Collaboration & Version Control",
      skills: ["Agile", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Tools and technologies I work with
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
