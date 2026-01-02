import { Building2, GraduationCap, Palette, School, ArrowUpRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/data/siteData";
import { api } from "@/lib/api";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  GraduationCap,
  Palette,
  School,
};

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  display_order: number;
  is_active: boolean;
}

const ServicesSection = () => {
  const { services: staticServices } = siteData;

  const { data: servicesData, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: api.getServices,
  });

  // Use database data if available, otherwise fall back to static data
  const displayServices = (servicesData || staticServices.items) as Service[];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs text-primary font-medium">{staticServices.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              {staticServices.headline.prefix} <span className="text-gradient">{staticServices.headline.highlight}</span>
            </h2>
            <p className="text-muted-foreground">
              {staticServices.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {/* Services Grid */}
        {!isLoading && (
          <div className="grid md:grid-cols-2 gap-6">
            {displayServices.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <ScrollReveal key={service.title} delay={index * 100} direction="up">
                  <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        {IconComponent && <IconComponent className="w-7 h-7 text-primary" />}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <h3 className="text-xl font-bold font-display mb-3 text-foreground">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground border border-border"
                        >
                          {feature}
                        </span>
                      ))}
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

export default ServicesSection;
