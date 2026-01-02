// Centralized site data - All content should be managed from this file
// Updated for production


import { platform } from "os";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const siteData = {
  // Company Information
  company: {
    name: "CreativynX",
    logo: "C",
    tagline: "Build • Deploy • Dominate",
    description: "We are a strategic technology partner that builds market-defining digital products while forging the next generation of elite tech talent.",
    founded: "2024",
    email: "info@creativynx.in",
    phone: "+91 7448891835",
    address: "Sulur, Coimbatore - 641402",
    social: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/share/1GatEJpyFk",
        icon: <FaFacebookF className="w-6 h-6" />
      },
      {
        platform: "twitter",
        url: "https://twitter.com/creativynx",
        icon: <FaXTwitter className="w-6 h-6" />
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/creativynx",
        icon: <FaInstagram className="w-6 h-6" />
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/company/creativynx",
        icon: <FaLinkedinIn className="w-6 h-6" />
      },
    ],
  },

  // Hero Section
  hero: {
    badge: "Innovation • Acceleration • Evolution",
    headline: {
      line1: "Architecting the ",
      line2Prefix: "",
      line2Highlight: "Digital Era",
      line2Suffix: "",
    },
    description: "We don't just write code; we design ecosystems. From robust backend infrastructures for enterprises to career roadmaps for aspiring engineers, we build structures that last.",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&rel=0",
    primaryCta: "Start Your Project",
    secondaryCta: "How We Work?",
    trustedBy: ["TechCorp", "InnovateLabs", "FutureDev", "CloudScale", "DataFlow"],
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
  ],

  // Stats Section
  stats: [
    {
      icon: "Rocket",
      value: "50+",
      label: "Projects Shipped",
      description: "Global Clients",
    },
    {
      icon: "Target",
      value: "98%",
      label: "Job Placement",
      description: "Accelerator Grads",
    },
    {
      icon: "TrendingDown",
      value: "30%",
      label: "Cost Reduction",
      description: "For Agency Partners",
    },
    {
      icon: "Clock",
      value: "24/7",
      label: "Innovation",
      description: "Continuous Dev Cycle",
    },
  ],

  // About Section
  about: {
    badge: "About CreativynX",
    headline: {
      prefix: "Not Just a Vendor.",
      highlight1: "A Technology Ecosystem",
      middle: "",
      highlight2: "",
    },
    description: "CreativynX is a premier software innovation hub operating a unique dual-engine model. We deliver high-impact B2B digital products for global enterprises while acting as a career accelerator for the top 1% of emerging engineering talent.",
    mission: {
      title: "Engineering Outcomes, Cultivating Careers",
      description: "To redefine the digital landscape by combining custom software development with advanced technical training. We ensure our clients receive cutting-edge, scalable solutions while building a sustainable pipeline of future-proof tech leaders.",
    },
    quickStats: [
      { value: "2+", label: "Years of Excellence" },
      { value: "24/7", label: "Global Support" },
      { value: "100%", label: "Project Success" },
    ],
    highlights: [
      { text: "Enterprise-grade B2B Software Solutions", icon: "Zap" },
      { text: "Elite Developer Training & Placement", icon: "Code2" },
      { text: "Scalable Digital Hygiene & Architecture", icon: "Shield" },
      { text: "Strategic Tech Consulting & Roadmap", icon: "Target" },
    ],
    stats: [
      { icon: "Rocket", value: "50+", label: "Digital Products Launched", color: "from-primary to-amber-500" },
      { icon: "Users", value: "200+", label: "Engineers Accelerated", color: "from-amber-500 to-orange-500" },
      { icon: "TrendingUp", value: "98%", label: "Client ROI Score", color: "from-orange-500 to-red-500" },
      { icon: "Award", value: "15+", label: "Tech Excellence Awards", color: "from-red-500 to-primary" },
    ],
  },

  // Services Section
  services: {
    badge: "OUR SERVICES",
    headline: {
      prefix: "Who We",
      highlight: "Serve",
    },
    description: "From enterprises seeking cutting-edge solutions to aspiring developers building their future.",
    items: [
      {
        id: "enterprises-startups",
        slug: "enterprises-startups",
        icon: "Building2",
        title: "Enterprises & Startups",
        description: "Custom AI/ML solutions, web platforms, and scalable architecture built for growth.",
        longDescription: "We partner with visionary enterprises and high-growth startups to build robust, scalable digital ecosystems. Our solutions are not just about code; they are about business resilience and market dominance. From AI-driven analytics to cloud-native architectures, we engineer the backbone of your digital success.",
        features: ["AI/ML Integration", "Web Platforms", "Scalable Architecture"],
        benefits: [
          "Accelerated time-to-market with our rapid deployment frameworks.",
          "Future-proof architecture designed for massive scalability.",
          "Seamless integration of advanced AI models into existing workflows.",
          "Enterprise-grade security and compliance standards."
        ]
      },
      {
        id: "aspiring-developers",
        slug: "aspiring-developers",
        icon: "GraduationCap",
        title: "Aspiring Developers",
        description: "Project-based accelerator with real mentorship and hands-on experience.",
        longDescription: "Theory is not enough. Our developer accelerator is a crucible for talent, forging the next generation of engineering leaders through intense, project-based learning. You won't just learn syntax; you'll build real systems, debug real production issues, and ship code that matters.",
        features: ["Project-Based Learning", "1:1 Mentorship", "Real Experience"],
        benefits: [
          "Gain a portfolio of deployed, production-grade applications.",
          "Direct mentorship from seasoned industry architects.",
          "Master modern tech stacks: React, Node, Python, AI/ML.",
          "Career placement assistance with our network of hiring partners."
        ]
      },
      {
        id: "design-partners",
        slug: "design-partners",
        icon: "Palette",
        title: "Design Partners",
        description: "UI/UX design, brand identity, and visual strategy that converts.",
        longDescription: "We believe that great technology deserves great design. Our design studio crafts intuitive, user-centric interfaces that drive engagement and conversion. We blend aesthetic excellence with behavioral psychology to create digital experiences that are as beautiful as they are functional.",
        features: ["UI/UX Design", "Brand Identity", "Visual Strategy"],
        benefits: [
          "Increase user retention with intuitive, frictionless UX.",
          "Establish a distinctive, premium brand identity.",
          "Data-driven design decisions that optimize conversion rates.",
          "Consistent design systems for scalable product growth."
        ]
      },
      {
        id: "educational-institutions",
        slug: "educational-institutions",
        icon: "School",
        title: "Educational Institutions",
        description: "Curriculum partnership and placement preparation programs.",
        longDescription: "We bridge the gap between academic curriculum and industry demands. By partnering with colleges and universities, we bring real-world tech exposure directly to the campus, preparing students for the rigors of the modern workforce before they graduate.",
        features: ["Curriculum Partnership", "Placement Prep", "Industry Connect"],
        benefits: [
          "Modernize curriculum with industry-relevant technologies.",
          "Improve student placement rates with targeted skill development.",
          "Faculty development programs to keep educators updated.",
          "Access to our dedicated innovation labs and hackathons."
        ]
      },
    ],
  },

  // Projects Section
  projects: {
    badge: "LATEST WORK",
    headline: {
      prefix: "Featured",
      highlight: "Projects",
    },
    items: [
      {
        icon: "Bot",
        category: "AI/ML",
        title: "Intelligent Customer Support Agent",
        description: "A sophisticated RAG-based AI system for enterprise customer support automation.",
        tags: ["AI/ML", "RAG System", "Enterprise"],
        color: "from-blue-500/20 to-indigo-500/20",
      },
      {
        icon: "ShoppingCart",
        category: "Web Platform",
        title: "Next-Gen E-Commerce Platform",
        description: "Multi-vendor marketplace with advanced analytics and real-time inventory management.",
        tags: ["E-Commerce", "Multi-vendor", "Analytics"],
        color: "from-cyan-500/20 to-sky-500/20",
      },
      {
        icon: "Smartphone",
        category: "UI/UX",
        title: "Fintech Mobile App Redesign",
        description: "Complete UI/UX overhaul for a leading fintech mobile application.",
        tags: ["Fintech", "Mobile", "UI/UX"],
        color: "from-teal-500/20 to-emerald-500/20",
      },
    ],
  },

  // Team Members
  team: {
    badge: "OUR TEAM",
    headline: {
      prefix: "Meet the",
      highlight: "Innovators",
    },
    description: "A diverse team of experts passionate about building the future of technology.",
    members: [
      {
        name: "Karthick J",
        role: "Head of Operations",
        bio: "Strategic operator ensuring seamless delivery and client success.",
        image: "",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        }
      },
      {
        name: "Udhayakumar S",
        role: "Co-Founder & Developer",
        bio: "Innovative developer architecting scalable solutions for enterprise clients.",
        image: "",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        }
      }
    ],
  },

  // Careers Section
  careers: {
    badge: "JOIN OUR TEAM",
    headline: {
      prefix: "Build the",
      highlight: "Future",
      suffix: "With Us"
    },
    description: "We are always looking for exceptional talent to join our mission. If you are passionate about technology and innovation, we want to hear from you.",
    benefits: [
      { title: "Remote-First", description: "Work from anywhere in the world.", icon: "Globe" },
      { title: "Competitive Salary", description: "Top-tier compensation packages.", icon: "Banknote" },
      { title: "Learning Budget", description: "Annual allowance for courses and conferences.", icon: "BookOpen" },
      { title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs.", icon: "Heart" },
    ],
    positions: [
      {
        id: "full-stack-engineer",
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Full-time",
        description: "We are looking for a Senior Full Stack Engineer to help us build scalable solutions for our enterprise clients.",
      },
      {
        id: "product-designer",
        title: "Product Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        description: "Join our design team to craft intuitive and beautiful user experiences.",
      },
      {
        id: "marketing-manager",
        title: "Growth Marketing Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        description: "Drive our growth strategy and help us reach more innovators worldwide.",
      },
    ]
  },

  // Press Section
  press: {
    badge: "PRESS ROOM",
    headline: {
      prefix: "In the",
      highlight: "News"
    },
    description: "Latest updates, announcements, and media resources from CreativynX.",
    news: [
      {
        date: "December 15, 2024",
        title: "CreativynX launches new Accelerator Program",
        source: "TechDaily",
        link: "#",
        summary: "We are thrilled to announce the launch of our new developer accelerator program, designed to bridge the gap between academic learning and industry needs."
      },
      {
        date: "November 20, 2024",
        title: "CreativynX Partners with TechCorp for AI Innovation",
        source: "Innovation Weekly",
        link: "#",
        summary: "A strategic partnership to bring cutting-edge AI solutions to the enterprise market."
      }
    ],
    mediaKit: {
      description: "Download our official brand assets, including logos, color palettes, and leadership bios.",
      downloadLink: "#"
    }
  },

  // Blog Section
  blog: {
    articles: [
      {
        slug: "future-of-ai-enterprise",
        title: "The Future of AI in Enterprise Software",
        excerpt: "Exploring how artificial intelligence is reshaping business operations and decision-making processes.",
        category: "AI/ML",
        author: "Sarah Johnson",
        date: "Dec 1, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        featured: true,
        content: `
          <p>Artificial Intelligence (AI) is no longer just a buzzword; it's a fundamental shift in how enterprises operate. From predictive analytics to automated customer service, AI is embedding itself into the core of business software.</p>
          <h2>The Shift to Intelligent Automation</h2>
          <p>Enterprises are moving beyond simple automation to intelligent automation. This means systems that can learn, adapt, and make decisions without constant human intervention.</p>
          <p>Key areas of impact include:</p>
          <ul>
            <li><strong>Decision Support:</strong> AI models analyzing vast datasets to provide actionable insights.</li>
            <li><strong>Customer Experience:</strong> Hyper-personalized user journeys driven by real-time behavior analysis.</li>
            <li><strong>Operational Efficiency:</strong> Predictive maintenance in manufacturing and logistics.</li>
          </ul>
          <h2>Challenges and Opportunities</h2>
          <p>While the potential is unrivaled, implementing AI comes with challenges such as data privacy, ethical considerations, and the need for new skill sets. However, companies that navigate these successfully will define the next decade of industry.</p>
        `
      },
      {
        slug: "scalable-microservices",
        title: "Building Scalable Microservices Architecture",
        excerpt: "Best practices for designing and implementing microservices that scale with your business.",
        category: "Engineering",
        author: "Emily Rodriguez",
        date: "Nov 28, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        featured: false,
        content: `
          <p>Microservices have become the de facto standard for building complex, scalable applications. But breaking a monolith into services is just the beginning.</p>
          <h2>Core Principles</h2>
          <p>To succeed with microservices, you need to adhere to key principles:</p>
          <ul>
            <li><strong>Loose Coupling:</strong> Services should be independent and communicate via well-defined APIs.</li>
            <li><strong>Database per Service:</strong> Avoid shared databases to prevent tight coupling.</li>
            <li><strong>Fault Isolation:</strong> Ensure that if one service fails, it doesn't cascade to the entire system.</li>
          </ul>
          <h2>Infrastructure as Code</h2>
          <p>Managing dozens of services requires robust infrastructure automation. Tools like Kubernetes and Terraform are essential for orchestration and deployment.</p>
        `
      },
      {
        slug: "design-systems-scale",
        title: "Design Systems That Scale",
        excerpt: "How to create and maintain design systems that grow with your product and team.",
        category: "Design",
        author: "Michael Park",
        date: "Nov 25, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        featured: false,
        content: `
          <p>A design system is more than a UI kit; it's a shared language for your product team. It bridges the gap between design and engineering.</p>
          <h2>Components of a Design System</h2>
          <p>A robust system includes:</p>
          <ul>
            <li><strong>Design Tokens:</strong> The atomic values (colors, spacing, typography).</li>
            <li><strong>Component Library:</strong> Reusable UI elements (buttons, inputs, cards).</li>
            <li><strong>Usage Guidelines:</strong> Documentation on when and how to use each component.</li>
          </ul>
        `
      },
      {
        slug: "junior-to-senior-dev",
        title: "From Junior to Senior: A Developer's Journey",
        excerpt: "Key milestones and learnings from our accelerator program graduates.",
        category: "Career",
        author: "David Kim",
        date: "Nov 22, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
        featured: false,
        content: `
          <p>The path from writing your first line of code to architecting complex systems is a journey of continuous learning. At CreativynX, we've guided hundreds of developers through this transition.</p>
          <h2>The Mindset Shift</h2>
          <p>Junior developers focus on "How do I solve this?"; Senior developers ask "Should I solve this, and what are the trade-offs?".</p>
          <p>Focus on:</p>
          <ul>
            <li>Writing maintainable, readable code over clever one-liners.</li>
            <li>Understanding the business context of your work.</li>
            <li>Mentoring others and improved communication.</li>
          </ul>
        `
      },
      {
        slug: "rise-of-edge-computing",
        title: "The Rise of Edge Computing",
        excerpt: "Understanding the shift towards distributed computing and its implications.",
        category: "Technology",
        author: "Alex Chen",
        date: "Nov 18, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        featured: false,
        content: `
          <p>Edge computing is bringing computation and data storage closer to the location where it is needed.</p>
          <h2>Why Edge?</h2>
          <p>With the explosion of IoT devices and the need for real-time processing, sending everything to a central cloud is becoming inefficient due to latency and bandwidth costs.</p>
        `
      },
      {
        slug: "securing-modern-web-apps",
        title: "Securing Modern Web Applications",
        excerpt: "Essential security practices every developer should implement in 2024.",
        category: "Security",
        author: "Emily Rodriguez",
        date: "Nov 15, 2024",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
        featured: false,
        content: `
          <p>Security cannot be an afterthought. In the modern web landscape, vulnerabilities are exploited in minutes.</p>
          <h2>Top Priorities</h2>
          <ul>
            <li><strong>Dependency Management:</strong> Regularly audit your npm packages.</li>
            <li><strong>Input Validation:</strong> Never trust user input. Sanitize everything.</li>
            <li><strong>Authentication:</strong> Implement robust auth flows like OAuth2 and OIDC.</li>
          </ul>
        `
      },
    ]
  },

  // Footer
  footer: {
    cta: {
      headline: {
        prefix: "Ready to",
        highlight: "Dominate",
      },
      description: "Join the ecosystem where innovation meets execution. Subscribe to our newsletter for tech trends and hiring alerts.",
      buttonText: "Subscribe",
      placeholder: "Enter your email",
    },
    links: {
      Company: [
        {
          lable: "Team",
          link: "/team"
        },
        {
          lable: "Careers",
          link: "/careers"
        },
        {
          lable: "Press",
          link: "/press"
        },
        {
          lable: "Blog",
          link: "/blog"
        }
      ],
      Services: [
        {
          lable: "Agency",
          link: "/agency"
        },
        {
          lable: "Accelerator",
          link: "/accelerator"
        },
        {
          lable: "Design",
          link: "/design"
        },
        {
          lable: "Education",
          link: "/education"
        }
      ],
      Resources: [
        {
          lable: "Projects",
          link: "/projects"
        },
        {
          lable: "Roadmap",
          link: "/roadmap"
        },
        {
          lable: "Verify Certificate",
          link: "/verify-certificate"
        },
        {
          lable: "FAQ",
          link: "/faq"
        }
      ],
      Legal: [
        {
          lable: "Privacy",
          link: "/privacy"
        },
        {
          lable: "Terms",
          link: "/terms"
        },
        {
          lable: "Cookies",
          link: "/cookies"
        },
        {
          lable: "Site Map",
          link: "/sitemap"
        }
      ],
    },
    social: [
      { platform: "Facebook", href: "https://www.facebook.com/share/1GatEJpyFk", icon: "Facebook" },
      { platform: "Instagram", href: "https://www.instagram.com/creativynx/", icon: "Instagram" },
      { platform: "Linkedin", href: "https://www.linkedin.com/in/creativynx/", icon: "Linkedin" },
      { platform: "Github", href: "https://github.com/creativynx", icon: "Github" },
    ],
    copyright: "© 2024 CreativynX. All rights reserved.",
    credit: {
      prefix: "Designed & Developed by",
      suffix: "",
      company: {
        name: "Creativyn",
        prefix: "",
        suffix: "X",
        link: "https://www.creativynx.in"
      }
    }
  },



  // FAQ Section
  faq: {
    badge: "FAQ",
    headline: {
      prefix: "Frequently Asked",
      highlight: "Questions",
    },
    description: "Got questions? We've got answers. Everything you need to know about our services and process.",
    items: [
      {
        question: "What makes CreativynX different from other software agencies?",
        answer: "CreativynX operates on a unique dual-engine model. We are both a high-end software development firm and an elite talent accelerator. This means our clients get cutting-edge solutions built by top-tier talent, while we continuously cultivate the next generation of engineering leaders. We focus on long-term partnership and scalable architecture, not just one-off projects.",
      },
      {
        question: "How do you handle project communication and updates?",
        answer: "We believe in radical transparency. Clients get access to a dedicated project dashboard, weekly sprint reports, and direct channels (Slack/Teams) to their engineering pod. You'll always know exactly where your project stands, what's being built, and what's coming next.",
      },
      {
        question: "Do you work with startups or only established enterprises?",
        answer: "We work with visionaries across the spectrum. For startups, we act as a fractional CTO/Tech Team, helping you build your MVP and scale rapidly. For enterprises, we function as a specialized innovation unit to tackle complex architectural challenges or build new digital products.",
      },
      {
        question: "What is your typical project timeline?",
        answer: "Timelines vary by complexity. A typical MVP can take 8-12 weeks, while large-scale enterprise platforms may take 6+ months. We start every engagement with a detailed roadmap phase to align on deliverables and timelines before writing a single line of code.",
      },
      {
        question: "What technologies do you specialize in?",
        answer: "We are stack-agnostic but opinionated about quality. Our core expertise lies in modern web and mobile stacks: React/Next.js, Node.js, Python/Django/FastAPI, Flutter, and Cloud Native technologies (AWS/GCP, Kubernetes, Docker). We also have deep capabilities in AI/ML integration.",
      },
      {
        question: "How can I join the Accelerator Program?",
        answer: "Our accelerator is selective. You can apply through our Careers page. We look for fundamental coding skills, problem-solving ability, and most importantly, a hunger to learn. The program is intensive and project-based, designed to fast-track your journey to becoming a Senior Engineer.",
      },
    ],
  },

  // Agency Page Data
  agency: {
    badge: "AGENCY SERVICES",
    headline: {
      prefix: "Enterprise-Grade",
      highlight: "Software Solutions",
    },
    description: "We build robust, scalable, and secure digital products for ambitious enterprises and high-growth startups.",
    features: [
      { icon: "Code2", title: "Custom Development", description: "Tailored software built from the ground up to meet your specific business needs." },
      { icon: "Cloud", title: "Cloud Native", description: "Scalable architecture on AWS, Azure, or GCP using modern serverless patterns." },
      { icon: "Smartphone", title: "Mobile First", description: "Native and cross-platform mobile applications that provide seamless user experiences." },
      { icon: "Shield", title: "Security by Design", description: "Bank-grade security protocols integrated into every layer of your application." },
    ],
    cta: "Start Your Project",
  },

  // Accelerator Page Data
  accelerator: {
    badge: "CAREER ACCELERATOR",
    headline: {
      prefix: "Forge Your",
      highlight: "Engineering Career",
    },
    description: "An intensive, project-based program designed to transform aspiring coders into elite software engineers.",
    features: [
      { icon: "Rocket", title: "Project-Based Learning", description: "Work on real-world projects that are deployed to production, not just toy apps." },
      { icon: "Users", title: "1:1 Mentorship", description: "Direct guidance from senior architects and industry veterans." },
      { icon: "Briefcase", title: "Career Placement", description: "Interview prep, resume review, and direct referrals to hiring partners." },
      { icon: "Award", title: "Industry Certification", description: "Earn a recognized credential upon successful program completion." },
    ],
    cta: "Apply Now",
  },

  // Design Page Data
  design: {
    badge: "DESIGN STUDIO",
    headline: {
      prefix: "Design That",
      highlight: "Drives Growth",
    },
    description: "We craft intuitive, user-centric interfaces that blend aesthetic excellence with behavioral psychology.",
    features: [
      { icon: "Palette", title: "UI/UX Design", description: "Beautiful, functional interfaces designed to maximize user engagement." },
      { icon: "Layout", title: "Design Systems", description: "Scalable component libraries that ensure consistency across your products." },
      { icon: "Eye", title: "Brand Identity", description: "Distinctive visual branding that sets you apart from the competition." },
      { icon: "MousePointer", title: "Prototyping", description: "Interactive high-fidelity prototypes to validate concepts before coding." },
    ],
    cta: "View Portfolio",
  },

  // Education Page Data
  education: {
    badge: "INSTITUTIONAL PARTNERSHIPS",
    headline: {
      prefix: "Empowering",
      highlight: "Future Innovators",
    },
    description: "We partner with educational institutions to bridge the gap between academic curriculum and industry demands.",
    features: [
      { icon: "School", title: "Curriculum Modernization", description: "Updating syllabus with cutting-edge technologies and industry best practices." },
      { icon: "MonitorPlay", title: "Faculty Development", description: "Training programs to help educators stay current with tech trends." },
      { icon: "Trophy", title: "Innovation Labs", description: "Setting up dedicated spaces for students to experiment and build startups." },
      { icon: "Calendar", title: "Workshops & Hackathons", description: "Regular events to foster a culture of coding and innovation on campus." },
    ],
    cta: "Partner With Us",
  },

  // Certification Verification Page
  certification: {
    title: "Certificate Verification",
    description: "Verify the authenticity of CreativynX certificates. Enter the certificate ID to check if it's valid.",
    placeholder: "Enter Certificate ID (e.g., CRX-2024-001)",
    buttonText: "Verify",
    features: [
      {
        icon: "Shield",
        title: "Secure Verification",
        description: "All certificates are cryptographically signed and tamper-proof.",
      },
      {
        icon: "CheckCircle",
        title: "Instant Results",
        description: "Get verification results in seconds with our real-time system.",
      },
      {
        icon: "Award",
        title: "Official Recognition",
        description: "CreativynX certificates are recognized by industry partners worldwide.",
      },
    ],
  },
};

export type SiteData = typeof siteData;
export default siteData;
