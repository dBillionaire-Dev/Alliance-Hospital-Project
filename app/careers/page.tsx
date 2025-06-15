import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, ChevronRight, Users, GraduationCap, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team at Alliance Hospital Abuja and make a difference in healthcare in Nigeria.",
}

const jobOpenings = [
  {
    title: "Registered Nurse - Cardiology",
    department: "Nursing",
    location: "Abuja, Nigeria",
    type: "Full-time",
    posted: "June 1, 2023",
    description:
      "We are seeking a compassionate and skilled Registered Nurse to join our Cardiology department. The ideal candidate will have experience in cardiac care and a commitment to patient-centered care.",
    requirements: [
      "Bachelor's degree in Nursing",
      "Valid nursing license",
      "Minimum 2 years of experience in cardiac care",
      "BLS and ACLS certification",
      "Excellent communication skills",
    ],
  },
  {
    title: "Medical Laboratory Technician",
    department: "Laboratory",
    location: "Abuja, Nigeria",
    type: "Full-time",
    posted: "May 15, 2023",
    description:
      "Join our laboratory team as a Medical Laboratory Technician. You will be responsible for conducting tests and analyzing samples to help diagnose and treat diseases.",
    requirements: [
      "Associate's or Bachelor's degree in Medical Laboratory Science",
      "Certification as a Medical Laboratory Technician",
      "Experience with laboratory equipment and procedures",
      "Attention to detail and accuracy",
      "Ability to work in a fast-paced environment",
    ],
  },
  {
    title: "Pharmacist",
    department: "Pharmacy",
    location: "Abuja, Nigeria",
    type: "Full-time",
    posted: "May 10, 2023",
    description:
      "We are looking for a licensed Pharmacist to join our pharmacy team. You will be responsible for dispensing medications, providing patient counseling, and ensuring medication safety.",
    requirements: [
      "Doctor of Pharmacy (PharmD) degree",
      "Valid pharmacist license",
      "Experience in hospital pharmacy preferred",
      "Strong knowledge of medications and their effects",
      "Excellent customer service skills",
    ],
  },
  {
    title: "Administrative Assistant",
    department: "Administration",
    location: "Abuja, Nigeria",
    type: "Full-time",
    posted: "May 5, 2023",
    description:
      "We are seeking an Administrative Assistant to provide support to our administrative team. The ideal candidate will be organized, detail-oriented, and proficient in office software.",
    requirements: [
      "Associate's degree or equivalent experience",
      "Proficiency in Microsoft Office Suite",
      "Excellent organizational and time management skills",
      "Strong written and verbal communication skills",
      "Ability to handle confidential information with discretion",
    ],
  },
]

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Careers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-gray-200 text-lg">
              Be part of a dedicated team committed to providing exceptional healthcare services in Nigeria.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-6" delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold">Why Work With Us</h2>
              <p className="text-gray-600">
                At Alliance Hospital Abuja, we value our employees and provide a supportive and collaborative work
                environment. We are committed to professional development and work-life balance.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  {
                    icon: Users,
                    title: "Collaborative Environment",
                    description: "Work with a diverse team of healthcare professionals",
                  },
                  {
                    icon: GraduationCap,
                    title: "Professional Growth",
                    description: "Opportunities for continuing education and career advancement",
                  },
                  {
                    icon: Heart,
                    title: "Meaningful Work",
                    description: "Make a difference in the lives of our patients and community",
                  },
                  {
                    icon: Clock,
                    title: "Work-Life Balance",
                    description: "Flexible scheduling options and competitive benefits",
                  },
                ].map((benefit, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="pt-6">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild size="lg">
                  <a href="#job-openings">View Current Openings</a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative" delay={400}>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Alliance Hospital Team"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="job-openings" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Job Openings</h2>
            <p className="text-gray-600 text-lg">
              Explore our current opportunities and find a role where you can grow and make an impact.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <AnimatedSection key={index} delay={300 + index * 100}>
                <Card className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="mt-1">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.department}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Posted: {job.posted}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-gray-600">
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 border-t">
                    <Button asChild>
                      <Link href="/careers/apply">
                        Apply Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-gray-600 text-lg">
              Our hiring process is designed to find the best candidates who align with our values and mission.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description: "Submit your application through our online portal with your resume and cover letter.",
              },
              {
                step: "2",
                title: "Initial Screening",
                description: "Our HR team will review your application and contact qualified candidates.",
              },
              {
                step: "3",
                title: "Interview Process",
                description: "Participate in interviews with the hiring manager and potential team members.",
              },
              {
                step: "4",
                title: "Offer & Onboarding",
                description: "Successful candidates will receive an offer and begin the onboarding process.",
              },
            ].map((step, index) => (
              <AnimatedSection key={index} className="text-center" delay={300 + index * 100}>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See a Position That Fits?</h2>
            <p className="text-gray-600 text-lg mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on
              file for future opportunities.
            </p>
            <Button asChild size="lg">
              <Link href="/careers/general-application">Submit General Application</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
