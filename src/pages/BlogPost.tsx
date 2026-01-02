
import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import BlogInteraction from "@/components/BlogInteraction";
import { useEffect } from "react";

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const { blog } = siteData;
    const article = blog.articles.find((a) => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />

            <main className="pt-32 pb-20">
                <article className="container mx-auto px-6 md:px-12 lg:px-24 max-w-5xl">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="text-xs text-primary font-medium">{article.category}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-display mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-muted-foreground text-sm border-b border-border pb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                    <User className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-foreground">{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="rounded-3xl overflow-hidden mb-12 shadow-lg aspect-video w-full">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Body */}
                    <div className="grid md:grid-cols-[1fr_200px] gap-12">
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: article.content || "" }}
                        />

                        {/* Sidebar (Share / TOC placeholder) */}
                        <div className="hidden md:block space-y-8">
                            <div className="sticky top-32">
                                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Share</p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="icon" className="rounded-full">
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                    {/* Add more social share buttons here if needed */}
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
                {article.slug && (
                    <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-5xl">
                        <BlogInteraction slug={article.slug} />
                    </div>
                )}
            </main>

            <FooterCTA />
        </div>
    );
};

export default BlogPost;
