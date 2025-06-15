import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

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
]

// Helper function to generate consistent slugs
function generateDoctorSlug(name: string): string {
  return name
    .replace(/^Dr\.\s+/, "") // Remove "Dr. " prefix
    .toLowerCase()
    .replace(/\s+/g, "-")
}

export default function Doctors() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium text-sm mb-4">
            Our Specialists
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Doctors</h2>
          <p className="text-gray-600 text-lg">
            Our team of highly qualified medical professionals is committed to providing exceptional care with
            compassion and expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="overflow-hidden group">
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
              <CardContent className="pt-6">
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
