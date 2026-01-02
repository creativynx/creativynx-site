import { Calendar, Clock, ArrowRight, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { siteData } from "@/data/siteData";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
  const { blog } = siteData;
  const articles = blog.articles;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs text-primary font-medium">BLOG & INSIGHTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Insights, tutorials, and thoughts from our team of experts.
            </p>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <div className="glass-card rounded-3xl overflow-hidden mb-12 opacity-0 animate-fade-in-up">
              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit mb-4">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold font-display text-foreground mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <Link to={`/blog/${featuredArticle.slug}`}>
                    <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group w-fit">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <article
                key={article.title}
                className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group opacity-0 animate-fade-in-up h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/blog/${article.slug}`} className="block flex-grow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium w-fit">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold font-display text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-24 bg-card/50 rounded-3xl border border-border/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-2">Thoughts Brewing</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Our experts are crafting deep dives and tutorials. Stay tuned for the first drop.
              </p>
            </div>
          )}
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Blog;
