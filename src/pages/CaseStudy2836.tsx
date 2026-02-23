import ProjectLayout from "@/components/ProjectLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CaseStudy2836 = () => {
    return (
        <div className="min-h-screen bg-background">
        <main>
        <ProjectLayout
      title="2836 Management Group: Business Case Study"
      subtitle="Designing a structured outreach and tracking system to support a small business expanding into the B2B space."
    >

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          2836 Management Group was preparing to expand its services from individual
          clients to corporate partnerships. As the business transitioned toward a
          B2B outreach strategy, there was a need for structured tracking,
          organization, and visibility into outreach efforts.
        </p>
      </section>

      {/* The Business Problem */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">The Business Challenge</h2>
        <p className="text-muted-foreground leading-relaxed">
          Outreach contacts were collected from multiple sources, but there was no
          centralized system to track conversations, follow-ups, or engagement
          status. Without structure, scaling outreach efforts would quickly become
          inefficient and difficult to manage.
        </p>
      </section>

      {/* My Approach */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Researched and compiled relevant corporate contacts aligned with target industries</li>
          <li>Designed a structured data model for outreach tracking</li>
          <li>Standardized naming conventions and communication stages</li>
          <li>Built a dashboard to monitor outreach activity and response trends</li>
          <li>Worked directly with the business owner to refine categories and workflows</li>
        </ul>
      </section>

      {/* Tooling Decisions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tooling & Practical Decisions</h2>
        <p className="text-muted-foreground leading-relaxed">
          While more advanced BI tools were available, the business ultimately
          preferred a streamlined Excel-based solution that was easy to maintain
          and update. Prioritizing usability and client comfort ensured the system
          would actually be adopted and used consistently.
        </p>
      </section>

      {/* Solution */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p className="text-muted-foreground leading-relaxed">
          The final deliverable included a centralized outreach tracker with clear
          categorization, follow-up status indicators, and summary metrics.
          This enabled improved visibility into pipeline progress and simplified
          reporting during expansion planning.
        </p>
      </section>

      {/* Impact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Impact</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Improved organization of outreach efforts</li>
          <li>Clearer tracking of communication stages</li>
          <li>Reduced duplication of contact efforts</li>
          <li>Increased confidence in scaling B2B expansion</li>
        </ul>
      </section>

      {/* What I Learned */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
        <p className="text-muted-foreground leading-relaxed">
          This project reinforced that effective data work begins with listening.
          Technical sophistication matters, but clarity and adoption matter more.
          Meeting stakeholders where they are — even when that means choosing
          simpler tools — can create more meaningful and sustainable impact.
        </p>
      </section>

    </ProjectLayout>
            <Contact />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default CaseStudy2836;
  