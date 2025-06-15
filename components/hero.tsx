import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import EmergencyButton from "./emergency-button"
import { AnimatedSection } from "./animated-section"

export default function Hero() {
  return (
    <section className="pt-12 pb-16 md:pt-28 md:pb-24 hero-pattern">
      <div className="container md:mt-[-4rem] mb-[-2rem] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <AnimatedSection delay={100}>
              <div className="inline-block bg-primary/20 text-primary px-3 py-1 md:px-4 md:py-1.5 rounded-full font-medium text-xs md:text-sm">
                Leading Healthcare in Abuja, Nigeria
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Your Health Is Our <span className="text-primary block sm:inline">Priority</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Alliance Hospital Abuja provides world-class healthcare with cutting-edge technology and compassionate
                care from our experienced medical professionals.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="text-base bg-primary hover:bg-primary/90 w-full sm:w-auto h-12 sm:h-11"
                >
                  <Link href="/appointments" className="flex items-center justify-center">
                    Book an Appointment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base border-white text-primary hover:bg-white hover:text-secondary w-full sm:w-auto h-12 sm:h-11"
                >
                  <Link href="/services" className="flex items-center justify-center">
                    Our Services
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={900}>
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6">
                <div className="flex -space-x-1 sm:-space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                    >
                      <Image
                        src={`/placeholder.svg?height=40&width=40`}
                        alt="Doctor"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-semibold text-white text-sm sm:text-base">50+ Specialists</div>
                  <div className="text-xs sm:text-sm text-gray-300">Ready to help you</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slideLeft" delay={200}>
            <div className="relative order-first lg:order-last mt-8 lg:mt-0">
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full z-0"></div>
              <div className="elative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl w-full aspect-square sm:aspect-auto">
                <Image
                  src="/images/alliance-hospital.jpg?height=400&width=400"
                  alt="Alliance Hospital Abuja"
                  width={600}
                  height={600}
                  className="w-full md:h-[400px] lg:h-[550px] object-center aspect-square sm:aspect-auto"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Floating Emergency Button */}
      <EmergencyButton variant="floating" />
    </section>
  )
}
