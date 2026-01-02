import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />
            <main className="container mx-auto px-6 py-32 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold font-display mb-8">Terms of Service</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-invert max-w-none">
                        <p className="mb-6">
                            Welcome to {siteData.company.name}. By accessing our website and using our services, you agree to be bound by these Terms of Service. Please read them carefully.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-6">
                            By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Services</h2>
                        <p className="mb-4">
                            You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Using our services in any way that violates any applicable federal, state, local, or international law.</li>
                            <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the services.</li>
                            <li>Attempting to gain unauthorized access to, interfere with, damage, or disrupt any parts of the services.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
                        <p className="mb-6">
                            The content, features, and functionality of our website and services, including but not limited to text, graphics, logos, and software, are the exclusive property of {siteData.company.name} and are protected by copyright, trademark, and other intellectual property laws.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
                        <p className="mb-6">
                            In no event shall {siteData.company.name}, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">5. Changes to Terms</h2>
                        <p className="mb-6">
                            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
                        <p className="mb-6">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="font-medium">
                            Email: {siteData.company.email}
                        </p>
                    </div>
                </div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default Terms;
