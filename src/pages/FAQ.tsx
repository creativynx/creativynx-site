import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageSquare } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
    const { faq } = siteData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            <HelpCircle className="w-3 h-3" />
                            {faq.badge}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
                            {faq.headline.prefix}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
                                {faq.headline.highlight}
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {faq.description}
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="max-w-3xl mx-auto mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faq.items.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-secondary/20 border border-border/50 rounded-xl px-4 md:px-6 data-[state=open]:bg-secondary/30 data-[state=open]:border-primary/20 transition-all duration-300"
                                >
                                    <AccordionTrigger className="text-lg font-medium text-left py-6 hover:text-primary hover:no-underline [&[data-state=open]>svg]:text-primary">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Contact CTA */}
                    <div className="max-w-3xl mx-auto bg-secondary/30 rounded-3xl p-8 md:p-12 text-center border border-border animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold font-display mb-4">Still have questions?</h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                        <Button asChild size="lg" className="rounded-full px-8">
                            <Link to="mailto:info@creativynx.in">Get in Touch</Link>
                        </Button>
                    </div>
                </div>
            </main>

            <FooterCTA />
        </div>
    );
};

export default FAQ;
