import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Cookie } from "lucide-react";

const CookieConsent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    const [marketing, setMarketing] = useState(true);
    const [analytics, setAnalytics] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptAll = () => {
        const preferences = { essential: true, marketing: true, analytics: true };
        savePreferences(preferences);
    };

    const handleRejectAll = () => {
        const preferences = { essential: true, marketing: false, analytics: false };
        savePreferences(preferences);
    };

    const handleSaveCustom = () => {
        const preferences = { essential: true, marketing, analytics };
        savePreferences(preferences);
        setIsOpen(false);
    };

    const savePreferences = (preferences: any) => {
        localStorage.setItem("cookie_consent", JSON.stringify(preferences));
        setShowBanner(false);
        // Here you would typically initialize your tracking scripts based on preferences
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Bottom Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 md:p-6 shadow-[0_-5px_30px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-full duration-500">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-3 max-w-2xl">
                        <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0 hidden md:block">
                            <Cookie className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">We value your privacy</h3>
                            <p className="text-sm text-muted-foreground">
                                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>
                            Customize
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleRejectAll}>
                            Reject All
                        </Button>
                        <Button size="sm" onClick={handleAcceptAll} className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Accept All
                        </Button>
                    </div>
                </div>
            </div>

            {/* Customization Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <DialogTitle>Cookie Preferences</DialogTitle>
                        </div>
                        <DialogDescription>
                            Manage your cookie preferences. Essential cookies are always enabled to ensure the website functions correctly.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="py-4 space-y-6">
                        <div className="flex items-center justify-between space-x-2">
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="essential" className="font-semibold">Essential</Label>
                                <span className="text-xs text-muted-foreground">Required for the site to function.</span>
                            </div>
                            <Switch id="essential" checked disabled />
                        </div>

                        <div className="flex items-center justify-between space-x-2">
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="analytics" className="font-semibold">Analytics</Label>
                                <span className="text-xs text-muted-foreground">Help us understand how you use our site.</span>
                            </div>
                            <Switch id="analytics" checked={analytics} onCheckedChange={setAnalytics} />
                        </div>

                        <div className="flex items-center justify-between space-x-2">
                            <div className="flex flex-col space-y-1">
                                <Label htmlFor="marketing" className="font-semibold">Marketing</Label>
                                <span className="text-xs text-muted-foreground">Used to show you relevant ads.</span>
                            </div>
                            <Switch id="marketing" checked={marketing} onCheckedChange={setMarketing} />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button onClick={handleSaveCustom}>Save Preferences</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CookieConsent;
