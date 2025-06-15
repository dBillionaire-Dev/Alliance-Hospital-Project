import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Brain,
  Stethoscope,
  Baby,
  Eye,
  Bone,
  Pill,
  Activity,
  Microscope,
  TreesIcon as Lungs,
  Dna,
  Syringe,
} from "lucide-react"
import Link from "next/link"
import ContactCta from "@/components/contact-cta"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Our Medical Services",
  description:
    "Alliance Hospital Abuja offers a comprehensive range of medical services delivered by experienced specialists using state-of-the-art technology.",
}

const services = [
  {
    name: "Cardiology",
    description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
    icon: Heart,
    href: "/services/cardiology",
    details:
      "Our cardiology department provides comprehensive care for all heart-related conditions. Our team of experienced cardiologists uses state-of-the-art technology for accurate diagnosis and effective treatment of heart diseases.",
  },
  {
    name: "Neurology",
    description: "Expert diagnosis and treatment of disorders of the nervous system.",
    icon: Brain,
    href: "/services/neurology",
    details:
      "Our neurology department specializes in the diagnosis and treatment of disorders of the brain, spinal cord, and nervous system. We offer comprehensive care for conditions such as stroke, epilepsy, multiple sclerosis, and Parkinson's disease.",
  },
  {
    name: "General Medicine",
    description: "Primary healthcare services for patients of all ages.",
    icon: Stethoscope,
    href: "/services/general-medicine",
    details:
      "Our general medicine department provides primary healthcare services for patients of all ages. Our team of experienced physicians offers comprehensive care for a wide range of health concerns, from routine check-ups to management of chronic conditions.",
  },
  {
    name: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    icon: Baby,
    href: "/services/pediatrics",
    details:
      "Our pediatrics department is dedicated to providing specialized healthcare for infants, children, and adolescents. Our team of pediatricians offers comprehensive care for all aspects of child health, from routine check-ups to management of complex conditions.",
  },
  {
    name: "Ophthalmology",
    description: "Comprehensive eye care services from routine exams to complex surgeries.",
    icon: Eye,
    href: "/services/ophthalmology",
    details:
      "Our ophthalmology department offers comprehensive eye care services, from routine eye exams to complex surgeries. Our team of experienced ophthalmologists uses advanced technology for accurate diagnosis and effective treatment of eye conditions.",
  },
  {
    name: "Orthopedics",
    description: "Treatment for conditions affecting the musculoskeletal system.",
    icon: Bone,
    href: "/services/orthopedics",
    details:
      "Our orthopedics department specializes in the diagnosis and treatment of conditions affecting the musculoskeletal system. Our team of orthopedic surgeons offers comprehensive care for bone and joint conditions, from sports injuries to joint replacements.",
  },
  {
    name: "Pharmacy",
    description: "Full-service pharmacy with prescription and over-the-counter medications.",
    icon: Pill,
    href: "/services/pharmacy",
    details:
      "Our pharmacy provides a full range of prescription and over-the-counter medications. Our team of experienced pharmacists offers medication counseling and ensures that patients receive the right medications at the right doses.",
  },
  {
    name: "Emergency Care",
    description: "24/7 emergency services for critical and urgent medical needs.",
    icon: Activity,
    href: "/services/emergency",
    details:
      "Our emergency department provides 24/7 care for critical and urgent medical needs. Our team of emergency physicians and nurses is equipped to handle all types of emergencies, from minor injuries to life-threatening conditions.",
  },
  {
    name: "Laboratory Services",
    description: "Comprehensive diagnostic testing with quick and accurate results.",
    icon: Microscope,
    href: "/services/laboratory",
    details:
      "Our laboratory services provide comprehensive diagnostic testing with quick and accurate results. Our state-of-the-art laboratory is equipped to perform a wide range of tests, from routine blood work to specialized diagnostic procedures.",
  },
  {
    name: "Pulmonology",
    description: "Diagnosis and treatment of respiratory conditions and lung diseases.",
    icon: Lungs,
    href: "/services/pulmonology",
    details:
      "Our pulmonology department specializes in the diagnosis and treatment of respiratory conditions and lung diseases. Our team of pulmonologists offers comprehensive care for conditions such as asthma, COPD, and lung cancer.",
  },
  {
    name: "Genetics",
    description: "Genetic testing and counseling for hereditary conditions.",
    icon: Dna,
    href: "/services/genetics",
    details:
      "Our genetics department offers genetic testing and counseling for hereditary conditions. Our team of geneticists helps patients understand their genetic risks and make informed decisions about their health.",
  },
  {
    name: "Vaccination",
    description: "Preventive vaccines for children and adults against various diseases.",
    icon: Syringe,
    href: "/services/vaccination",
    details:
      "Our vaccination services provide preventive vaccines for children and adults against various diseases. Our team ensures that patients receive the appropriate vaccines according to their age, health status, and risk factors.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Healthcare Services</h1>
            <p className="text-gray-200 text-lg">
              Alliance Hospital Abuja offers a wide range of medical services delivered by experienced specialists using
              state-of-the-art technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={200 + index * 100}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-base mb-4 flex-1">{service.details}</CardDescription>
                    <Link
                      href={service.href}
                      className="text-primary font-medium hover:underline inline-flex items-center mt-auto"
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
        </div>
      </section>

      <ContactCta />
    </>
  )
}
