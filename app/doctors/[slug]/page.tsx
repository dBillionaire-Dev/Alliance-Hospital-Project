import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import ContactCta from "@/components/contact-cta"
import { notFound } from "next/navigation"

// Doctor data - in a real app, this would come from a database
const doctorsData = {
  "sarah-johnson": {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions.",
    fullBio:
      "Dr. Sarah Johnson is a highly respected cardiologist who has dedicated her career to advancing cardiovascular care. After graduating with honors from Harvard Medical School, she completed her residency at Johns Hopkins Hospital and a fellowship in interventional cardiology at the Cleveland Clinic. Dr. Johnson specializes in preventive cardiology, heart failure management, and minimally invasive cardiac procedures. She has published numerous research papers in prestigious medical journals and regularly speaks at international cardiology conferences. Her patient-centered approach and commitment to using the latest evidence-based treatments have earned her recognition as one of the top cardiologists in the region.",
    education: [
      "M.D., Harvard Medical School",
      "Residency in Internal Medicine, Johns Hopkins Hospital",
      "Fellowship in Cardiology, Cleveland Clinic",
      "Board Certification in Cardiovascular Disease",
    ],
    expertise: [
      "Preventive Cardiology",
      "Heart Failure Management",
      "Coronary Artery Disease",
      "Cardiac Rehabilitation",
      "Echocardiography",
    ],
    languages: ["English", "French"],
    contact: {
      email: "sarah.johnson@alliancehospital.com",
      phone: "+225 07 0123 4567",
      office: "Main Building, 3rd Floor, Room 305",
    },
    schedule: "Monday, Wednesday, Friday: 9:00 AM - 4:00 PM",
  },
  "michael-chen": {
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Chen specializes in neurological disorders and has pioneered several innovative treatment approaches.",
    fullBio:
      "Dr. Michael Chen is a leading neurologist with extensive experience in diagnosing and treating complex neurological conditions. After completing his medical training at Stanford University, he pursued specialized training in neurology at UCSF Medical Center. Dr. Chen has been at the forefront of developing innovative approaches to treating neurological disorders, particularly in the areas of stroke prevention and management of neurodegenerative diseases. His research on early intervention strategies for stroke patients has been widely recognized and implemented in hospitals across the country. Dr. Chen is known for his compassionate care and dedication to improving the quality of life for patients with neurological conditions.",
    education: [
      "M.D., Stanford University School of Medicine",
      "Residency in Neurology, UCSF Medical Center",
      "Fellowship in Vascular Neurology, Massachusetts General Hospital",
      "Board Certification in Neurology",
    ],
    expertise: [
      "Stroke Prevention and Treatment",
      "Neurodegenerative Diseases",
      "Headache Disorders",
      "Movement Disorders",
      "Neuroimaging",
    ],
    languages: ["English", "Mandarin", "French"],
    contact: {
      email: "michael.chen@alliancehospital.com",
      phone: "+225 07 0123 4568",
      office: "Neurology Wing, 2nd Floor, Room 210",
    },
    schedule: "Tuesday, Thursday: 8:00 AM - 5:00 PM",
  },
  "amara-diallo": {
    name: "Dr. Amara Diallo",
    specialty: "Pediatrics",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Diallo is dedicated to providing compassionate care for children from infancy through adolescence.",
    fullBio:
      "Dr. Amara Diallo is a compassionate pediatrician who has devoted her career to improving children's health. Born and raised in Abidjan, she completed her medical education at the University of Abidjan before pursuing specialized training in pediatrics at the Children's Hospital of Philadelphia. Dr. Diallo has a particular interest in early childhood development, preventive care, and managing chronic pediatric conditions. She is known for her gentle approach with young patients and her ability to connect with children of all ages. Dr. Diallo is actively involved in community outreach programs aimed at improving child health outcomes in underserved areas.",
    education: [
      "M.D., University of Abidjan Medical School",
      "Residency in Pediatrics, Children's Hospital of Philadelphia",
      "Fellowship in Developmental Pediatrics, Boston Children's Hospital",
      "Board Certification in Pediatrics",
    ],
    expertise: [
      "Well-Child Care",
      "Developmental Assessments",
      "Childhood Immunizations",
      "Management of Chronic Pediatric Conditions",
      "Adolescent Medicine",
    ],
    languages: ["English", "French", "Dioula"],
    contact: {
      email: "amara.diallo@alliancehospital.com",
      phone: "+225 07 0123 4569",
      office: "Pediatric Center, 1st Floor, Room 105",
    },
    schedule: "Monday to Friday: 9:00 AM - 3:00 PM",
  },
  "robert-koffi": {
    name: "Dr. Robert Koffi",
    specialty: "Orthopedics",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Koffi is an orthopedic surgeon specializing in sports medicine and joint replacement procedures.",
    fullBio:
      "Dr. Robert Koffi is a highly skilled orthopedic surgeon with specialized training in sports medicine and joint replacement surgery. After graduating from the University of Ghana Medical School, he completed his orthopedic surgery residency at Mayo Clinic and a fellowship in sports medicine at the Hospital for Special Surgery in New York. Dr. Koffi has worked with several professional sports teams and has extensive experience in treating sports-related injuries and performing minimally invasive joint replacement procedures. His approach focuses on restoring mobility and function while minimizing recovery time. Dr. Koffi regularly participates in medical missions to provide orthopedic care in underserved communities.",
    education: [
      "M.D., University of Ghana Medical School",
      "Residency in Orthopedic Surgery, Mayo Clinic",
      "Fellowship in Sports Medicine, Hospital for Special Surgery",
      "Board Certification in Orthopedic Surgery",
    ],
    expertise: [
      "Sports Medicine",
      "Joint Replacement Surgery",
      "Arthroscopic Surgery",
      "Fracture Care",
      "Rehabilitation Medicine",
    ],
    languages: ["English", "French", "Akan"],
    contact: {
      email: "robert.koffi@alliancehospital.com",
      phone: "+225 07 0123 4570",
      office: "Orthopedic Center, 4th Floor, Room 412",
    },
    schedule: "Monday, Wednesday, Thursday: 8:00 AM - 4:00 PM",
  },
  "fatima-toure": {
    name: "Dr. Fatima Toure",
    specialty: "Ophthalmology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Toure is an experienced ophthalmologist specializing in cataract surgery and retinal disorders.",
    fullBio:
      "Dr. Fatima Toure is a distinguished ophthalmologist with expertise in comprehensive eye care, cataract surgery, and the management of retinal disorders. She received her medical degree from the University of Dakar before completing her ophthalmology residency at Wills Eye Hospital in Philadelphia. Dr. Toure further specialized in retinal surgery through a fellowship at Bascom Palmer Eye Institute. She has performed thousands of successful cataract surgeries and is skilled in the latest techniques for treating macular degeneration, diabetic retinopathy, and other retinal conditions. Dr. Toure is committed to preserving and improving her patients' vision through personalized care and advanced surgical techniques.",
    education: [
      "M.D., University of Dakar Medical School",
      "Residency in Ophthalmology, Wills Eye Hospital",
      "Fellowship in Retinal Surgery, Bascom Palmer Eye Institute",
      "Board Certification in Ophthalmology",
    ],
    expertise: [
      "Cataract Surgery",
      "Retinal Disorders",
      "Diabetic Eye Disease",
      "Macular Degeneration",
      "Comprehensive Eye Exams",
    ],
    languages: ["English", "French", "Wolof"],
    contact: {
      email: "fatima.toure@alliancehospital.com",
      phone: "+225 07 0123 4571",
      office: "Eye Center, 2nd Floor, Room 215",
    },
    schedule: "Tuesday, Thursday, Friday: 9:00 AM - 5:00 PM",
  },
  "jean-kouame": {
    name: "Dr. Jean Kouame",
    specialty: "General Medicine",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Kouame provides comprehensive primary care services for patients of all ages.",
    fullBio:
      "Dr. Jean Kouame is a dedicated general practitioner with over 20 years of experience in providing comprehensive primary care. Born and raised in Côte d'Ivoire, he completed his medical education at the University of Abidjan and his residency in family medicine at the University of Montreal. Dr. Kouame takes a holistic approach to healthcare, focusing on preventive medicine and the management of chronic conditions. He is known for his attentive listening and thorough examinations, ensuring that each patient receives personalized care. Dr. Kouame is particularly interested in lifestyle medicine and helping patients make sustainable health changes.",
    education: [
      "M.D., University of Abidjan Medical School",
      "Residency in Family Medicine, University of Montreal",
      "Master's in Public Health, London School of Hygiene & Tropical Medicine",
      "Board Certification in Family Medicine",
    ],
    expertise: [
      "Preventive Medicine",
      "Chronic Disease Management",
      "Geriatric Care",
      "Travel Medicine",
      "Minor Surgical Procedures",
    ],
    languages: ["English", "French", "Baoulé"],
    contact: {
      email: "jean.kouame@alliancehospital.com",
      phone: "+225 07 0123 4572",
      office: "Main Building, 1st Floor, Room 110",
    },
    schedule: "Monday to Friday: 8:00 AM - 4:00 PM",
  },
  "elizabeth-mensah": {
    name: "Dr. Elizabeth Mensah",
    specialty: "Dermatology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Mensah specializes in the diagnosis and treatment of skin conditions and cosmetic dermatology.",
    fullBio:
      "Dr. Elizabeth Mensah is a board-certified dermatologist with expertise in medical, surgical, and cosmetic dermatology. After completing her medical degree at the University of Ghana, she pursued specialized training in dermatology at New York University. Dr. Mensah has particular expertise in treating skin conditions that commonly affect people with darker skin tones, as well as in performing advanced cosmetic procedures. She is committed to helping patients achieve healthy skin and has conducted research on innovative treatments for various dermatological conditions. Dr. Mensah regularly participates in community skin cancer screenings and educational programs on skin health.",
    education: [
      "M.D., University of Ghana Medical School",
      "Residency in Dermatology, New York University",
      "Fellowship in Cosmetic Dermatology, University of California, Los Angeles",
      "Board Certification in Dermatology",
    ],
    expertise: [
      "Medical Dermatology",
      "Skin Cancer Screening and Treatment",
      "Cosmetic Dermatology",
      "Laser Treatments",
      "Ethnic Skin Care",
    ],
    languages: ["English", "French", "Twi"],
    contact: {
      email: "elizabeth.mensah@alliancehospital.com",
      phone: "+225 07 0123 4573",
      office: "Dermatology Center, 3rd Floor, Room 320",
    },
    schedule: "Monday, Wednesday, Friday: 9:00 AM - 5:00 PM",
  },
  "david-osei": {
    name: "Dr. David Osei",
    specialty: "Gastroenterology",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dr. Osei is an expert in digestive health and the treatment of gastrointestinal disorders.",
    fullBio:
      "Dr. David Osei is a highly regarded gastroenterologist with extensive experience in diagnosing and treating disorders of the digestive system. He received his medical degree from the University of Cape Town before completing his internal medicine residency and gastroenterology fellowship at Johns Hopkins Hospital. Dr. Osei specializes in advanced endoscopic procedures and has particular expertise in inflammatory bowel disease, liver disorders, and colorectal cancer screening. He is known for his thorough approach to diagnosis and his commitment to using the least invasive treatments possible. Dr. Osei is actively involved in research on improving outcomes for patients with chronic gastrointestinal conditions.",
    education: [
      "M.D., University of Cape Town Medical School",
      "Residency in Internal Medicine, Johns Hopkins Hospital",
      "Fellowship in Gastroenterology, Johns Hopkins Hospital",
      "Board Certification in Gastroenterology",
    ],
    expertise: [
      "Diagnostic and Therapeutic Endoscopy",
      "Inflammatory Bowel Disease",
      "Liver Disorders",
      "Colorectal Cancer Screening",
      "Functional Gastrointestinal Disorders",
    ],
    languages: ["English", "French", "Akan"],
    contact: {
      email: "david.osei@alliancehospital.com",
      phone: "+225 07 0123 4574",
      office: "Gastroenterology Center, 2nd Floor, Room 225",
    },
    schedule: "Tuesday, Thursday: 8:00 AM - 4:00 PM",
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const doctor = doctorsData[params.slug]

  if (!doctor) {
    return {
      title: "Doctor Not Found",
      description: "The requested doctor profile could not be found.",
    }
  }

  return {
    title: `${doctor.name} - ${doctor.specialty} | Alliance Hospital`,
    description: doctor.bio,
  }
}

export default function DoctorProfilePage({ params }: { params: { slug: string } }) {
  const doctor = doctorsData[params.slug]

  if (!doctor) {
    notFound()
  }

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-8" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              {doctor.specialty}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{doctor.name}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={200} className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Contact Information</h3>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">{doctor.contact.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">{doctor.contact.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Office</p>
                          <p className="text-gray-600">{doctor.contact.office}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Schedule</p>
                          <p className="text-gray-600">{doctor.schedule}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-bold mb-4">Connect</h3>
                      <div className="flex gap-3">
                        <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
                          <Facebook className="h-5 w-5" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/appointments">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About {doctor.name}</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">{doctor.fullBio}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Education & Training</h3>
                  <ul className="space-y-3">
                    {doctor.education.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
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
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {doctor.languages.map((language) => (
                      <span key={language} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-4">Specialty</h3>
                  <Link
                    href={`/services/${doctor.specialty.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    {doctor.specialty}
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
              </div>

              <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {doctor.expertise.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 12 2 2 4-4" />
                          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z" />
                        </svg>
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Make an Appointment</h3>
                <p className="text-gray-700 mb-6">
                  To schedule an appointment with {doctor.name}, please use our online booking system or contact our
                  reception.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/appointments">Book Online</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Contact Reception</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
