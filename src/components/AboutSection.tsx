import { CheckCircle, ArrowRight, Code2, Users, Rocket, Target, Zap, Shield, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/data/siteData";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Code2,
  Shield,
  Target,
  Rocket,
  Users,
  TrendingUp,
  Award,
};

const AboutSection = () => {
  const { about } = siteData;

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">{about.badge}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              {about.headline.prefix}{" "}
              <span className="text-gradient">{about.headline.highlight1}</span>
              <br className="hidden md:block" />
              {" "}{about.headline.middle} <span className="text-gradient">{about.headline.highlight2}</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {about.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {about.stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <ScrollReveal key={stat.label} delay={index * 100} direction="up">
                <div className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                      {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div> */}

        {/* Main content - Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Mission Statement */}
          <ScrollReveal direction="left">
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">
                  {about.mission.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {about.mission.description}
                </p>

                {/* Visual divider */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary/30" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Quick stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {about.quickStats.map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-2xl font-bold font-display text-gradient">{item.value}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Highlights */}
          <div className="space-y-4">
            {about.highlights.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <ScrollReveal key={index} delay={index * 100} direction="right">
                  <div className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                    </div>
                    <span className="text-foreground font-medium flex-1">{item.text}</span>
                    <CheckCircle className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </ScrollReveal>
              );
            })}

            <ScrollReveal delay={500} direction="up">
              <div className="pt-6">
                <Link to="/about">
                  <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group h-14 px-8 text-base glow w-full sm:w-auto">
                    Discover Our Story
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
