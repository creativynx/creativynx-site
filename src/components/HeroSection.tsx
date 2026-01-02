import { useState, useEffect } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { siteData } from "@/data/siteData";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { hero, company } = siteData;
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);
  const badges = hero.badge.split(" • ");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadgeIndex((prev) => (prev + 1) % badges.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [badges.length]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Decorative circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-primary/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-[5%] w-80 h-80 bg-primary/25 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-16 h-16 border-2 border-primary/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute top-[25%] right-[12%] w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-8 h-8 bg-amber-500/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] right-[8%] w-20 h-20 border border-primary/15 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] left-[3%] w-6 h-6 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-[60%] right-[5%] w-4 h-4 bg-amber-500/40 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top badge */}
          <div className="flex justify-center mb-10 opacity-0 animate-fade-in-up">
            <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/80 border border-border backdrop-blur-md shadow-lg overflow-hidden group hover:border-primary/40 transition-all duration-300 cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-emerald-600">Active</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="hidden md:inline text-sm font-semibold text-foreground/60">{hero.badge}</span>
              <span
                key={currentBadgeIndex}
                className="md:hidden text-sm font-semibold text-primary animate-in fade-in slide-in-from-bottom-1 duration-300"
              >
                {badges[currentBadgeIndex]}
              </span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-[1.02] tracking-loose mb-8">
              <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {hero.headline.line1}
              </span>
              <br />
              <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                <span className="text-gradient">{hero.headline.line2Highlight}</span>
                {" "}{hero.headline.line2Suffix}
              </span>
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {hero.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link to="/contact">
              <Button
                size="lg"
                variant="gradient"
                className="group"
              >
                <span className="relative z-10 flex items-center font-semibold">
                  {hero.primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-border"
                >
                  <div
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary-foreground transition-colors">
                    <Play className="h-3 w-3 text-primary ml-0.5" fill="currentColor" />
                  </div>
                  {hero.secondaryCta}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] p-0 border-none bg-black/95 shadow-2xl">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={hero.videoUrl}
                    title="Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Trust badges */}
          {/* <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {hero.trustedBy.map((company) => (
                <div 
                  key={company} 
                  className="px-4 py-2 rounded-lg bg-secondary/50 border border-transparent hover:border-primary/20 text-base font-bold font-display text-muted-foreground/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 right-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer group">
          <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
          <div className="w-4 h-6 rounded-full border-[1.5px] border-current flex items-start justify-center py-1.5">
            <div className="w-[3px] h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
