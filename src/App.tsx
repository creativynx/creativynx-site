import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import Roadmap from "./pages/Roadmap";
import CertificationVerify from "./pages/CertificationVerify";

import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Sitemap from "./pages/Sitemap";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import PressPost from "./pages/PressPost";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Agency from "./pages/Agency";
import Accelerator from "./pages/Accelerator";
import Design from "./pages/Design";
import Education from "./pages/Education";
import CookieConsent from "./components/CookieConsent";


const queryClient = new QueryClient();

import Contact from "./pages/Contact";

const App = () => (
  <QueryClientProvider client={queryClient}>

    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/products" element={<Products />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/verify-certificate" element={<CertificationVerify />} />


          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/press/:slug" element={<PressPost />} />
          <Route path="/faq" element={<FAQ />} />

          {/* New Landing Pages */}
          <Route path="/agency" element={<Agency />} />
          <Route path="/accelerator" element={<Accelerator />} />
          <Route path="/design" element={<Design />} />
          <Route path="/education" element={<Education />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />

      </BrowserRouter>
    </TooltipProvider>

  </QueryClientProvider>
);

export default App;
