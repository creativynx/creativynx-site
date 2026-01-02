
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Newspaper, Share2, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const PressPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const { press } = siteData;
    const article = press.news.find((a) => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return <Navigate to="/press" replace />;
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />

            <main className="pt-32 pb-20">
                <article className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link to="/press" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to News
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="text-xs text-primary font-medium">{article.source}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex items-center justify-center md:justify-start gap-4 text-muted-foreground text-sm border-b border-border pb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{article.date}</span>
                            </div>
                        </div>
                    </header>

                    {/* Content Body */}
                    <div className="grid md:grid-cols-[1fr_auto] gap-12">
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: article.content || "" }}
                        />

                        {/* Sidebar (Share) */}
                        <div className="hidden md:block">
                            <div className="sticky top-32 flex flex-col items-center gap-4">
                                <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50 hover:bg-secondary">
                                    <Share2 className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                </article>
            </main>

            <FooterCTA />
        </div>
    );
};

export default PressPost;
