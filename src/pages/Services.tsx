
import { Building2, GraduationCap, Palette, School, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";
import { useEffect } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building2,
    GraduationCap,
    Palette,
    School,
};

const Services = () => {
    const { services } = siteData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <ScrollReveal direction="up">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <span className="text-xs text-primary font-medium">{services.badge}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
                                {services.headline.prefix} <span className="text-gradient">{services.headline.highlight}</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {services.description}
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.items.map((service, index) => {
                            const IconComponent = iconMap[service.icon];
                            return (
                                <ScrollReveal key={service.id} delay={index * 100} direction="up">
                                    <Link to={`/services/${service.slug}`} className="block h-full">
                                        <div className="glass-card rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 group h-full hover:shadow-2xl hover:-translate-y-1">
                                            <div className="flex items-start justify-between mb-8">
                                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                                    {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
                                                </div>
                                                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-all" />
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold font-display mb-4 text-foreground group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3">
                                                {service.features.map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="px-4 py-1.5 rounded-full bg-secondary/50 text-sm text-foreground/80 border border-border/50"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </main>

            <FooterCTA />
        </div>
    );
};

export default Services;
