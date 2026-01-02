import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Loader2, LogOut, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesAdmin from '@/components/admin/ServicesAdmin';
import ProjectsAdmin from '@/components/admin/ProjectsAdmin';
import TeamAdmin from '@/components/admin/TeamAdmin';
import StatsAdmin from '@/components/admin/StatsAdmin';
import CertificationsAdmin from '@/components/admin/CertificationsAdmin';

const Admin = () => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    if (!isLoading && user && !isAdmin) {
      navigate('/');
    }
  }, [user, isAdmin, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-display font-bold">Admin Dashboard</h1>
          </div>
          <Button variant="ghost" onClick={signOut} className="gap-2">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-flex">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <ServicesAdmin />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsAdmin />
          </TabsContent>

          <TabsContent value="team">
            <TeamAdmin />
          </TabsContent>

          <TabsContent value="stats">
            <StatsAdmin />
          </TabsContent>

          <TabsContent value="certifications">
            <CertificationsAdmin />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
