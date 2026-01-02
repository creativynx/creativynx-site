
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const siteData = {
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
    services: {
        items: [
            {
                icon: "Building2",
                title: "Enterprises & Startups",
                description: "Custom AI/ML solutions, web platforms, and scalable architecture built for growth.",
                features: ["AI/ML Integration", "Web Platforms", "Scalable Architecture"],
            },
            {
                icon: "GraduationCap",
                title: "Aspiring Developers",
                description: "Project-based accelerator with real mentorship and hands-on experience.",
                features: ["Project-Based Learning", "1:1 Mentorship", "Real Experience"],
            },
            {
                icon: "Palette",
                title: "Design Partners",
                description: "UI/UX design, brand identity, and visual strategy that converts.",
                features: ["UI/UX Design", "Brand Identity", "Visual Strategy"],
            },
            {
                icon: "School",
                title: "Educational Institutions",
                description: "Curriculum partnership and placement preparation programs.",
                features: ["Curriculum Partnership", "Placement Prep", "Industry Connect"],
            },
        ],
    },
    projects: {
        items: [
            {
                icon: "Bot",
                category: "AI/ML",
                title: "Intelligent Customer Support Agent",
                description: "A sophisticated RAG-based AI system for enterprise customer support automation.",
                tags: ["AI/ML", "RAG System", "Enterprise"],
            },
            {
                icon: "ShoppingCart",
                category: "Web Platform",
                title: "Next-Gen E-Commerce Platform",
                description: "Multi-vendor marketplace with advanced analytics and real-time inventory management.",
                tags: ["E-Commerce", "Multi-vendor", "Analytics"],
            },
            {
                icon: "Smartphone",
                category: "UI/UX",
                title: "Fintech Mobile App Redesign",
                description: "Complete UI/UX overhaul for a leading fintech mobile application.",
                tags: ["Fintech", "Mobile", "UI/UX"],
            },
        ],
    },
    team: {
        members: [
            {
                name: "Alex Chen",
                role: "CEO & Founder",
                bio: "Visionary leader with 15+ years in tech innovation and startup ecosystems.",
                image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                linkedin_url: "#",
                twitter_url: "#",
                github_url: "#",
            },
            {
                name: "Sarah Johnson",
                role: "CTO",
                bio: "AI/ML expert and former Google engineer driving technical excellence.",
                image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
                linkedin_url: "#",
                twitter_url: "#",
                github_url: "#",
            },
            {
                name: "Michael Park",
                role: "Head of Design",
                bio: "Award-winning designer creating experiences that delight users.",
                image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                linkedin_url: "#",
                twitter_url: "#",
                github_url: "#",
            },
            {
                name: "Emily Rodriguez",
                role: "Head of Engineering",
                bio: "Systems architect scaling platforms to millions of users.",
                image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
                linkedin_url: "#",
                twitter_url: "#",
                github_url: "#",
            },
            {
                name: "David Kim",
                role: "Head of Accelerator",
                bio: "Passionate educator nurturing the next generation of developers.",
                image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
                linkedin_url: "#",
                twitter_url: "#",
                github_url: "#",
            },
            {
                name: "Lisa Wang",
                role: "Head of Operations",
                bio: "Strategic operator ensuring seamless delivery and client success.",
                image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
                linkedin_url: "#",
                twitter_url: "#",
                github_url: "#",
            },
        ],
    },
};

async function main() {
    console.log('Start seeding ...');

    // Stats
    for (const item of siteData.stats) {
        const stat = await prisma.stat.create({
            data: item,
        });
        console.log(`Created stat with id: ${stat.id}`);
    }

    // Services
    for (const item of siteData.services.items) {
        const service = await prisma.service.create({
            data: {
                title: item.title,
                description: item.description,
                icon: item.icon,
                features: item.features,
            },
        });
        console.log(`Created service with id: ${service.id}`);
    }

    // Projects
    for (const item of siteData.projects.items) {
        const project = await prisma.project.create({
            data: {
                title: item.title,
                description: item.description,
                category: item.category,
                tags: item.tags,
                // icon and color are not in schema, ignoring to prevent errors
            },
        });
        console.log(`Created project with id: ${project.id}`);
    }

    // Team
    for (const item of siteData.team.members) {
        const member = await prisma.teamMember.create({
            data: item,
        });
        console.log(`Created team member with id: ${member.id}`);
    }

    // Admin User
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@creativynx.in' },
        update: {},
        create: {
            email: 'admin@creativynx.in',
            password: hashedPassword,
            role: 'admin'
        }
    });
    console.log(`Created admin user with id: ${admin.id}`);

    console.log('Seeding finished.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
