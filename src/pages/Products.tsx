import { Zap, Shield, BarChart3, Layers, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";

const Products = () => {
  const products = [
    {
      icon: Zap,
      name: "CreaX Engine",
      tagline: "AI-Powered Development Platform",
      description: "Accelerate your development workflow with intelligent code suggestions, automated testing, and seamless deployment.",
      features: ["Smart Code Completion", "Automated Testing", "One-Click Deploy", "Real-time Collaboration"],
      color: "from-blue-500 to-indigo-500",
      price: "$99/mo",
    },
    {
      icon: Shield,
      name: "CreaX Guard",
      tagline: "Enterprise Security Suite",
      description: "Comprehensive security solution with real-time threat detection, compliance monitoring, and automated remediation.",
      features: ["Threat Detection", "Compliance Monitoring", "Vulnerability Scanning", "Incident Response"],
      color: "from-teal-500 to-emerald-500",
      price: "$199/mo",
    },
    {
      icon: BarChart3,
      name: "CreaX Analytics",
      tagline: "Business Intelligence Platform",
      description: "Transform your data into actionable insights with advanced analytics, custom dashboards, and predictive modeling.",
      features: ["Custom Dashboards", "Predictive Analytics", "Data Visualization", "Report Automation"],
      color: "from-violet-500 to-purple-500",
      price: "$149/mo",
    },
    {
      icon: Layers,
      name: "CreaX Cloud",
      tagline: "Scalable Infrastructure",
      description: "Deploy and scale your applications effortlessly with our cloud-native infrastructure and managed services.",
      features: ["Auto-Scaling", "Global CDN", "Managed Databases", "24/7 Support"],
      color: "from-cyan-500 to-sky-500",
      price: "$79/mo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs text-primary font-medium">OUR PRODUCTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Products Built to <span className="text-gradient">Scale</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Enterprise-grade solutions designed to accelerate your digital transformation.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-2xl font-bold font-display text-primary">{product.price}</span>
                </div>
                
                <h3 className="text-2xl font-bold font-display text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-primary font-medium mb-4">{product.tagline}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="glass-card rounded-3xl p-8 md:p-12 mt-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our enterprise team can build tailored solutions to meet your specific requirements.
            </p>
            <Button variant="outline" className="border-border hover:bg-secondary">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Products;
