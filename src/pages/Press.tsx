import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Newspaper, Download, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const Press = () => {
    const { press } = siteData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-20">
                    <ScrollReveal direction="up">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <span className="text-xs text-primary font-medium">{press.badge}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
                                {press.headline.prefix} <span className="text-gradient">{press.headline.highlight}</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {press.description}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* News Grid */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-24">
                    <ScrollReveal direction="up">
                        <div className="grid gap-8">
                            {press.news.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                                            <Newspaper className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
                                            <span className="font-medium text-foreground">{item.source}</span>
                                            <span>•</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold font-display mb-3">{item.title}</h3>
                                        <p className="text-muted-foreground mb-4">{item.summary}</p>
                                        <Link to={`/press/${item.slug}`} className="inline-flex items-center text-primary font-medium hover:underline">
                                            Read Article <ExternalLink className="ml-1 w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Media Kit CTA */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <ScrollReveal direction="up">
                        <div className="rounded-3xl bg-secondary/30 border border-border p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-2xl font-bold font-display mb-2">Brand Assets & Media Kit</h2>
                                <p className="text-muted-foreground max-w-xl">{press.mediaKit.description}</p>
                            </div>
                            <Button className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
                                <Download className="mr-2 w-4 h-4" /> Download Media Kit
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>

            </main>

            <FooterCTA />
        </div>
    );
};

export default Press;
