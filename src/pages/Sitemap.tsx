import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";
import { ArrowRight } from "lucide-react";

const Sitemap = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "Company",
            links: siteData.footer.links.Company
        },
        {
            title: "Services",
            links: siteData.services.items.map(item => ({ lable: item.title, link: `/services/${item.slug}` }))
        },
        {
            title: "Main Pages",
            links: siteData.navigation.map(item => ({ lable: item.name, link: item.href }))
        },
        {
            title: "Resources",
            links: siteData.footer.links.Resources
        },
        {
            title: "Legal",
            links: siteData.footer.links.Legal
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />
            <main className="container mx-auto px-6 py-32 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold font-display mb-4">Site Map</h1>
                    <p className="text-muted-foreground mb-12">An overview of the content available on our website.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-xl font-bold mb-6 border-b border-border pb-2">{section.title}</h2>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.link}>
                                            <Link
                                                to={link.link}
                                                className="group flex items-center text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <ArrowRight className="w-4 h-4 mr-2 opacity-50 group-hover:translate-x-1 transition-transform" />
                                                {link.lable || link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default Sitemap;
