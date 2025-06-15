import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export default function ContactCta() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideRight" delay={100}>
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                Take the first step towards better health. Contact us today to schedule an appointment or learn more
                about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/appointments">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-primary hover:bg-white hover:text-secondary"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={300}>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-gray-200"><a href="tel:+2348097142623" target="_blank"></a>+234 (0) 809-714-2623</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-gray-200"><a href="mailto:info@alliancehospitalabj.com" target="_blank" rel="noopener noreferrer">info@alliancehospitalabj.com</a></div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-gray-200">No 1-5 Malumfashi Close, Off Emeka Anyaoku Street, Area 11, Garki, Abuja, Nigeria</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
