import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "angelikpbrown@gmail.com",
      href: "mailto:angelikpbrown@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/angelika",
      href: "https://linkedin.com/in/angelikabrown",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@angelikabrown",
      href: "https://github.com/angelikabrown",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>!
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            If you’re working on a data challenge — or thinking through one — I’d be glad to connect.
          </p>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin className="w-5 h-5" />
              <span>Open to full-time and contract roles on inspiring teams</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors"
                >
                  <link.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <p className="font-medium text-sm group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{link.value}</p>
                </a>
              ))}
            </div>
          </div>

          {/* <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="mailto:angelika@example.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Me a Message
            </a>
          </Button>  */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
