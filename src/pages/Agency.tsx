import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Smartphone, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Agency = () => {
    const { agency } = siteData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Code2": return <Code2 className="w-6 h-6" />;
            case "Cloud": return <Cloud className="w-6 h-6" />;
            case "Smartphone": return <Smartphone className="w-6 h-6" />;
            case "Shield": return <Shield className="w-6 h-6" />;
            default: return <Code2 className="w-6 h-6" />;
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
                {/* Background Pattern - Dot Grid */}
                <div className="absolute inset-x-0 -top-40 -bottom-40 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                    <svg
                        className="absolute left-[calc(50%-700px)] top-0 h-[1800px] w-[1400px] -translate-y-[20%] text-primary/40"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="dotted-grid"
                                width="32"
                                height="32"
                                patternUnits="userSpaceOnUse"
                                x="50%"
                                y="100%"
                            >
                                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dotted-grid)" />
                    </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-40 left-10 md:left-20 animate-float opacity-20 md:opacity-40">
                    <Code2 className="w-16 h-16 text-primary rotate-12" />
                </div>
                <div className="absolute bottom-40 right-10 md:right-20 animate-float [animation-delay:2s] opacity-20 md:opacity-40">
                    <Cloud className="w-20 h-20 text-purple-500 -rotate-6" />
                </div>
                <div className="absolute top-1/3 right-1/4 animate-float [animation-delay:4s] opacity-10">
                    <Shield className="w-12 h-12 text-amber-500 rotate-45" />
                </div>

                {/* Animated Gradient Blob */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-40 pointer-events-none animate-pulse" />

                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5 rounded-full uppercase tracking-widest backdrop-blur-sm">
                        {agency.badge}
                    </Badge>

                    <h1 className="text-5xl md:text-8xl font-bold font-display tracking-normal mb-8">
                        {agency.headline.prefix} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-amber-500 animate-gradient-x">
                            {agency.headline.highlight}
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        {agency.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105">
                                {agency.cta} <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {agency.features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {getIcon(feature.icon)}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default Agency;
