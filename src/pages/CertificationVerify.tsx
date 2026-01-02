import { useState, useEffect } from "react";
import { Search, Shield, CheckCircle, XCircle, Award, Calendar, User, Hash, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";

interface CertificateData {
  id: string;
  name: string;
  course: string;
  issueDate: string;
  expiryDate: string | null;
  status: "active" | "expired" | "revoked";
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  CheckCircle,
  Award,
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const CertificationVerify = () => {
  const [certificateId, setCertificateId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<CertificateData | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const { certification } = siteData;

  const handleVerify = async () => {
    if (!certificateId.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    // Mock verify for now
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSearchResult(null); // Always not found for now

    setIsSearching(false);
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return {
          icon: CheckCircle,
          color: "text-emerald-500",
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/20",
          label: "Valid Certificate"
        };
      case "expired":
        return {
          icon: XCircle,
          color: "text-amber-500",
          bg: "bg-amber-500/10",
          border: "border-amber-500/20",
          label: "Expired Certificate"
        };
      case "revoked":
        return {
          icon: XCircle,
          color: "text-destructive",
          bg: "bg-destructive/10",
          border: "border-destructive/20",
          label: "Revoked Certificate"
        };
      default:
        return {
          icon: XCircle,
          color: "text-muted-foreground",
          bg: "bg-muted",
          border: "border-border",
          label: "Unknown Status"
        };
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-amber-500/15 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <ScrollReveal direction="up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-8">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Certificate <span className="text-gradient">Verification</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                {certification.description}
              </p>
            </ScrollReveal>

            {/* Search Form */}
            <ScrollReveal direction="up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder={certification.placeholder}
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                    className="pl-12 h-14 text-base bg-card border-border focus:border-primary"
                  />
                </div>
                <Button
                  onClick={handleVerify}
                  disabled={isSearching || !certificateId.trim()}
                  className="h-14 px-8 bg-gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all text-primary-foreground"
                >
                  {isSearching ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      {certification.buttonText}
                    </>
                  )}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <p className="text-sm text-muted-foreground mt-4">
                Enter a certificate ID to verify its authenticity
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {hasSearched && !isSearching && (
        <section className="pb-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-2xl mx-auto">
              {searchResult ? (
                <ScrollReveal direction="scale">
                  <div className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-lg">
                    {/* Status Badge */}
                    {(() => {
                      const config = getStatusConfig(searchResult.status);
                      const StatusIcon = config.icon;
                      return (
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${config.bg} ${config.border} border mb-8`}>
                          <StatusIcon className={`w-5 h-5 ${config.color}`} />
                          <span className={`font-semibold ${config.color}`}>{config.label}</span>
                        </div>
                      );
                    })()}

                    {/* Certificate Details */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Course Name</p>
                          <p className="text-xl font-bold font-display text-foreground">{searchResult.course}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Certificate Holder</p>
                            <p className="text-lg font-semibold text-foreground">{searchResult.name}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                            <Hash className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Certificate ID</p>
                            <p className="text-lg font-semibold text-foreground font-mono">{searchResult.id}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
                            <p className="text-lg font-semibold text-foreground">{searchResult.issueDate}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Expiry Date</p>
                            <p className="text-lg font-semibold text-foreground">
                              {searchResult.expiryDate || 'No Expiry'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal direction="scale">
                  <div className="bg-card rounded-3xl border border-border p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
                      <XCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-foreground mb-3">Certificate Not Found</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We couldn't find a certificate with the ID "{certificateId}". Please check the ID and try again.
                    </p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {certification.features.map((item, i) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <ScrollReveal key={item.title} delay={500 + i * 100} direction="up">
                    <div className="bg-card/50 rounded-2xl border border-border p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        {IconComponent && <IconComponent className="w-7 h-7 text-primary" />}
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationVerify;
