import ProjectLayout from "@/components/ProjectLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const MuseDash = () => {
    return (
      <div className="min-h-screen bg-background">
        <main>
        <ProjectLayout
            title="MuseDash: Listening Analytics"
            subtitle="AI-infused dashboard..."
            github="https://github.com/ZCWDataSixZero/MuseDash"
          >     
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
          MuseDash is an interactive analytics dashboard built with a team of three to
          analyze a one-million-row music streaming dataset. The goal was to uncover
          behavioral patterns, listening trends, and potential revenue opportunities
          for a fictional streaming company.
            </p>
          </section>

      {/* The Problem */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p className="text-muted-foreground leading-relaxed">
          Large listening datasets often contain valuable insight, but raw records
          alone do not tell a clear story. The challenge was transforming complex,
          high-volume data into actionable visual insights that could guide strategic
          decisions around engagement, segmentation, and user retention.
        </p>
      </section>

      {/* My Role */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Role</h2>
        <p className="text-muted-foreground leading-relaxed">
          I focused on exploratory data analysis, data cleaning, and dashboard
          implementation. I worked extensively with Pandas and PySpark to process
          large-scale listening data, structured transformation workflows, and built
          interactive visualizations using Altair and Plotly within Streamlit.
        </p>
      </section>

      {/* Data & Architecture */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Data & Architecture</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>One million listening records</li>
          <li>Data stored and structured in Amazon S3</li>
          <li>PySpark used for scalable data processing</li>
          <li>Pandas for transformation and analysis</li>
          <li>Streamlit frontend for interactive dashboard delivery</li>
          <li>Altair & Plotly for visual storytelling</li>
        </ul>
      </section>

      {/* Key Insights */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Weekend listening behavior showed a measurable spike in engagement.</li>
          <li>Genre-based clustering revealed distinct user segmentation patterns.</li>
          <li>High-retention users correlated strongly with curated playlist usage.</li>
          <li>Time-of-day listening trends suggested targeted marketing opportunities.</li>
        </ul>
      </section>

      {/* Impact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Impact</h2>
        <p className="text-muted-foreground leading-relaxed">
          The dashboard transformed a dense dataset into a decision-support tool.
          Instead of reviewing raw tables, stakeholders could explore trends
          interactively, compare segments, and evaluate behavioral patterns in
          real time.
        </p>
      </section>

      {/* Lessons Learned */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
        <p className="text-muted-foreground leading-relaxed">
          This project reinforced the importance of designing analytics around
          usability, not just technical accuracy. Clean pipelines and scalable
          processing matter — but clarity in presentation is what ultimately
          drives impact. It also strengthened my ability to collaborate across
          a team while working with large-scale data.
        </p>
      </section>
        </ProjectLayout>
        <Contact />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default MuseDash;
  
  