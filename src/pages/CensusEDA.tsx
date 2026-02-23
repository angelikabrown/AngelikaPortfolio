import ProjectLayout from "@/components/ProjectLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CensusEDA = () => {
    return (
        <div className="min-h-screen bg-background">
        <main>
        <ProjectLayout
      title="Census Data: Exploratory Analysis & Dashboard"
      subtitle="Transforming complex public census data into clear, interactive insights on demographic and transportation trends."
      github="https://github.com/angelikabrown/CensusDataEDA"
    >

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          This project focused on conducting exploratory data analysis (EDA) on
          publicly available U.S. Census data. The dataset contained extensive
          demographic and transportation information structured with coded variables
          that required contextual understanding before meaningful analysis could begin.
        </p>
      </section>

      {/* The Challenge */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
        <p className="text-muted-foreground leading-relaxed">
          Government datasets are powerful but often difficult to interpret due to
          dense code systems, inconsistent naming conventions, and layered metadata.
          Before visualizing trends, it was necessary to understand what each code
          represented and identify which variables aligned with the analytical goals.
        </p>
      </section>

      {/* My Approach */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Researched documentation to decode census variable structures</li>
          <li>Identified relevant transportation and demographic fields</li>
          <li>Cleaned and transformed data using Pandas</li>
          <li>Standardized naming conventions for clarity</li>
          <li>Filtered datasets to focus on meaningful comparative insights</li>
        </ul>
      </section>

      {/* Tools & Techniques */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tools & Techniques</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Python for analysis and transformation</li>
          <li>Pandas for cleaning and reshaping data</li>
          <li>Data validation through exploratory statistics</li>
          <li>Tableau for building interactive visual dashboards</li>
          <li>AI-assisted exploration to translate coded variables into readable formats</li>
        </ul>
      </section>

      {/* Key Insights */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Public transportation usage varied significantly by region and population density.</li>
          <li>Urban areas demonstrated higher multimodal commuting behavior.</li>
          <li>Transportation patterns correlated with demographic income brackets.</li>
          <li>Trend visualization revealed regional outliers worth deeper investigation.</li>
        </ul>
      </section>

      {/* Impact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Impact</h2>
        <p className="text-muted-foreground leading-relaxed">
          By translating coded census data into accessible visual insights, this
          project demonstrated how complex public datasets can be transformed into
          clear decision-support tools. The final dashboard enabled easier comparison
          across regions and highlighted patterns that were not immediately visible
          in raw tabular form.
        </p>
      </section>

      {/* What I Learned */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
        <p className="text-muted-foreground leading-relaxed">
          This project reinforced that understanding context is just as important
          as technical execution. Effective exploratory analysis requires patience,
          documentation review, and iterative refinement. It also strengthened my
          ability to simplify dense datasets into insights that non-technical
          audiences can understand and act on.
        </p>
      </section>

    </ProjectLayout>
            <Contact />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default CensusEDA;
  