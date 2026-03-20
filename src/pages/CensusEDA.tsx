import ProjectLayout from "@/components/ProjectLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


import rawImage from "@/assets/projects/census/census-raw.png";
import cleanedImage from "@/assets/projects/census/census-cleaned.png";
import analysisImage from "@/assets/projects/census/census-analysis.png";
//import dashboardImage from "@/assets/projects/census/census-dashboard.png";

const CensusEDA = () => {
  return (
    <><ProjectLayout
      title="Census Data: Exploratory Analysis & Dashboard"
      subtitle="Transforming complex public census data into clear, interpretable insights through data cleaning, analysis, and visualization."
      github="https://github.com/angelikabrown/CensusDataEDA"
    >

      {/* TECH STACK */}
      <section>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Python</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Pandas</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">EDA</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Tableau</span>
          <span className="px-3 py-1 bg-accent rounded-md text-sm">Data Cleaning</span>
        </div>
      </section>


      {/* PROBLEM */}
      <section>

        <h2 className="text-2xl font-semibold mb-4">Problem</h2>

        <p className="text-muted-foreground leading-relaxed">
          Public census data contains valuable insights, but is often difficult
          to interpret due to coded variables, unclear naming conventions, and
          large volumes of information. The goal of this project was to transform
          this complex dataset into meaningful, accessible insights.
        </p>

      </section>


      {/* DATASET */}
      <section>

        <h2 className="text-2xl font-semibold mb-6">Raw Dataset</h2>

        <p className="text-muted-foreground mb-6">
          The original dataset contained coded variables and non-intuitive column
          names, requiring contextual understanding before analysis could begin.
        </p>

        <img
          src={rawImage}
          alt="Raw census dataset"
          className="rounded-xl border border-border shadow-lg w-full" />

        <p className="text-sm text-muted-foreground text-center mt-2 max-w-2xl mx-auto">
          Example of raw census data with coded variables and complex structure.
        </p>

      </section>


      {/* CLEANING */}
      <section>

        <h2 className="text-2xl font-semibold mb-6">Data Cleaning & Preparation</h2>

        <p className="text-muted-foreground mb-6">
          Data cleaning involved decoding variable meanings, renaming columns,
          and selecting relevant fields to make the dataset usable for analysis.
        </p>

        <img
          src={cleanedImage}
          alt="Cleaned dataset"
          className="rounded-xl border border-border shadow-lg w-full" />

        <p className="text-sm text-muted-foreground text-center mt-2 max-w-2xl mx-auto">
          Cleaned dataset with readable column names and structured fields.
        </p>

      </section>


      {/* ANALYSIS */}
      <section>

        <h2 className="text-2xl font-semibold mb-6">Exploratory Analysis</h2>

        <p className="text-muted-foreground mb-6">
          Exploratory analysis focused on identifying trends in transportation
          patterns and demographic behavior across different regions.
        </p>

        <img
          src={analysisImage}
          alt="Census analysis chart"
          className="rounded-xl border border-border shadow-lg w-full" />

      </section>


      {/* DASHBOARD 
      <section>

        <h2 className="text-2xl font-semibold mb-6">Interactive Dashboard</h2>

        <p className="text-muted-foreground mb-6">
          The final dashboard allows users to explore trends through interactive
          visualizations, making complex census data easier to understand and
          analyze.
        </p>

        <img
          src={dashboardImage}
          alt="Tableau dashboard"
          className="rounded-xl border border-border shadow-lg w-full" />

      </section> */}


      {/* INSIGHTS */}
      <section>

        <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>

        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Public transportation usage varied significantly by region</li>
          <li>Urban areas showed higher reliance on multiple commuting methods</li>
          <li>Transportation patterns correlated with demographic characteristics</li>
          <li>Data cleaning was critical to uncovering meaningful insights</li>
        </ul>

      </section>

    </ProjectLayout>
    <Contact />
    <Footer />
    </> 
  );
}
  export default CensusEDA; 
