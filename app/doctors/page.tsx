import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import ContactCta from "@/components/contact-cta"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the experienced medical professionals at Alliance Hospital Abidjan who are dedicated to providing exceptional healthcare services.",
}

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions.",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Chen specializes in neurological disorders and has pioneered several innovative treatment approaches.",
  },
  {
    name: "Dr. Amara Diallo",
    specialty: "Pediatrics",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Diallo is dedicated to providing compassionate care for children from infancy through adolescence.",
  },
  {
    name: "Dr. Robert Koffi",
    specialty: "Orthopedics",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Koffi is an orthopedic surgeon specializing in sports medicine and joint replacement procedures.",
  },
  {
    name: "Dr. Fatima Toure",
    specialty: "Ophthalmology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Toure is an experienced ophthalmologist specializing in cataract surgery and retinal disorders.",
  },
  {
    name: "Dr. Jean Kouame",
    specialty: "General Medicine",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Kouame provides comprehensive primary care services for patients of all ages.",
  },
  {
    name: "Dr. Elizabeth Mensah",
    specialty: "Dermatology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Mensah specializes in the diagnosis and treatment of skin conditions and cosmetic dermatology.",
  },
  {
    name: "Dr. David Osei",
    specialty: "Gastroenterology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Osei is an expert in digestive health and the treatment of gastrointestinal disorders.",
  },
]

const specialties = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Ophthalmology",
  "General Medicine",
  "Dermatology",
  "Gastroenterology",
  "Obstetrics & Gynecology",
  "Urology",
  "Endocrinology",
  "Pulmonology",
]

// Helper function to generate consistent slugs
function generateDoctorSlug(name: string): string {
  return name
    .replace(/^Dr\.\s+/, "") // Remove "Dr. " prefix
    .toLowerCase()
    .replace(/\s+/g, "-")
}

export default function DoctorsPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Our Specialists
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Doctors</h1>
            <p className="text-gray-200 text-lg">
              Our team of highly qualified medical professionals is committed to providing exceptional care with
              compassion and expertise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <AnimatedSection key={doctor.name} delay={200 + index * 100}>
                <Card className="overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      width={300}
                      height={400}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex gap-3">
                        <Button size="icon" variant="secondary" className="rounded-full h-8 w-8">
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full h-8 w-8">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full h-8 w-8">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-6 flex-1">
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-primary font-medium mb-3">{doctor.specialty}</p>
                    <p className="text-gray-600 text-sm">{doctor.bio}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/doctors/${generateDoctorSlug(doctor.name)}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialties & Expertise</h2>
            <p className="text-gray-600 text-lg">
              Our doctors specialize in a wide range of medical fields to provide comprehensive care for all your
              healthcare needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <AnimatedSection key={specialty} delay={300 + index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2">{specialty}</h3>
                  <Link
                    href={`/services/${specialty.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
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
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
