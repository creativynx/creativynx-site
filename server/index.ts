import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const app = express();
const port = 3000;
const JWT_SECRET = 'your-secret-key-change-this-in-prod'; // Simple secret for dev

app.use(cors());
app.use(express.json());

// Helper to wrap async routes
const asyncHandler = (fn: any) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// Authentication Middleware
const authMiddleware = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// --- Auth Routes ---
app.post('/api/auth/login', asyncHandler(async (req: any, res: any) => {
    const { email, password } = req.body;
    console.log('🔐 Login attempt for:', email);

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        console.log('❌ User not found:', email);
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    console.log('✅ User found, checking password...');
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        console.log('✅ Password correct, generating token');
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
        res.json({
            user: { id: user.id, email: user.email, role: user.role },
            token
        });
    } else {
        console.log('❌ Password incorrect');
        res.status(401).json({ error: 'Invalid credentials' });
    }
}));

app.get('/api/auth/me', authMiddleware, asyncHandler(async (req: any, res: any) => {
    // req.user is populated by middleware
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (user) {
        res.json({ user: { id: user.id, email: user.email, role: user.role } });
    } else {
        res.sendStatus(404);
    }
}));


// --- Content Routes (Public) ---

app.get('/api/team', asyncHandler(async (req: any, res: any) => {
    const team = await prisma.teamMember.findMany({
        orderBy: { display_order: 'asc' },
        where: { is_active: true }
    });
    res.json(team);
}));

app.get('/api/projects', asyncHandler(async (req: any, res: any) => {
    const projects = await prisma.project.findMany({
        orderBy: { display_order: 'asc' },
        where: { is_active: true }
    });
    res.json(projects);
}));

app.get('/api/services', asyncHandler(async (req: any, res: any) => {
    const services = await prisma.service.findMany({
        orderBy: { display_order: 'asc' },
        where: { is_active: true }
    });
    res.json(services);
}));

app.get('/api/stats', asyncHandler(async (req: any, res: any) => {
    const stats = await prisma.stat.findMany({
        orderBy: { display_order: 'asc' },
        where: { is_active: true }
    });
    res.json(stats);
}));

app.get('/api/certifications', asyncHandler(async (req: any, res: any) => {
    // Check if looking up a specific cert by ID
    const { id } = req.query;
    if (id) {
        const cert = await prisma.certification.findUnique({
            where: { certificate_id: String(id) }
        });
        if (cert) return res.json(cert);
        return res.status(404).json({ error: "Certificate not found" });
    }

    // Otherwise list all (useful for admin, maybe filter for public?)
    // For now, public endpoint lists all active? Probably not secure for certifications to list all public.
    // Let's restrict list to admin, but lookup to public.
    // Actually, following existing pattern:
    res.status(403).json({ error: "List access forbidden" });
}));


// --- Admin Routes (Protected) ---

// Services
app.post('/api/services', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const service = await prisma.service.create({ data: req.body });
    res.json(service);
}));
app.put('/api/services/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const service = await prisma.service.update({ where: { id: req.params.id }, data: req.body });
    res.json(service);
}));
app.delete('/api/services/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    await prisma.service.delete({ where: { id: req.params.id } });
    res.json({ success: true });
}));

// Projects
app.post('/api/projects', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const project = await prisma.project.create({ data: req.body });
    res.json(project);
}));
app.put('/api/projects/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const project = await prisma.project.update({ where: { id: req.params.id }, data: req.body });
    res.json(project);
}));
app.delete('/api/projects/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    await prisma.project.delete({ where: { id: req.params.id } });
    res.json({ success: true });
}));

// Team
app.post('/api/team', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const member = await prisma.teamMember.create({ data: req.body });
    res.json(member);
}));
app.put('/api/team/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const member = await prisma.teamMember.update({ where: { id: req.params.id }, data: req.body });
    res.json(member);
}));
app.delete('/api/team/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    await prisma.teamMember.delete({ where: { id: req.params.id } });
    res.json({ success: true });
}));

// Stats
app.post('/api/stats', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const stat = await prisma.stat.create({ data: req.body });
    res.json(stat);
}));
app.put('/api/stats/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const stat = await prisma.stat.update({ where: { id: req.params.id }, data: req.body });
    res.json(stat);
}));
app.delete('/api/stats/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    await prisma.stat.delete({ where: { id: req.params.id } });
    res.json({ success: true });
}));

// Certifications (Admin)
app.get('/api/admin/certifications', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const certs = await prisma.certification.findMany({ orderBy: { issue_date: 'desc' } });
    res.json(certs);
}));
app.post('/api/certifications', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const cert = await prisma.certification.create({ data: req.body });
    res.json(cert);
}));
app.put('/api/certifications/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    const cert = await prisma.certification.update({ where: { id: req.params.id }, data: req.body });
    res.json(cert);
}));
app.delete('/api/certifications/:id', authMiddleware, asyncHandler(async (req: any, res: any) => {
    await prisma.certification.delete({ where: { id: req.params.id } });
    res.json({ success: true });
}));


// Basic health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
