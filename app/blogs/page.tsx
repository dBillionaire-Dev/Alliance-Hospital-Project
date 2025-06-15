import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts, getBlogPostsByCategory } from "@/lib/blog-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, health tips, and updates from Alliance Hospital.",
}

export default function BlogsPage() {
  const allPosts = getBlogPosts()
  const healthTips = getBlogPostsByCategory("Health Tips")
  const hospitalNews = getBlogPostsByCategory("Hospital News")
  const events = getBlogPostsByCategory("Events")
  const medicalResearch = getBlogPostsByCategory("Medical Research")

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Our Latest Blogs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Stay Informed & Healthy</h1>
            <p className="text-gray-200 text-lg">
              Discover the latest health tips, medical advancements, and hospital news from our expert team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <AnimatedSection className="flex justify-center mb-8 overflow-x-auto pb-2 blog-tabs" delay={200}>
              <TabsList className="bg-white/20 flex flex-wrap justify-center">
                <TabsTrigger value="all" className="px-4 py-2">
                  All Posts
                </TabsTrigger>
                <TabsTrigger value="hospital-news" className="px-4 py-2">
                  Hospital News
                </TabsTrigger>
                <TabsTrigger value="events" className="px-4 py-2">
                  Events
                </TabsTrigger>
                <TabsTrigger value="health-tips" className="px-4 py-2">
                  Health Tips
                </TabsTrigger>
                <TabsTrigger value="medical-research" className="px-4 py-2">
                  Medical Research
                </TabsTrigger>
              </TabsList>
            </AnimatedSection>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {allPosts.map((post, index) => (
                  <AnimatedSection key={post.id} delay={300 + index * 100} className="w-full max-w-sm">
                    <BlogCard post={post} />
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hospital-news">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {hospitalNews.length > 0 ? (
                  hospitalNews.map((post, index) => (
                    <AnimatedSection key={post.id} delay={300 + index * 100} className="w-full max-w-sm">
                      <BlogCard post={post} />
                    </AnimatedSection>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-gray-600">No hospital news posts available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {events.length > 0 ? (
                  events.map((post, index) => (
                    <AnimatedSection key={post.id} delay={300 + index * 100} className="w-full max-w-sm">
                      <BlogCard post={post} />
                    </AnimatedSection>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-gray-600">No event posts available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="health-tips">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {healthTips.length > 0 ? (
                  healthTips.map((post, index) => (
                    <AnimatedSection key={post.id} delay={300 + index * 100} className="w-full max-w-sm">
                      <BlogCard post={post} />
                    </AnimatedSection>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-gray-600">No health tips posts available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="medical-research">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {medicalResearch.length > 0 ? (
                  medicalResearch.map((post, index) => (
                    <AnimatedSection key={post.id} delay={300 + index * 100} className="w-full max-w-sm">
                      <BlogCard post={post} />
                    </AnimatedSection>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-gray-600">No medical research posts available at the moment.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

function BlogCard({ post }: { post: any }) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Estimate reading time (rough calculation: 200 words per minute)
  const wordCount = post.content.replace(/<[^>]*>/g, "").split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col group w-full">
      <Link href={`/blogs/${post.slug}`} className="block h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-primary hover:bg-primary/90">{post.category}</Badge>
          </div>
          <Image
            src={post.coverImage || "/placeholder.svg?height=300&width=500"}
            alt={post.title}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{publishedDate}</span>
            </div>
            <span className="text-sm text-gray-500">{readingTime} min read</span>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <span className="text-primary font-bold">{post.author.name.charAt(0)}</span>
                </div>
              )}
              <div className="hidden sm:block">
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <div className="text-primary font-medium flex items-center text-sm group-hover:translate-x-1 transition-transform">
              Read Full Article
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
