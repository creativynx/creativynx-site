
import { useParams, Navigate, Link } from "react-router-dom";
import { Building2, GraduationCap, Palette, School, ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building2,
    GraduationCap,
    Palette,
    School,
};

const ServiceDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const { services } = siteData;
    const service = services.items.find((item) => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const IconComponent = iconMap[service.icon];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Back link */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
                    <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-20">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-primary/10 border border-primary/20 mb-8 self-start">
                                {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
                                <span className="text-sm text-primary font-bold">{service.title}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-8 leading-tight">
                                {service.description}
                            </h1>

                            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary/30 pl-6">
                                {service.longDescription || service.description}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Benefits Section */}
                {service.benefits && (
                    <div className="bg-secondary/20 py-20">
                        <div className="container mx-auto px-6 md:px-12 lg:px-20">
                            <ScrollReveal direction="up">
                                <h2 className="text-3xl font-bold font-display mb-12">Key Benefits</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            </div>
                                            <p className="text-lg text-foreground/80">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                )}

                {/* Features / Capabilities */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20">
                    <ScrollReveal direction="up">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-display mb-6">Capabilities</h2>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    We bring a comprehensive suite of capabilities to deliver on this service promise.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {service.features.map((feature) => (
                                        <span key={feature} className="px-5 py-2.5 rounded-xl bg-secondary font-medium text-foreground/90 border border-border">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border p-10 flex flex-col items-start shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                                <p className="text-muted-foreground mb-8">
                                    Let's discuss how we can help you with {service.title}.
                                </p>
                                <Button size="lg" className="w-full sm:w-auto text-base px-8 bg-foreground text-background hover:bg-foreground/90">
                                    Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

            </main>

            <FooterCTA />
        </div>
    );
};

export default ServiceDetails;
