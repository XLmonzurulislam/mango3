
import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";

const blogs = [
  {
    title: "Building Modern Web Applications with React and TypeScript",
    description: "Learn how to leverage React and TypeScript to build scalable, type-safe web applications with modern best practices.",
    date: "2024-03-15",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070"
  },
  {
    title: "Understanding State Management in React",
    description: "Dive deep into various state management solutions in React, from useState to Redux and everything in between.",
    date: "2024-03-10",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074"
  },
  {
    title: "The Complete Guide to CSS Grid",
    description: "Master CSS Grid layout with practical examples and real-world use cases to create responsive web designs.",
    date: "2024-03-05",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070"
  },
  {
    title: "Getting Started with Next.js",
    description: "Learn how to build fast, SEO-friendly web applications using Next.js, the React framework for production.",
    date: "2024-03-01",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070"
  },
  {
    title: "Introduction to TailwindCSS",
    description: "Discover how to build modern user interfaces rapidly with TailwindCSS utility-first approach.",
    date: "2024-02-25",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031"
  },
  {
    title: "Mastering Git Version Control",
    description: "Essential Git commands and workflows every developer should know for effective collaboration.",
    date: "2024-02-20",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2066"
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the latest articles about web development, programming tips, and tech insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
