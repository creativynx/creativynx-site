import { useEffect } from "react";
import { Linkedin, Twitter, Github, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";
import { api } from "@/lib/api";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  image_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  github_url: string | null;
  display_order: number;
  is_active: boolean;
}

const Team = () => {
  const { team: staticTeam } = siteData;

  const { data: teamData, isLoading } = useQuery({
    queryKey: ['team'],
    queryFn: api.getTeam,
  });

  // Use database data if available, otherwise fall back to static data
  // Note: Static data structure is different (has nested social), so we might need to map if fallback is used.
  // But for now, let's assume if API fails we might just show empty or try to map static data to this shape if crucial.
  // Actually, easiest is to just map API data if present, or fallback to static data mapped to flat structure.

  const displayMembers = teamData ? (teamData as TeamMember[]) : staticTeam.members.map(m => ({
    id: 'static',
    name: m.name,
    role: m.role,
    bio: m.bio,
    image_url: m.image,
    linkedin_url: m.social.linkedin,
    twitter_url: m.social.twitter,
    github_url: m.social.github,
    display_order: 0,
    is_active: true
  }));

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-xs text-primary font-medium">{staticTeam.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
                {staticTeam.headline.prefix} <span className="text-gradient">{staticTeam.headline.highlight}</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                {staticTeam.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {/* Team Grid */}
          {!isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100} direction="up">
                  <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <img
                        src={member.image_url || '/placeholder.svg'}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center gap-3">
                      {member.linkedin_url && member.linkedin_url !== '#' && (
                        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.twitter_url && member.twitter_url !== '#' && (
                        <a href={member.twitter_url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.github_url && member.github_url !== '#' && (
                        <a href={member.github_url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Team;
