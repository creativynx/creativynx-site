import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />
            <main className="container mx-auto px-6 py-32 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold font-display mb-8">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-invert max-w-none">
                        <p className="mb-6">
                            At {siteData.company.name}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or engage with our services.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Register for an account or apply for our accelerator program.</li>
                            <li>Subscribe to our newsletter or marketing communications.</li>
                            <li>Contact us via email, phone, or our contact forms.</li>
                            <li>Participate in surveys or provide feedback.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect for various purposes, including:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Providing, operating, and maintaining our website and services.</li>
                            <li>Improving, personalizing, and expanding our website.</li>
                            <li>Understanding and analyzing how you use our website.</li>
                            <li>Communicating with you, including for customer service, updates, and marketing purposes.</li>
                            <li>Processing your applications and transactions.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
                        <p className="mb-6">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
                        <p className="mb-6">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="font-medium">
                            Email: {siteData.company.email}<br />
                            Address: {siteData.company.address}
                        </p>
                    </div>
                </div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default Privacy;
