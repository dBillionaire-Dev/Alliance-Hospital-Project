import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import ContactCta from "@/components/contact-cta"
import { AnimatedSection } from "@/components/animated-section"

// Define the service data
const services = {
  cardiology: {
    name: "Cardiology",
    description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
    fullDescription: `
      <p>Our Cardiology Department at Alliance Hospital Abuja is equipped with state-of-the-art technology and staffed by experienced cardiologists dedicated to providing comprehensive care for all heart-related conditions.</p>
      
      <p>We offer a wide range of diagnostic and treatment services, including:</p>
      
      <ul>
        <li>Electrocardiogram (ECG)</li>
        <li>Echocardiography</li>
        <li>Stress Testing</li>
        <li>Holter Monitoring</li>
        <li>Cardiac Catheterization</li>
        <li>Angioplasty and Stent Placement</li>
        <li>Pacemaker Implantation</li>
        <li>Cardiac Rehabilitation</li>
      </ul>
      
      <p>Our team of cardiologists works closely with other specialists to provide comprehensive care for patients with heart disease, hypertension, arrhythmias, and other cardiovascular conditions.</p>
      
      <p>We emphasize preventive care and patient education to help our patients maintain heart health and prevent future cardiac events.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Salau Ibrahim",
        title: "Consultant Cardiologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Michael Okafor",
        title: "Interventional Cardiologist",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: [
      "Advanced Cardiac Catheterization Lab",
      "ECG and Echocardiography Suite",
      "Cardiac Monitoring Units",
      "Cardiac Rehabilitation Center",
    ],
  },
  neurology: {
    name: "Neurology",
    description: "Expert diagnosis and treatment of disorders of the nervous system.",
    fullDescription: `
      <p>The Neurology Department at Alliance Hospital Abuja specializes in the diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous system.</p>
      
      <p>Our comprehensive neurological services include:</p>
      
      <ul>
        <li>Electroencephalography (EEG)</li>
        <li>Electromyography (EMG)</li>
        <li>Nerve Conduction Studies</li>
        <li>Neuroimaging (MRI, CT)</li>
        <li>Treatment for Stroke</li>
        <li>Management of Epilepsy</li>
        <li>Treatment for Multiple Sclerosis</li>
        <li>Management of Parkinson's Disease</li>
        <li>Headache and Migraine Treatment</li>
      </ul>
      
      <p>Our neurologists are experienced in treating a wide range of neurological conditions, from common disorders like headaches and seizures to complex conditions like multiple sclerosis and Parkinson's disease.</p>
      
      <p>We take a patient-centered approach to neurological care, focusing on improving quality of life and managing symptoms effectively.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Michael Chen",
        title: "Chief Neurologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Amina Bello",
        title: "Neurophysiologist",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["EEG and EMG Laboratory", "Neuroimaging Suite", "Stroke Unit", "Neurorehabilitation Center"],
  },
  "general-medicine": {
    name: "General Medicine",
    description: "Primary healthcare services for patients of all ages.",
    fullDescription: `
      <p>Our General Medicine Department provides comprehensive primary healthcare services for patients of all ages. We focus on preventive care, diagnosis, and treatment of a wide range of health conditions.</p>
      
      <p>Our services include:</p>
      
      <ul>
        <li>Routine Check-ups and Physical Examinations</li>
        <li>Preventive Healthcare</li>
        <li>Diagnosis and Treatment of Common Illnesses</li>
        <li>Management of Chronic Conditions</li>
        <li>Health Screenings</li>
        <li>Immunizations</li>
        <li>Health Education and Counseling</li>
      </ul>
      
      <p>Our team of experienced physicians provides personalized care for each patient, addressing their unique health needs and concerns.</p>
      
      <p>We emphasize the importance of preventive care and regular check-ups to maintain good health and detect potential health issues early.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Jean Kouame",
        title: "Chief of General Medicine",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Ugochi Odu",
        title: "Consultant Family Physician",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Consultation Rooms", "Examination Suites", "Preventive Care Center", "Health Screening Unit"],
  },
  pediatrics: {
    name: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    fullDescription: `
      <p>Our Pediatrics Department is dedicated to providing specialized healthcare for infants, children, and adolescents. We understand that children have unique healthcare needs and require specialized care.</p>
      
      <p>Our pediatric services include:</p>
      
      <ul>
        <li>Well-child check-ups and immunizations</li>
        <li>Treatment of childhood illnesses</li>
        <li>Growth and development monitoring</li>
        <li>Nutritional counseling</li>
        <li>Behavioral and developmental assessments</li>
        <li>Management of chronic conditions</li>
        <li>Emergency pediatric care</li>
        <li>Adolescent health services</li>
      </ul>
      
      <p>Our team of pediatricians is committed to providing compassionate, family-centered care in a child-friendly environment.</p>
      
      <p>We work closely with parents and caregivers to ensure the best possible health outcomes for children.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Sarah Pediatrics",
        title: "Chief Pediatrician",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. James Child",
        title: "Pediatric Specialist",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: [
      "Pediatric Consultation Rooms",
      "Child-Friendly Examination Areas",
      "Pediatric Emergency Unit",
      "Vaccination Center",
    ],
  },
  ophthalmology: {
    name: "Ophthalmology",
    description: "Comprehensive eye care services from routine exams to complex surgeries.",
    fullDescription: `
      <p>Our Ophthalmology Department offers comprehensive eye care services, from routine eye examinations to complex surgical procedures. We are committed to preserving and improving your vision.</p>
      
      <p>Our eye care services include:</p>
      
      <ul>
        <li>Comprehensive eye examinations</li>
        <li>Cataract surgery</li>
        <li>Glaucoma treatment and management</li>
        <li>Retinal disease treatment</li>
        <li>Diabetic eye care</li>
        <li>Refractive surgery (LASIK)</li>
        <li>Pediatric ophthalmology</li>
        <li>Emergency eye care</li>
      </ul>
      
      <p>Our experienced ophthalmologists use the latest technology and techniques to diagnose and treat a wide range of eye conditions.</p>
      
      <p>We emphasize preventive eye care and early detection of eye diseases to preserve vision and maintain eye health.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Vision Expert",
        title: "Chief Ophthalmologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Eye Specialist",
        title: "Retinal Specialist",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Advanced Eye Examination Suite", "Surgical Theater", "Laser Treatment Room", "Optical Shop"],
  },
  orthopedics: {
    name: "Orthopedics",
    description: "Treatment for conditions affecting the musculoskeletal system.",
    fullDescription: `
      <p>Our Orthopedics Department specializes in the diagnosis and treatment of conditions affecting the musculoskeletal system, including bones, joints, muscles, ligaments, and tendons.</p>
      
      <p>Our orthopedic services include:</p>
      
      <ul>
        <li>Joint replacement surgery</li>
        <li>Sports injury treatment</li>
        <li>Fracture care and trauma surgery</li>
        <li>Arthroscopic surgery</li>
        <li>Spine surgery</li>
        <li>Hand and wrist surgery</li>
        <li>Physical therapy and rehabilitation</li>
        <li>Pain management</li>
      </ul>
      
      <p>Our team of orthopedic surgeons and specialists is dedicated to helping patients regain mobility and return to their active lifestyles.</p>
      
      <p>We use minimally invasive techniques whenever possible to reduce recovery time and improve outcomes.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Bone Expert",
        title: "Chief Orthopedic Surgeon",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Joint Specialist",
        title: "Sports Medicine Specialist",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Operating Theaters", "Rehabilitation Center", "Sports Medicine Clinic", "Imaging Suite"],
  },
  pharmacy: {
    name: "Pharmacy",
    description: "Full-service pharmacy with prescription and over-the-counter medications.",
    fullDescription: `
      <p>Our Pharmacy Department provides a full range of pharmaceutical services to support your healthcare needs. We are committed to ensuring safe and effective medication therapy.</p>
      
      <p>Our pharmacy services include:</p>
      
      <ul>
        <li>Prescription medication dispensing</li>
        <li>Over-the-counter medications</li>
        <li>Medication counseling and education</li>
        <li>Drug interaction screening</li>
        <li>Medication therapy management</li>
        <li>Specialty medications</li>
        <li>Immunizations and vaccines</li>
        <li>Health screenings</li>
      </ul>
      
      <p>Our licensed pharmacists are available to answer questions about your medications and provide guidance on proper usage.</p>
      
      <p>We maintain a comprehensive inventory of medications and can order special medications as needed.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Pharm Expert",
        title: "Chief Pharmacist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Med Specialist",
        title: "Clinical Pharmacist",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Dispensing Area", "Consultation Room", "Medication Storage", "Compounding Lab"],
  },
  emergency: {
    name: "Emergency Care",
    description: "24/7 emergency services for critical and urgent medical needs.",
    fullDescription: `
      <p>Our Emergency Department provides 24/7 care for critical and urgent medical needs. We are equipped to handle all types of medical emergencies with rapid response and expert care.</p>
      
      <p>Our emergency services include:</p>
      
      <ul>
        <li>Trauma care and resuscitation</li>
        <li>Cardiac emergency care</li>
        <li>Stroke care</li>
        <li>Respiratory emergencies</li>
        <li>Pediatric emergencies</li>
        <li>Poison control and overdose treatment</li>
        <li>Emergency surgery</li>
        <li>Critical care stabilization</li>
      </ul>
      
      <p>Our emergency team includes board-certified emergency physicians, nurses, and support staff trained in advanced life support.</p>
      
      <p>We have direct access to all hospital services and specialists for comprehensive emergency care.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Emergency Chief",
        title: "Chief of Emergency Medicine",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Trauma Expert",
        title: "Emergency Physician",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Emergency Department", "Trauma Bay", "Resuscitation Room", "Observation Unit"],
  },
  laboratory: {
    name: "Laboratory Services",
    description: "Comprehensive diagnostic testing with quick and accurate results.",
    fullDescription: `
      <p>Our Laboratory Services provide comprehensive diagnostic testing with quick and accurate results to support clinical decision-making and patient care.</p>
      
      <p>Our laboratory services include:</p>
      
      <ul>
        <li>Blood chemistry and hematology</li>
        <li>Microbiology and infectious disease testing</li>
        <li>Immunology and serology</li>
        <li>Molecular diagnostics</li>
        <li>Pathology and histology</li>
        <li>Toxicology screening</li>
        <li>Genetic testing</li>
        <li>Point-of-care testing</li>
      </ul>
      
      <p>Our state-of-the-art laboratory is staffed by experienced medical technologists and pathologists.</p>
      
      <p>We maintain the highest standards of quality control and participate in proficiency testing programs.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Lab Director",
        title: "Chief Pathologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Test Expert",
        title: "Clinical Laboratory Director",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Clinical Laboratory", "Pathology Lab", "Microbiology Lab", "Molecular Diagnostics Lab"],
  },
  pulmonology: {
    name: "Pulmonology",
    description: "Diagnosis and treatment of respiratory conditions and lung diseases.",
    fullDescription: `
      <p>Our Pulmonology Department specializes in the diagnosis and treatment of respiratory conditions and lung diseases. We provide comprehensive care for patients with breathing difficulties and lung disorders.</p>
      
      <p>Our pulmonology services include:</p>
      
      <ul>
        <li>Asthma and COPD management</li>
        <li>Lung cancer screening and treatment</li>
        <li>Sleep apnea diagnosis and treatment</li>
        <li>Pulmonary function testing</li>
        <li>Bronchoscopy procedures</li>
        <li>Chest imaging interpretation</li>
        <li>Respiratory therapy</li>
        <li>Critical care pulmonology</li>
      </ul>
      
      <p>Our pulmonologists work closely with other specialists to provide comprehensive care for complex respiratory conditions.</p>
      
      <p>We emphasize patient education and lifestyle modifications to improve respiratory health and quality of life.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Lung Expert",
        title: "Chief Pulmonologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Respiratory Care",
        title: "Pulmonary Specialist",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Pulmonary Function Lab", "Bronchoscopy Suite", "Sleep Study Center", "Respiratory Therapy Unit"],
  },
  genetics: {
    name: "Genetics",
    description: "Genetic testing and counseling for hereditary conditions.",
    fullDescription: `
      <p>Our Genetics Department offers genetic testing and counseling services to help patients understand their genetic risks and make informed healthcare decisions.</p>
      
      <p>Our genetic services include:</p>
      
      <ul>
        <li>Genetic counseling and risk assessment</li>
        <li>Hereditary cancer screening</li>
        <li>Prenatal genetic testing</li>
        <li>Carrier screening</li>
        <li>Pharmacogenomics testing</li>
        <li>Rare disease diagnosis</li>
        <li>Family history evaluation</li>
        <li>Genetic test interpretation</li>
      </ul>
      
      <p>Our certified genetic counselors and medical geneticists provide personalized care and support throughout the genetic testing process.</p>
      
      <p>We help patients and families understand genetic test results and their implications for health and family planning.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Gene Expert",
        title: "Medical Geneticist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Counselor",
        title: "Genetic Counselor",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Genetic Counseling Rooms", "Molecular Genetics Lab", "Cytogenetics Lab", "Consultation Suites"],
  },
  vaccination: {
    name: "Vaccination",
    description: "Preventive vaccines for children and adults against various diseases.",
    fullDescription: `
      <p>Our Vaccination Services provide preventive vaccines for children and adults to protect against various infectious diseases. We follow national immunization guidelines and recommendations.</p>
      
      <p>Our vaccination services include:</p>
      
      <ul>
        <li>Childhood immunization schedules</li>
        <li>Adult vaccination programs</li>
        <li>Travel vaccines</li>
        <li>Occupational vaccines</li>
        <li>Seasonal flu vaccines</li>
        <li>COVID-19 vaccines</li>
        <li>Vaccine counseling and education</li>
        <li>Immunization record management</li>
      </ul>
      
      <p>Our healthcare providers ensure that vaccines are administered safely and according to established protocols.</p>
      
      <p>We maintain proper vaccine storage and handling procedures to ensure vaccine effectiveness and safety.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    specialists: [
      {
        name: "Dr. Vaccine Expert",
        title: "Immunization Specialist",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Dr. Prevention Care",
        title: "Public Health Physician",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    facilities: ["Vaccination Clinic", "Vaccine Storage Facility", "Consultation Rooms", "Observation Area"],
  },
}

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.name} | Alliance Hospital`,
    description: service.description,
  }
}

export default function ServicePage({ params }: Props) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Medical Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
            <p className="text-gray-200 text-lg">{service.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Our {service.name} Department</h2>
              <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: service.fullDescription }}></div>

              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/appointments">Book an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.specialists && service.specialists.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our {service.name} Specialists</h2>
              <p className="text-gray-600 text-lg">
                Meet our team of experienced specialists dedicated to providing exceptional care in{" "}
                {service.name.toLowerCase()}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.specialists.map((specialist, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="h-64 overflow-hidden">
                    <Image
                      src={specialist.image || "/placeholder.svg"}
                      alt={specialist.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{specialist.name}</h3>
                    <p className="text-primary font-medium">{specialist.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.facilities && service.facilities.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Facilities</h2>
              <p className="text-gray-600 text-lg">
                We are equipped with state-of-the-art facilities to provide the best care for our patients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {service.facilities.map((facility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">{facility}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCta />
    </>
  )
}
