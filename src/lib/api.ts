const API_URL = 'http://localhost:3000/api';

export const api = {
    getTeam: async () => {
        const res = await fetch(`${API_URL}/team`);
        if (!res.ok) throw new Error('Failed to fetch team data');
        return res.json();
    },
    getProjects: async () => {
        const res = await fetch(`${API_URL}/projects`);
        if (!res.ok) throw new Error('Failed to fetch projects data');
        return res.json();
    },
    getServices: async () => {
        const res = await fetch(`${API_URL}/services`);
        if (!res.ok) throw new Error('Failed to fetch services data');
        return res.json();
    },
    getStats: async () => {
        const res = await fetch(`${API_URL}/stats`);
        if (!res.ok) throw new Error('Failed to fetch stats data');
        return res.json();
    }
};
