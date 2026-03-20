import ProjectLayout from "@/components/ProjectLayout";

import datasetImage from "@/assets/projects/musedash/musedash-dataset.png";
import architectureImage from "@/assets/projects/musedash/musedash-architecture.png";
import analysisImage from "@/assets/projects/musedash/musedash-analysis.png";
import dashboardImage from "@/assets/projects/musedash/musedash-dashboard.png";

const MuseDash = () => {
  return (
    <ProjectLayout
      title="MuseDash: Listening Analytics"
      subtitle="Exploring one million streaming records to uncover listening trends and user behavior through scalable data processing and interactive visualization."
      github="https://github.com/ZCWDataSixZero/MuseDash"
    >

      {/* TECH STACK */}
      <section>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Python</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">PySpark</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Pandas</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Altair</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Plotly</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Streamlit</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">AWS S3</span>
        </div>
      </section>

      {/* PROBLEM */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Problem</h2>
        <p className="text-muted-foreground leading-relaxed">
          Music streaming platforms generate massive volumes of listening data,
          but raw records alone do not reveal clear behavioral insights. The
          challenge was transforming over one million streaming records into
          meaningful patterns that could help understand listening trends,
          genre popularity, and user engagement behavior.
        </p>
      </section>

      {/* DATASET */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dataset Overview</h2>

          <p className="text-muted-foreground mb-6 max-w-3xl">
            The dataset contained over one million listening events capturing
            user activity, track metadata, and listening duration across multiple
            genres and artists.
          </p>

          <img
            src={datasetImage}
            alt="MuseDash dataset preview"
            className="rounded-xl border border-border shadow-lg w-full"
          />
          <p className="text-sm text-muted-foreground mt-3 text-center max-w-2xl mx-auto">
            Sample rows from the raw listening dataset used for analysis.
          </p>
        
      </section>

      {/* ARCHITECTURE */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

        <p className="text-muted-foreground mb-6">
          A scalable processing pipeline was designed to transform raw listening
          data stored in Amazon S3 into structured datasets suitable for
          exploratory analysis and visualization.
        </p>

        <img
          src={architectureImage}
          alt="MuseDash data pipeline architecture"
          className="rounded-xl border border-border shadow-lg w-full"
        />
        <p className="text-sm text-muted-foreground mt-3 text-center max-w-2xl mx-auto">
          Data pipeline architecture.
        </p>
      </section>

      {/* ANALYSIS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Exploratory Analysis</h2>


          <p className="text-muted-foreground leading-relaxed">
            Exploratory analysis focused on identifying patterns in listening
            behavior, including genre popularity, listening frequency, and
            time-based engagement trends.
          </p>

        <img
          src={analysisImage}
          alt="MuseDash analysis visualization"
          className="rounded-xl border border-border shadow-lg"
        />
        <p className="text-sm text-muted-foreground mt-3 text-center max-w-2xl mx-auto">
          KPIs, Listening duration line over time, segmented by user type (free vs. paid).
        </p>

      
      </section>

      {/* DASHBOARD */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Interactive Dashboard</h2>

        <p className="text-muted-foreground mb-6">
          The final deliverable was an interactive Streamlit dashboard that
          allowed users to explore trends dynamically through filtering,
          interactive charts, and visual summaries of listening behavior.
        </p>

        <img
          src={dashboardImage}
          alt="MuseDash Streamlit dashboard"
          className="rounded-xl border border-border shadow-lg w-full"
        />
        <p className="text-sm text-muted-foreground mt-3 text-center max-w-2xl mx-auto">
          Interactive Streamlit dashboard showcasing key insights from the listening data.
        </p>
      </section>

      {/* INSIGHTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>

        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>
            Paid listeners exhibited significantly higher engagement levels compared to free users, 
            with more frequent listening sessions and longer durations.
          </li>
          <li>
            Genre distribution revealed distinct clusters of listener
            preferences across user segments.
          </li>
          <li>
            Curated playlist listeners demonstrated higher engagement and
            longer average listening sessions.
          </li>
          <li>
            Time-of-day analysis suggested specific windows of peak listener
            engagement.
          </li>
        </ul>
      </section>

    </ProjectLayout>
  );
};

export default MuseDash;