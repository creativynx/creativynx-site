import { useState } from "react";
import { ArrowRight, Mail, Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/data/siteData";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo/V-Logo-Name-Light_Theme_TP.png";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
};

const FooterCTA = () => {
  const [email, setEmail] = useState("");
  const { footer, company } = siteData;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest tech trends and hiring alerts.",
      });
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-8 relative">
      {/* CTA Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <ScrollReveal direction="scale">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                {footer.cta.headline.prefix} <span className="text-gradient">{footer.cta.headline.highlight}</span>?
              </h2>

              <p className="text-muted-foreground mb-8">
                {footer.cta.description}
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder={footer.cta.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-secondary border-border h-12"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground h-12 px-6 group"
                >
                  {footer.cta.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal direction="up" delay={200}>
          <div className="h-px bg-border my-16" />
        </ScrollReveal>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal direction="up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-border">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="#home" className="flex items-center gap-2 mb-4">
                <img src={Logo} alt="Logo" className="w-full px-12 md:p-0 md:w-32" />
              </a>

              <div className="flex items-center justify-center md:justify-start gap-3 ">
                {footer.social.map((social) => {
                  const IconComponent = iconMap[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={social.platform}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footer.links).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4 text-sm">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.link}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.lable}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground">
            {footer.credit.prefix} {" "}
            <Link
              to={footer.credit.company.link}
              className="text-primary hover:underline tracking-wide"
            >
              <span className="text-primary">{footer.credit.company.name}</span><span className="text-muted-foreground">{footer.credit.company.suffix}</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
