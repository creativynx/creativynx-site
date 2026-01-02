import { useEffect } from "react";
import { Globe, Banknote, BookOpen, Heart, Briefcase, ArrowRight, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Globe,
    Banknote,
    BookOpen,
    Heart,
};

const Careers = () => {
    const { careers } = siteData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <ScrollReveal direction="up">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <span className="text-xs text-primary font-medium">{careers.badge}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
                                {careers.headline.prefix} <span className="text-gradient">{careers.headline.highlight}</span> {careers.headline.suffix}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {careers.description}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Benefits Grid */}
                <section className="bg-secondary/20 py-12 mb-20">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20">
                        <ScrollReveal direction="up">
                            <h2 className="text-3xl font-bold font-display text-center mb-16">Why Join CreativynX?</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {careers.benefits.map((benefit, index) => {
                                    const IconComponent = iconMap[benefit.icon];
                                    return (
                                        <div key={index} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors text-center">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                                                {IconComponent && <IconComponent className="w-6 h-6" />}
                                            </div>
                                            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                            <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Open Positions */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <ScrollReveal direction="up">
                        <h2 className="text-3xl font-bold font-display mb-12">Open Positions</h2>
                        <div className="space-y-4">
                            {careers.positions.map((position) => (
                                <div key={position.id} className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-xl font-bold font-display mb-2 text-foreground group-hover:text-primary transition-colors">{position.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {position.department}</span>
                                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {position.location}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {position.type}</span>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="border-primary/20 hover:bg-primary hover:text-primary-foreground group-hover:border-primary">
                                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                            {careers.positions.length === 0 && (
                                <p className="text-muted-foreground text-center py-10">No open positions at the moment. Check back later!</p>
                            )}
                        </div>
                    </ScrollReveal>
                </div>

            </main>

            <FooterCTA />
        </div>
    );
};

export default Careers;
