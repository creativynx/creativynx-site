import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
    const { toast } = useToast();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission logic
        toast({
            title: "Message Sent",
            description: "We've received your message and will get back to you soon.",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-24 pb-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">

                    {/* Header */}
                    <ScrollReveal direction="up">
                        <div className="text-center max-w-4xl mx-auto mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                <span className="text-xs text-primary font-medium">Get in Touch</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                                Let's Start a <span className="text-gradient">Conversation</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Have a project in mind or want to join our accelerator? We'd love to hear from you.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        {/* Contact Info */}
                        <ScrollReveal direction="right">
                            <div className="glass-card rounded-3xl p-8 md:p-12 border-primary/10">
                                <h2 className="text-2xl font-bold font-display mb-8">Contact Information</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email Us</h3>
                                            <p className="text-muted-foreground mb-1">For general inquiries:</p>
                                            <a href={`mailto:${siteData.company.email}`} className="text-primary hover:underline">{siteData.company.email}</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Call Us</h3>
                                            <p className="text-muted-foreground mb-1">Mon-Fri from 9am to 6pm:</p>
                                            <a href={`tel:${siteData.company.phone}`} className="text-primary hover:underline">{siteData.company.phone}</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Visit Us</h3>
                                            <p className="text-muted-foreground mb-1">Headquarters:</p>
                                            <p className="text-foreground">{siteData.company.address}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-border/50">
                                    <h3 className="font-semibold mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        {siteData.company.social.map((social, idx) => (
                                            <a
                                                key={idx}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                                            >
                                                {/* Simple icon mapping, or could use lucide icons map if needed */}
                                                <span className="text-sm">
                                                    <social.icon />
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal direction="left" delay={0.2}>
                            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl border-primary/10">
                                <h2 className="text-2xl font-bold font-display mb-2">Send us a message</h2>
                                <p className="text-muted-foreground mb-8">Fill out the form below and we'll reply within 24 hours.</p>

                                <div className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                                            <Input id="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" placeholder="john@example.com" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input id="subject" placeholder="Project Inquiry / Job Application" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" placeholder="Tell us about your project or inquiry..." className="min-h-[150px]" required />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full">
                                        Send Message <Send className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </form>
                        </ScrollReveal>
                    </div>

                </div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default Contact;
