import { useEffect } from "react";
import { Rocket, Target, Sparkles, Globe, CheckCircle, Clock, Circle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q4 2024",
      status: "completed",
      title: "Foundation & Growth",
      items: [
        { text: "Launch CreaX Engine v2.0", completed: true },
        { text: "Expand accelerator program to 50 students", completed: true },
        { text: "Open new development center", completed: true },
        { text: "Partner with 10 enterprise clients", completed: true },
      ],
    },
    {
      quarter: "Q1 2025",
      status: "in-progress",
      title: "AI Innovation",
      items: [
        { text: "Release AI-powered code assistant", completed: true },
        { text: "Launch CreaX Analytics platform", completed: false },
        { text: "Introduce automated security scanning", completed: false },
        { text: "Expand to international markets", completed: false },
      ],
    },
    {
      quarter: "Q2 2025",
      status: "planned",
      title: "Platform Expansion",
      items: [
        { text: "Launch mobile development toolkit", completed: false },
        { text: "Introduce team collaboration features", completed: false },
        { text: "Release enterprise API marketplace", completed: false },
        { text: "Open accelerator in 3 new cities", completed: false },
      ],
    },
    {
      quarter: "Q3 2025",
      status: "planned",
      title: "Global Scale",
      items: [
        { text: "Launch CreaX Cloud infrastructure", completed: false },
        { text: "Establish European headquarters", completed: false },
        { text: "Introduce 24/7 global support", completed: false },
        { text: "Release community edition", completed: false },
      ],
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return { bg: "bg-emerald-500/20", text: "text-emerald-500", icon: CheckCircle };
      case "in-progress":
        return { bg: "bg-primary/20", text: "text-primary", icon: Clock };
      default:
        return { bg: "bg-muted", text: "text-muted-foreground", icon: Circle };
    }
  };

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
              <span className="text-xs text-primary font-medium">FUTURE ROADMAP</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Building the <span className="text-gradient">Future</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Our vision for continuous innovation and growth.
            </p>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Rocket, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
              { icon: Target, title: "Impact", description: "Creating measurable value for clients and community" },
              { icon: Globe, title: "Global", description: "Expanding our reach to serve worldwide" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12">
              {roadmapItems.map((phase, index) => {
                const statusStyles = getStatusStyles(phase.status);
                const StatusIcon = statusStyles.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={phase.quarter}
                    className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} opacity-0 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div className={`flex-1 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`glass-card rounded-2xl p-6 inline-block w-full md:max-w-md ${isEven ? 'md:ml-auto' : ''}`}>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusStyles.bg} mb-3`}>
                          <StatusIcon className={`w-4 h-4 ${statusStyles.text}`} />
                          <span className={`text-xs font-medium ${statusStyles.text}`}>
                            {phase.status === 'completed' ? 'Completed' : phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                          </span>
                        </div>

                        <div className="text-primary font-medium text-sm mb-1">{phase.quarter}</div>
                        <h3 className="text-xl font-bold font-display text-foreground mb-4">{phase.title}</h3>

                        <div className={`space-y-2 ${isEven ? 'md:text-right' : 'text-left'}`}>
                          {phase.items.map((item) => (
                            <div key={item.text} className={`flex items-center gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              {item.completed ? (
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              )}
                              <span className={`text-sm ${item.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {item.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Future Vision */}
          <div className="glass-card rounded-3xl p-8 md:p-12 mt-16 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
              Beyond 2025
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building for the long term. Our vision extends to becoming the world's leading
              technology ecosystem that bridges innovation and talent development.
            </p>
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Roadmap;
