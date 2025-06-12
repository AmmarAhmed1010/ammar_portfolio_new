import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '../../../components/section'; // Adjusted for the directory depth

// This would normally fetch the post data from a CMS or markdown files
async function getPost(slug: string) {
  // In a real app, you would fetch the post from a CMS or markdown files
  const posts = [
    {
      slug: 'getting-started-with-nextjs-13',
      title: 'Getting Started with Next.js 13',
      excerpt: 'Learn how to build modern web applications with Next.js 13 and the App Router.',
      content: `
        <h2>Introduction to Next.js 13</h2>
        <p>Next.js 13 introduces many exciting new features and improvements that make building React applications even better. In this post, we'll explore the key features and how to get started.</p>
        
        <h3>App Router</h3>
        <p>The new App Router brings a new way to build applications with server components, nested layouts, and more.</p>
        
        <h3>Server Components</h3>
        <p>Server Components allow you to write UI that can be rendered on the server, reducing the amount of JavaScript sent to the client.</p>
        
        <h3>Conclusion</h3>
        <p>Next.js 13 is a powerful update that makes it easier than ever to build fast, interactive web applications with React.</p>
      `,
      date: '2023-05-15',
      readTime: '5 min read',
      category: 'Tutorial',
      author: {
        name: 'Anas Irfan',
        avatar: '/avatar.jpg',
      },
    },
    // Add more mock posts as needed
  ];

  const post = posts.find((post) => post.slug === slug);
  
  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <svg 
              className="mr-1 h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to blog
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
            <span className="px-2 py-0.5 text-xs rounded-full bg-muted">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
              {/* Placeholder for author avatar */}
              <div className="w-full h-full bg-muted/50" />
            </div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-16 pt-8 border-t border-muted">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Mastering Tailwind CSS',
                excerpt: 'Advanced techniques and best practices for working with Tailwind CSS in production.',
                slug: 'mastering-tailwind-css',
              },
              {
                title: 'State Management in React',
                excerpt: 'Comparing different state management solutions for React applications.',
                slug: 'state-management-in-react',
              },
            ].map((relatedPost) => (
              <Link 
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="block p-4 rounded-lg border border-muted hover:border-primary/50 transition-colors group"
              >
                <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
