import { useQuery } from "@tanstack/react-query";
import { Bot, ShoppingCart, Smartphone, ArrowRight, Loader2, Briefcase, Code, Zap, Globe, Cpu, Database } from "lucide-react";

import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/data/siteData";
import { api } from "@/lib/api";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  ShoppingCart,
  Smartphone,
  Briefcase,
  Code,
  Zap,
  Globe,
  Cpu,
  Database,
};

// Helper to assign visuals based on category since DB doesn't store them yet
const getProjectVisuals = (category: string) => {
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes("ai") || lowerCat.includes("automation")) return { icon: "Bot", color: "from-blue-500/20 to-cyan-500/20" };
  if (lowerCat.includes("commerce")) return { icon: "ShoppingCart", color: "from-emerald-500/20 to-teal-500/20" };
  if (lowerCat.includes("mobile") || lowerCat.includes("app")) return { icon: "Smartphone", color: "from-purple-500/20 to-pink-500/20" };
  if (lowerCat.includes("web")) return { icon: "Globe", color: "from-orange-500/20 to-amber-500/20" };
  if (lowerCat.includes("data")) return { icon: "Database", color: "from-indigo-500/20 to-violet-500/20" };
  return { icon: "Briefcase", color: "from-primary/20 to-primary/10" };
};

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link?: string;
}

const ProjectsSection = () => {
  const { projects: staticProjects } = siteData;

  const { data: projectsData, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: api.getProjects,
  });

  // Use database data if available, otherwise fall back to static data for initial render/error cases
  // Mapping DB data to include visual props
  const displayProjects = projectsData ? (projectsData as Project[]).map((p: Project) => {
    const visuals = getProjectVisuals(p.category);
    return { ...p, ...visuals };
  }) : [];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-xs text-primary font-medium">{staticProjects.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                {staticProjects.headline.prefix} <span className="text-gradient">{staticProjects.headline.highlight}</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Button
              variant="outline"
              className="group w-fit"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ScrollReveal>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && (
          <div className="grid md:grid-cols-3 gap-6">
            {(displayProjects.length > 0 ? displayProjects : staticProjects.items).map((project: any, index: number) => {
              const IconComponent = iconMap[project.icon] || Briefcase;
              return (
                <ScrollReveal key={project.title} delay={index * 150} direction="up">
                  <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group h-full">
                    {/* Project Header Image */}
                    <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-20 h-20 text-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
