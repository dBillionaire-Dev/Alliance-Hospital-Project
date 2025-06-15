import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    content:
      "The care I received at Alliance Hospital was exceptional. The staff was professional, caring, and the facilities are world-class.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Patient",
    content:
      "I'm grateful for the excellent treatment I received. The doctors took time to explain everything and made me feel comfortable throughout my stay.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Amina Kone",
    role: "Patient",
    content:
      "Alliance Hospital provided outstanding care during my surgery. The medical team was skilled and compassionate. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 text-lg">
              Read testimonials from our satisfied patients who have experienced our quality healthcare services.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={300 + index * 200}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
