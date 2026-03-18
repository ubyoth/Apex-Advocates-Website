import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/knowledge`;
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;

type Post = {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date?: string;
  readTime?: string;
  author?: string;
};

function parsePostDate(input?: string): Date | null {
  if (!input) return null;

  const iso = /^(\d{4})-(\d{2})-(\d{2})$/;
  const mIso = input.match(iso);
  if (mIso) {
    const y = Number(mIso[1]);
    const mo = Number(mIso[2]);
    const d = Number(mIso[3]);
    const dt = new Date(Date.UTC(y, mo - 1, d));
    return Number.isNaN(dt.getTime()) ? null : dt;
  }

  const parsed = new Date(input);
  if (!Number.isNaN(parsed.getTime())) {
    const y = parsed.getUTCFullYear();
    const mo = parsed.getUTCMonth();
    const d = parsed.getUTCDate();
    return new Date(Date.UTC(y, mo, d));
  }

  return null;
}

function formatDisplayDate(input?: string): string {
  const dt = parsePostDate(input);
  if (!dt) return "Updated";

  return dt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatIsoDate(input?: string): string | undefined {
  const dt = parsePostDate(input);
  if (!dt) return undefined;

  const y = dt.getUTCFullYear();
  const m = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const d = String(dt.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const KnowledgeCentre: React.FC = () => {
  const POSTS_PER_CLICK = 4;
  const [visiblePosts, setVisiblePosts] = useState<number>(POSTS_PER_CLICK);

  const handleLoadMore = () => setVisiblePosts((prev) => prev + POSTS_PER_CLICK);

  const posts = BLOG_POSTS as unknown as Post[];

  const blogJsonLd = useMemo(() => {
    const items = posts.slice(0, Math.min(posts.length, 20)).map((post) => {
      const iso = formatIsoDate(post.date);

      return {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `${SITE_URL}/knowledge/${post.slug}`,
        image: post.imageUrl ? [post.imageUrl] : undefined,
        author: post.author
          ? { "@type": "Person", name: post.author }
          : { "@type": "Organization", name: "Apex Sports Law" },
        publisher: { "@type": "Organization", name: "Apex Sports Law" },
        datePublished: iso,
        dateModified: iso,
      };
    });

    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Apex Sports Law Knowledge Centre",
      url: PAGE_URL,
      description:
        "Legal insights on sports law, FIFA regulations, football contracts, arbitration and dispute resolution.",
      blogPost: items,
    };
  }, [posts]);

  return (
    <>
      <Helmet>
        <title>Sports Law Articles & Legal Briefs | Apex Sports Law Knowledge Centre</title>
        <meta
          name="description"
          content="Legal insights on sports law, FIFA regulations, football contracts, arbitration and dispute resolution from Apex Sports Law in Lagos, Nigeria."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Sports Law" />
        <meta
          property="og:title"
          content="Apex Knowledge Centre | Sports Law Articles & Legal Briefs"
        />
        <meta
          property="og:description"
          content="Read legal briefs on football contracts, transfers, FIFA regulations, arbitration and dispute resolution."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Apex Sports Law Knowledge Centre | Sports Law Articles & Legal Briefs"
        />
        <meta
          name="twitter:description"
          content="Legal briefs on football contracts, transfers, FIFA regulations, arbitration and dispute resolution."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white mb-6">
              Knowledge Centre
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xl leading-relaxed">
              Strategic analysis and regulatory updates. Stay informed, stay ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.slice(0, visiblePosts).map((post) => {
              const displayDate = formatDisplayDate(post.date);
              const isoDate = formatIsoDate(post.date);

              return (
                <article
                  key={post.slug}
                  className="bg-white dark:bg-secondary-grey/10 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-accent-gold/5 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={post.imageUrl}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute top-4 left-4 bg-black text-accent-gold text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest border border-accent-gold/20">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-[10px] text-accent-gold font-black uppercase mb-3 tracking-widest opacity-70">
                      {isoDate ? <time dateTime={isoDate}>{displayDate}</time> : displayDate}
                      {post.readTime ? ` • ${post.readTime}` : ""}
                    </p>

                    <Link to={`/knowledge/${post.slug}`}>
                      <h3 className="text-xl font-bold mb-4 text-black dark:text-white leading-tight">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/knowledge/${post.slug}`}
                      className="text-accent-gold text-xs font-bold flex items-center gap-2"
                    >
                      Read Full Brief <span className="material-icons text-sm">east</span>
                    </Link>

                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-accent-gold/10">
                      <span className="text-xs font-bold text-black dark:text-slate-300">
                        By {post.author || "Apex Sports Law"}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex justify-center pt-8">
            {visiblePosts < posts.length && (
              <button
                type="button"
                onClick={handleLoadMore}
                className="flex items-center gap-3 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-10 py-4 rounded-xl font-bold transition-all group"
              >
                Load More Articles
                <span className="material-icons text-lg">refresh</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowledgeCentre;
