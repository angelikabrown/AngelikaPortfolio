import ProjectLayout from "@/components/ProjectLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import researchImage from "@/assets/projects/2638/2638-contact-research.png";
import outreachImage from "@/assets/projects/2638/2638-outreach-dashboard.png";
import glideImage from "@/assets/projects/2638/2638-glide-app.png";

const CaseStudy2638 = () => {
  return (
    <ProjectLayout
      title="2638 Management Group: Outreach & Client Engagement System"
      subtitle="Supporting a small coaching business expanding into corporate partnerships through structured outreach research, tracking systems, and lightweight client engagement tools."
    >

{/* PROJECT SNAPSHOT */}

<section>
<h2 className="text-2xl font-semibold mb-6">Project Snapshot</h2>

<div className="grid md:grid-cols-2 gap-6 text-muted-foreground">

<div>
<strong>Client</strong><br/>
Small coaching & wellness business
</div>

<div>
<strong>Goal</strong><br/>
Expand services to corporate clients
</div>

<div>
<strong>Focus</strong><br/>
Corporate outreach and client engagement
</div>

<div>
<strong>Tools</strong><br/>
Excel, Glide, market research
</div>

</div>
</section>


{/* BUSINESS CONTEXT */}

<section>

<h2 className="text-2xl font-semibold mb-4">Business Context</h2>

<p className="text-muted-foreground leading-relaxed">
The business owner was preparing to expand her coaching and wellness
services into the corporate market, specifically targeting mid-level
professionals and managers.
</p>

<p className="text-muted-foreground leading-relaxed mt-4">
Identifying potential corporate contacts and organizing outreach
efforts required time-intensive research that was difficult to
manage alongside daily business operations.
</p>

</section>


{/* CONTACT RESEARCH */}

<section>

<h2 className="text-2xl font-semibold mb-6">Corporate Contact Research</h2>

<p className="text-muted-foreground mb-6">
I conducted research to identify potential corporate contacts who
might benefit from the company's coaching and wellness services.
The results were compiled into a structured contact list designed
to support future outreach efforts.
</p>

<img
src={researchImage}
alt="Corporate contact research spreadsheet"
className="rounded-xl border border-border shadow-lg w-full"
/>

<p className="text-sm text-muted-foreground text-center mt-2 max-w-2xl mx-auto">
Structured contact research identifying potential corporate outreach targets.
</p>

</section>


{/* OUTREACH TRACKING SYSTEM */}

<section>

<h2 className="text-2xl font-semibold mb-6">Outreach Tracking System</h2>

<p className="text-muted-foreground mb-6">
To help organize outreach activity, I designed a lightweight Excel
dashboard that allowed the business owner to track contact
information, outreach status, and follow-up opportunities.
</p>

<img
src={outreachImage}
alt="Outreach tracking dashboard"
className="rounded-xl border border-border shadow-lg w-full"
/>

<p className="text-sm text-muted-foreground text-center mt-2 max-w-2xl mx-auto">
Excel dashboard used to monitor outreach activity and contact progress.
</p>

</section>


{/* CLIENT ENGAGEMENT PIPELINE */}

<section>

<h2 className="text-2xl font-semibold mb-4">Client Engagement Pipeline</h2>

<p className="text-muted-foreground leading-relaxed">
In addition to corporate outreach, the business owner wanted new ways
for existing clients to interact with her coaching content and book
future sessions.
</p>

<p className="text-muted-foreground leading-relaxed mt-4">
After discussing options, she expressed interest in Glide, a no-code
platform that converts spreadsheets into mobile-friendly applications.
</p>

</section>


{/* PLATFORM EVALUATION */}

<section>

<h2 className="text-2xl font-semibold mb-4">Platform Evaluation</h2>

<p className="text-muted-foreground leading-relaxed">
Before implementing the platform, I researched Glide's capabilities to
determine whether its free tier could support the desired functionality.
</p>

<ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
<li>Reviewed feature limitations of the free tier</li>
<li>Tested content structure using spreadsheet data</li>
<li>Evaluated usability for the business owner</li>
</ul>

</section>


{/* GLIDE APP */}

<section>

<h2 className="text-2xl font-semibold mb-6">Glide App Prototype</h2>

<p className="text-muted-foreground mb-6">
Using the business owner's Reiki educational content stored in a
spreadsheet, I created a prototype Glide application that allowed
users to browse content and navigate toward session booking.
</p>

<img
src={glideImage}
alt="Glide content engagement app"
className="rounded-xl border border-border shadow-lg w-full"
/>

<p className="text-sm text-muted-foreground text-center mt-2 max-w-2xl mx-auto">
Prototype Glide application built from spreadsheet data.
</p>

</section>


{/* IMPACT */}

<section>

<h2 className="text-2xl font-semibold mb-4">Impact</h2>

<ul className="list-disc pl-6 text-muted-foreground space-y-2">
<li>Created structured corporate contact research</li>
<li>Improved organization of outreach activity</li>
<li>Enabled simple tracking of outreach progress</li>
<li>Provided a lightweight client engagement platform</li>
</ul>

</section>


{/* KEY TAKEAWAY */}

<section>

<h2 className="text-2xl font-semibold mb-4">Key Takeaway</h2>

<p className="text-muted-foreground leading-relaxed">
This project reinforced the importance of designing solutions that
match a client's workflow and technical comfort level. Rather than
implementing complex tools, the focus was on creating simple,
maintainable systems that supported the business owner's goals.
</p>

</section>

    </ProjectLayout>
  );
};

export default CaseStudy2638;