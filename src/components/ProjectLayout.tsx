import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectLayoutProps = {
  title: string;
  subtitle?: string;
  github?: string;
  children: ReactNode;
};

const ProjectLayout = ({ title, subtitle, github, children }: ProjectLayoutProps) => {
  return (
    <section className="py-24">
      <div className="container max-w-4xl">

        {/* Back Button */}
        <Link to="/#projects">
          <Button variant="ghost" className="mb-12 pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{title}</span>
          </h1>

          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {github && (
            <div className="mt-8">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  View Code on GitHub
                </Button>
              </a>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-16">
          {children}
        </div>

      </div>
    </section>
  );
};

export default ProjectLayout;
