import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Stethoscope, Baby, Eye, Bone, Pill, Activity } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

const services = [
  {
    name: "Cardiology",
    description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
    icon: Heart,
    href: "/services/cardiology",
  },
  {
    name: "Neurology",
    description: "Expert diagnosis and treatment of disorders of the nervous system.",
    icon: Brain,
    href: "/services/neurology",
  },
  {
    name: "General Medicine",
    description: "Primary healthcare services for patients of all ages.",
    icon: Stethoscope,
    href: "/services/general-medicine",
  },
  {
    name: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    icon: Baby,
    href: "/services/pediatrics",
  },
  {
    name: "Ophthalmology",
    description: "Comprehensive eye care services from routine exams to complex surgeries.",
    icon: Eye,
    href: "/services/ophthalmology",
  },
  {
    name: "Orthopedics",
    description: "Treatment for conditions affecting the musculoskeletal system.",
    icon: Bone,
    href: "/services/orthopedics",
  },
  {
    name: "Pharmacy",
    description: "Full-service pharmacy with prescription and over-the-counter medications.",
    icon: Pill,
    href: "/services/pharmacy",
  },
  {
    name: "Emergency Care",
    description: "24/7 emergency services for critical and urgent medical needs.",
    icon: Activity,
    href: "/services/emergency",
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Medical Services</h2>
            <p className="text-gray-600 text-lg">
              We offer a wide range of medical services to meet all your healthcare needs with state-of-the-art
              facilities and expert care.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.name} delay={200 + index * 100}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <Link
                    href={service.href}
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    Learn more
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
                      className="ml-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={1000}>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
