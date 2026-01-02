import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";

const Cookies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />
            <main className="container mx-auto px-6 py-32 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold font-display mb-8">Cookie Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-invert max-w-none">
                        <p className="mb-6">
                            This Cookie Policy explains how {siteData.company.name} uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. What are cookies?</h2>
                        <p className="mb-6">
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Why do we use cookies?</h2>
                        <p className="mb-4">
                            We use first-party and third-party cookies for several reasons:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Effectively operating our website.</li>
                            <li>Understanding how our website is used.</li>
                            <li>Personalizing your experience.</li>
                            <li>Improving the security of our website.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Types of cookies we use</h2>
                        <div className="mb-6 space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                                <p>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Analytics and Customization Cookies</h3>
                                <p>These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. How can I control cookies?</h2>
                        <p className="mb-6">
                            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                        </p>
                    </div>
                </div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default Cookies;
