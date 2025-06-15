import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import Stats from "@/components/stats"
import ContactCta from "@/components/contact-cta"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Alliance Hospital Abuja's mission, vision, values, and our commitment to providing exceptional healthcare services in Nigeria.",
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Leading the Way in Medical Excellence</h1>
            <p className="text-gray-200 text-lg">
              Alliance Hospital Abuja is committed to providing exceptional healthcare services with compassion and
              expertise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideRight" delay={200}>
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-3xl transform -rotate-3"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 rounded-3xl transform rotate-3"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/about-alliance.png"
                    alt="About Alliance Hospital"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">10+</span>
                    </div >
                    <div>
                      <div className="font-semibold">Years of Excellence</div>
                      <div className="text-sm text-gray-500">in Healthcare</div>
                    </div>
                  </div >
                </div >
              </div >
            </AnimatedSection >

            <AnimatedSection animation="slideLeft" delay={400}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                <p className="text-gray-600">
                  Alliance Hospital Abuja is a Multi-Specialty Hospital located at No. 5 Malumfashi Close, Off Emeka Anyaoku Street, Area 11, Garki, F.C.T, Abuja. It was established with a vision to provide world-class world class medical services thereby stopping medical tourism by Nigerians to foreign countries. .
                </p>
                <p className="text-gray-600">
                  Our state-of-the-art facility is equipped with the latest medical technology and staffed by
                  experienced healthcare professionals dedicated to delivering exceptional patient care. We have
                  continuously evolved to meet the changing healthcare needs of our community while maintaining our
                  commitment to excellence.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
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
              </div>
            </AnimatedSection>
          </div >
        </div >
      </section >

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision, Mission & Values</h2>

          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Vision",
                content:
                  "TO BUILD A WORLD CLASS, ONE STOP MULTI-SPECIALTY HOSPITAL DRIVEN BY PASSION AND SERVICE.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
              {
                title: "Our Mission",
                content:
                  "To bridge the existing gap in our Healthcare system by drawing on the resources of Highly skilled, Hard working and well Motivated Team of vibrant Medical Specialist in their various Fields of Medicine, backed by Modern State-of-the-art Medical equipments to provide efficient Health services for Citizens of Nigeria and beyond.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                content: null,
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={300 + index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                  {item.content ? (
                    <p className="text-gray-600 text-center">{item.content}</p>
                  ) : (
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Excellence:</strong> Striving for the highest standards in all aspects of care
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Compassion:</strong> Treating each patient with kindness and empathy
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Integrity:</strong> Acting with honesty and transparency in all interactions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Innovation:</strong> Embracing new technologies and approaches to improve care
                        </span>
                      </li>
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-gray-600 text-lg">
              Meet the experienced professionals who guide our organization's strategic direction and ensure we deliver
              on our mission.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Emmanuel Kouassi",
                role: "Chief Executive Officer",
                bio: "Dr. Kouassi has over 25 years of experience in healthcare management and is committed to advancing healthcare standards in West Africa.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Marie Diallo",
                role: "Chief Medical Officer",
                bio: "Dr. Diallo oversees all clinical operations and ensures that our medical services meet the highest standards of quality and safety.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Mr. Jean-Paul Bédié",
                role: "Chief Operations Officer",
                bio: "Mr. Bédié manages the day-to-day operations of the hospital, ensuring efficient service delivery and resource management.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((leader, index) => (
              <AnimatedSection key={leader.name} delay={300 + index * 200}>
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-primary font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
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
