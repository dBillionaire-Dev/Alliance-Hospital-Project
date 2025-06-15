import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideRight" delay={100}>
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-3xl transform -rotate-3"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 rounded-3xl transform rotate-3"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/302029773_639374984558541_7758134982071401900_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH7b4FQE4m3KpQyC8x5DJVEDLAahK2f1HoMsBqErZ_Uel1SUSDmBeMNKTE3-cMrRy5bILciBVZ2T6a7fPqL-NUh&_nc_ohc=Gt5syY9hTeoQ7kNvwH3DIGz&_nc_oc=Adk20TwW6CY7T52FrvxVFzhumt-5N9_5nL0euYB-u4Glsi3UGoWvcYZH84O-rWevn9w&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=xBp_--qvGZj0w-_e_PBP7Q&oh=00_AfO-Ac1A3uqdO8kgBB0p4vQNXNkJ5P_5hp5ogH9Kxabm0A&oe=68551B59"
                  alt="About Alliance Hospital"
                  width={600}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">25+</span>
                  </div>
                  <div>
                    <div className="font-semibold">Years of Excellence</div>
                    <div className="text-sm text-gray-500">in Healthcare</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={300}>
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium text-sm">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Leading the Way in Medical Excellence</h2>
              <p className="text-gray-600">
                Alliance Hospital Abuja was established with a vision to provide world-class medical services thereby stopping medical tourism by Nigerians to foreign countries. Our state-of-the-art facility is equipped with the latest medical technology and staffed by experienced healthcare professionals dedicated to delivering exceptional patient care.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Cutting-edge medical technology",
                  "Internationally trained specialists",
                  "Patient-centered approach",
                  "Comprehensive care services",
                  "Modern diagnostic facilities",
                  "24/7 emergency services",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
