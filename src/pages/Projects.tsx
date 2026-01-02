import { useEffect } from "react";
import { Bot, ShoppingCart, Smartphone, Globe, Database, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      category: "AI/ML",
      title: "Intelligent Customer Support Agent",
      description: "A sophisticated RAG-based AI system for enterprise customer support automation with 95% accuracy.",
      tags: ["AI/ML", "RAG System", "Enterprise"],
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      icon: ShoppingCart,
      category: "Web Platform",
      title: "Next-Gen E-Commerce Platform",
      description: "Multi-vendor marketplace with advanced analytics and real-time inventory management.",
      tags: ["E-Commerce", "Multi-vendor", "Analytics"],
      color: "from-cyan-500/20 to-sky-500/20",
    },
    {
      icon: Smartphone,
      category: "UI/UX",
      title: "Fintech Mobile App Redesign",
      description: "Complete UI/UX overhaul for a leading fintech mobile application.",
      tags: ["Fintech", "Mobile", "UI/UX"],
      color: "from-teal-500/20 to-emerald-500/20",
    },
    {
      icon: Globe,
      category: "Web Development",
      title: "Global SaaS Dashboard",
      description: "Enterprise-grade analytics dashboard with real-time data visualization and multi-tenant architecture.",
      tags: ["SaaS", "Dashboard", "Analytics"],
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      icon: Database,
      category: "Backend",
      title: "Distributed Data Pipeline",
      description: "High-throughput data processing system handling millions of events per second.",
      tags: ["Big Data", "Streaming", "Infrastructure"],
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      icon: Shield,
      category: "Security",
      title: "Zero-Trust Security Platform",
      description: "Enterprise security solution with advanced threat detection and automated response.",
      tags: ["Security", "Enterprise", "Automation"],
      color: "from-rose-500/20 to-pink-500/20",
    },
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs text-primary font-medium">OUR PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Projects That <span className="text-gradient">Define Excellence</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From AI-powered solutions to enterprise platforms, explore our portfolio of innovative projects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-20 h-20 text-foreground/20" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Projects;
