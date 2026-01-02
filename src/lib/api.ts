import { siteData } from '@/data/siteData';

// Helper to generate simple IDs
const generateId = (prefix: string, index: number) => `${prefix}-${index + 1}`;

export const api = {
    getTeam: async () => {
        // Map static team members to expected TeamMember interface
        return siteData.team.members.map((m, i) => ({
            id: generateId('team', i),
            name: m.name,
            role: m.role,
            bio: m.bio,
            image_url: m.image,
            linkedin_url: m.social.linkedin,
            twitter_url: m.social.twitter,
            github_url: m.social.github,
            display_order: i + 1,
            is_active: true
        }));
    },
    getProjects: async () => {
        // Map static projects to expected Project interface
        return siteData.projects.items.map((p, i) => ({
            id: generateId('proj', i),
            title: p.title,
            description: p.description,
            category: p.category,
            tags: p.tags,
            link: '#', // Default link
            // Include extra visual props if needed by component, though component handles mapping too
            icon: p.icon,
            color: p.color
        }));
    },
    getServices: async () => {
        // Map static services to expected Service interface
        return siteData.services.items.map((s, i) => ({
            id: s.id || generateId('service', i),
            title: s.title,
            description: s.description,
            icon: s.icon,
            features: s.features,
            display_order: i + 1,
            is_active: true
        }));
    },
    getStats: async () => {
        // Map static stats to expected Stat interface
        return siteData.stats.map((s, i) => ({
            id: generateId('stat', i),
            label: s.label,
            value: s.value,
            icon: s.icon,
            description: s.description,
            display_order: i + 1,
            is_active: true
        }));
    }
};
