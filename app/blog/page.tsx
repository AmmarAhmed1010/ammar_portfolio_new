import { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '../../components/section';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and updates about web development and design.',
};

// Mock blog posts data
const posts = [
  {
    slug: 'getting-started-with-nextjs-13',
    title: 'Getting Started with Next.js 13',
    excerpt: 'Learn how to build modern web applications with Next.js 13 and the App Router.',
    date: '2023-05-15',
    readTime: '5 min read',
    category: 'Tutorial',
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS',
    excerpt: 'Advanced techniques and best practices for working with Tailwind CSS in production.',
    date: '2023-04-22',
    readTime: '7 min read',
    category: 'Guide',
  },
  {
    slug: 'state-management-in-react',
    title: 'State Management in React',
    excerpt: 'Comparing different state management solutions for React applications.',
    date: '2023-03-10',
    readTime: '8 min read',
    category: 'Article',
  },
];

export default function BlogPage() {
  return (
    <Section>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-muted-foreground mb-12">
            Thoughts, tutorials, and updates about web development and design.
          </p>

          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-48 flex-shrink-0">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      {/* Placeholder for post image */}
                      <div className="w-full h-full bg-muted/50" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-muted">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read more
                      <svg 
                        className="ml-1 h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-between items-center">
            <button 
              disabled 
              className="px-4 py-2 rounded-md border border-muted text-muted-foreground cursor-not-allowed"
            >
              Previous
            </button>
            <div className="text-sm text-muted-foreground">
              Page 1 of 1
            </div>
            <button 
              className="px-4 py-2 rounded-md border border-muted hover:bg-muted/50 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
