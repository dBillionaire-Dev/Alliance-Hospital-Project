import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRecentBlogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Calendar, Tag, ChevronLeft, Share2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const recentPosts = getRecentBlogPosts(3).filter((p) => p.id !== post.id)

  // Estimate reading time (rough calculation: 200 words per minute)
  const wordCount = post.content.replace(/<[^>]*>/g, "").split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto" delay={100}>
            <Link
              href="/blogs"
              className="inline-flex items-center text-white hover:text-primary/90 mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all blogs
            </Link>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">{post.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-200">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{readingTime} min read</span>
              </div>
              <div className="flex items-center">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar || "/placeholder.svg?height=24&width=24"}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
                  />
                ) : (
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-xs">{post.author.name.charAt(0)}</span>
                  </div>
                )}
                <span>
                  {post.author.name}, {post.author.role}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 md:p-10">
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-10 pt-6 border-t">
                      <div className="flex flex-wrap gap-2 items-center">
                        <Tag className="h-4 w-4 text-gray-500" />
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-gray-100">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Share this article</h4>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon" className="rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-facebook"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            <span className="sr-only">Share on Facebook</span>
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-twitter"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                            <span className="sr-only">Share on Twitter</span>
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-linkedin"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className="sr-only">Share on LinkedIn</span>
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-mail"
                            >
                              <rect width="20" height="16" x="2" y="4" rx="2" />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span className="sr-only">Share via Email</span>
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Copy Link
                      </Button>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t">
                    <div className="flex items-center gap-4">
                      {post.author.avatar ? (
                        <Image
                          src={post.author.avatar || "/placeholder.svg?height=80&width=80"}
                          alt={post.author.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center">
                          <span className="text-secondary font-bold text-xl">{post.author.name.charAt(0)}</span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-lg">About the Author</h4>
                        <p className="text-gray-700">
                          {post.author.name}, {post.author.role}
                        </p>
                        <p className="text-gray-600 mt-1">
                          Healthcare professional dedicated to providing quality medical information and care.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Continue Reading</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {recentPosts.slice(0, 2).map((recentPost) => (
                    <Link
                      key={recentPost.id}
                      href={`/blogs/${recentPost.slug}`}
                      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={recentPost.coverImage || "/placeholder.svg?height=300&width=500"}
                          alt={recentPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-lg mb-2">{recentPost.title}</h4>
                        <p className="text-gray-600 line-clamp-2">{recentPost.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Table of Contents</h3>
                <nav className="space-y-2 mb-8">
                  <a
                    href="#introduction"
                    className="block text-gray-700 hover:text-primary transition-colors py-1 border-l-2 border-gray-200 hover:border-primary pl-3"
                  >
                    Introduction
                  </a>
                  <a
                    href="#main-content"
                    className="block text-gray-700 hover:text-primary transition-colors py-1 border-l-2 border-gray-200 hover:border-primary pl-3"
                  >
                    Main Content
                  </a>
                  <a
                    href="#conclusion"
                    className="block text-gray-700 hover:text-primary transition-colors py-1 border-l-2 border-gray-200 hover:border-primary pl-3"
                  >
                    Conclusion
                  </a>
                </nav>

                <div className="border-t pt-6 mt-6">
                  <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
                  <div className="space-y-6">
                    {recentPosts.map((recentPost) => (
                      <div key={recentPost.id} className="flex gap-4">
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={recentPost.coverImage || "/placeholder.svg?height=80&width=80"}
                            alt={recentPost.title}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 mb-1">
                            <Link href={`/blogs/${recentPost.slug}`} className="hover:text-primary transition-colors">
                              {recentPost.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500">
                            {new Date(recentPost.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/blogs?category=Health Tips">
                      <Badge className="bg-gray-100 hover:bg-gray-200 text-gray-800">Health Tips</Badge>
                    </Link>
                    <Link href="/blogs?category=Hospital News">
                      <Badge className="bg-gray-100 hover:bg-gray-200 text-gray-800">Hospital News</Badge>
                    </Link>
                    <Link href="/blogs?category=Medical Research">
                      <Badge className="bg-gray-100 hover:bg-gray-200 text-gray-800">Medical Research</Badge>
                    </Link>
                    <Link href="/blogs?category=Events">
                      <Badge className="bg-gray-100 hover:bg-gray-200 text-gray-800">Events</Badge>
                    </Link>
                    <Link href="/blogs?category=Staff Spotlight">
                      <Badge className="bg-gray-100 hover:bg-gray-200 text-gray-800">Staff Spotlight</Badge>
                    </Link>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
                  <p className="text-gray-600 mb-4">Stay updated with our latest health tips and hospital news.</p>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
