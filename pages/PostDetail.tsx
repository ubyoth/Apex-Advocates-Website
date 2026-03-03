import React from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the post that matches the URL slug
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // If no post is found
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back Button */}
        <Link
          to="/knowledge"
          className="text-accent-gold text-sm font-bold mb-6 inline-block"
        >
          ← Back to Knowledge Centre
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-black mb-4 text-black dark:text-white">
          {post.title}
        </h1>

        {/* Meta Info */}
        <p className="text-sm text-slate-500 mb-8">
          {post.date} • {post.readTime} • By {post.author}
        </p>

        {/* Article Content */}
        <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

      </div>
    </div>
  );
};

export default PostDetail;