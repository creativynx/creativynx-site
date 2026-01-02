import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";
import { Zap, Code2, Shield, Target, ArrowRight, Users, Award, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const About = () => {
    const { about } = siteData;
    const iconMap: Record<string, any> = { Zap, Code2, Shield, Target, Users, Award, Rocket };

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-52 md:pb-32 px-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <ScrollReveal direction="up">
                        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5 rounded-full uppercase tracking-widest backdrop-blur-sm">
                            {about.badge}
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8">
                            {about.headline.prefix} <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-amber-500 animate-gradient-x">
                                {about.headline.highlight1}
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                            {about.description}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <main className="pb-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">

                    {/* Mission Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center mb-32">
                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform rotate-3"></div>
                                <div className="relative glass-card rounded-3xl p-8 md:p-12 border-primary/10">
                                    <h2 className="text-3xl font-bold font-display mb-4">{about.mission.title}</h2>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {about.mission.description}
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mb-8">
                                        Founded in {siteData.company.founded}, {siteData.company.name} emerged from a simple observation: the gap between academic learning and industry demands was widening. We set out to close that loop by creating an environment where high-caliber diverse talent works on high-stakes commercial projects.
                                    </p>
                                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
                                        {about.quickStats.map((stat, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* <ScrollReveal direction="left" delay={0.2}>
                            <div className="space-y-8">
                                {about.highlights.map((item, idx) => {
                                    const Icon = iconMap[item.icon] || Target;
                                    return (
                                        <div key={idx} className="flex gap-4 items-start group">
                                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">{item.text.split(':')[0]}</h3>
                                                <p className="text-muted-foreground">{item.text.split(':')[1] || item.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollReveal> */}
                    </div>

                    {/* Core Values Section */}
                    <section className="mb-32">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 px-4 py-1 text-xs border-primary/20 text-primary bg-primary/5 rounded-full uppercase tracking-widest">
                                Our DNA
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold font-display">Core Values</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {(about.values || []).map((value: any, index: number) => {
                                const Icon = iconMap[value.icon] || CheckCircle2;
                                return (
                                    <ScrollReveal key={index} delay={index * 0.1} direction="up">
                                        <div className="p-8 rounded-2xl bg-secondary/5 border border-border/50 hover:border-primary/20 hover:bg-secondary/10 transition-all duration-300 h-full">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                {value.description}
                                            </p>
                                        </div>
                                    </ScrollReveal>
                                )
                            })}
                        </div>
                    </section>

                    {/* Timeline / Journey Section */}
                    <section className="mb-32 relative">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 px-4 py-1 text-xs border-primary/20 text-primary bg-primary/5 rounded-full uppercase tracking-widest">
                                The Path
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold font-display">Our Journey</h2>
                        </div>

                        <div className="relative max-w-4xl mx-auto">
                            {/* Vertical Line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/5 via-primary/50 to-primary/5 md:-translate-x-1/2" />

                            <div className="space-y-12">
                                {(about.timeline || []).map((item: any, index: number) => (
                                    <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                                        <div className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>

                                            {/* Content side */}
                                            <div className="flex-1 ml-12 md:ml-0 text-left md:text-right">
                                                <div className={`p-6 bg-background border border-border/50 rounded-2xl shadow-sm hover:border-primary/30 transition-all ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                                                    <span className="text-primary font-bold text-lg mb-2 block">{item.year}</span>
                                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                                    <p className="text-muted-foreground">{item.description}</p>
                                                </div>
                                            </div>

                                            {/* Center Dot */}
                                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] md:-translate-x-1/2 -translate-x-[5px] z-10" />

                                            {/* Spacer side */}
                                            <div className="flex-1 hidden md:block" />
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Stats Grid */}
                    <ScrollReveal direction="up">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                            {about.stats.map((stat, index) => {
                                const Icon = iconMap[stat.icon] || Target;
                                return (
                                    <div key={index} className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                                        <Icon className="w-8 h-8 text-primary mb-4" />
                                        <div className="text-3xl font-bold font-display mb-1">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollReveal>

                    {/* CTA */}
                    <ScrollReveal direction="up">
                        <div className="text-center bg-gradient-to-b from-secondary/50 to-transparent rounded-3xl p-12 border border-border">
                            <h2 className="text-3xl font-bold font-display mb-4">Ready to join our ecosystem?</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                                Whether you're an enterprise looking for digital dominance or a developer seeking mastery, {siteData.company.name} is your platform.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/auth">
                                    <Button size="lg" variant="gradient" className="w-full sm:w-auto">
                                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default About;
