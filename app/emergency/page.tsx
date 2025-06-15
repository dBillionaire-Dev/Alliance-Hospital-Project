import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Phone, MapPin, Clock, Ambulance, Info } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Emergency Services",
  description:
    "Alliance Hospital Abidjan provides 24/7 emergency medical services. Learn about our emergency care and how to access it.",
}

export default function EmergencyPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-red-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Emergency Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">24/7 Emergency Care</h1>
            <p className="text-gray-700 text-lg mb-8">
              Our emergency department is staffed around the clock with experienced medical professionals ready to
              provide immediate care for critical and urgent medical needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+22527224958" className="text-lg">
                  Emergency: +225 27 22 49 58
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">When to Seek Emergency Care</h2>
              <p className="text-gray-600 mb-8">
                If you or someone you know experiences any of the following symptoms, seek emergency medical care
                immediately:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Chest pain or pressure",
                  "Difficulty breathing",
                  "Severe bleeding",
                  "Sudden numbness or weakness",
                  "Severe abdominal pain",
                  "Loss of consciousness",
                  "Severe burns",
                  "Poisoning or overdose",
                  "Severe head injury",
                  "Seizures",
                  "Severe allergic reactions",
                  "Broken bones with visible deformity",
                ].map((symptom, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Important Note</h3>
                    <p className="text-gray-700">
                      If you believe you are experiencing a life-threatening emergency, call emergency services
                      immediately at <strong>180</strong> or proceed to the nearest emergency department.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Emergency Department Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-red-600 mb-2">Open 24 hours a day, 7 days a week</p>
                  <p className="text-gray-600">
                    Our emergency department is always open, including weekends and holidays, to provide care when you
                    need it most.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold mb-2">Alliance Hospital Abidjan - Emergency Department</p>
                  <p className="text-gray-600 mb-4">Cocody, Abidjan, Côte d'Ivoire</p>
                  <p className="text-gray-600 mb-2">
                    <strong>Note:</strong> The emergency department entrance is located on the east side of the hospital
                    building, with dedicated parking nearby.
                  </p>
                  <Button variant="outline" className="mt-2">
                    View Map
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-bold">Emergency Department Direct Line:</p>
                    <p className="text-red-600 font-bold">+225 27 22 49 58</p>
                  </div>
                  <div>
                    <p className="font-bold">Ambulance Service:</p>
                    <p className="text-red-600 font-bold">+225 07 07 22 49 58</p>
                  </div>
                  <div>
                    <p className="font-bold">National Emergency Number:</p>
                    <p className="text-red-600 font-bold">180</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Emergency Services</h2>
            <p className="text-gray-600 text-lg">
              Our emergency department is equipped to handle a wide range of medical emergencies with state-of-the-art
              equipment and experienced staff.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Ambulance,
                title: "Ambulance Services",
                description:
                  "Our ambulance services provide rapid response and transportation with advanced life support capabilities.",
              },
              {
                icon: AlertTriangle,
                title: "Trauma Care",
                description:
                  "Our trauma team is trained to handle serious injuries and provide immediate, life-saving care.",
              },
              {
                icon: Clock,
                title: "Rapid Assessment",
                description:
                  "Our triage system ensures that patients are assessed quickly and receive appropriate care based on the severity of their condition.",
              },
              {
                icon: Info,
                title: "Diagnostic Services",
                description: "Immediate access to laboratory tests, X-rays, CT scans, and other diagnostic services.",
              },
              {
                icon: Phone,
                title: "Teleconsultation",
                description:
                  "Emergency teleconsultation with specialists for complex cases requiring specialized expertise.",
              },
              {
                icon: MapPin,
                title: "Critical Care Unit",
                description:
                  "Direct access to our critical care unit for patients requiring intensive monitoring and treatment.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I know if I should go to the emergency department?",
                  answer:
                    "If you are experiencing severe pain, difficulty breathing, uncontrolled bleeding, or any symptoms that feel life-threatening, you should seek emergency care immediately. When in doubt, it's better to err on the side of caution.",
                },
                {
                  question: "What should I bring to the emergency department?",
                  answer:
                    "If possible, bring your identification, insurance information, a list of current medications, and information about any allergies or medical conditions. However, in a true emergency, don't delay seeking care to gather these items.",
                },
                {
                  question: "How does the triage process work?",
                  answer:
                    "When you arrive at our emergency department, a triage nurse will assess your condition based on the severity of your symptoms. Patients with life-threatening conditions are seen first, regardless of arrival time.",
                },
                {
                  question: "Can family members stay with me in the emergency department?",
                  answer:
                    "In most cases, one family member can accompany you in the treatment area. However, this may be limited depending on the nature of your condition and current hospital policies.",
                },
                {
                  question: "What happens if I need to be admitted to the hospital?",
                  answer:
                    "If your condition requires hospitalization, our emergency department staff will coordinate with the appropriate department for your admission. We strive to make this transition as smooth as possible.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Emergency Preparedness</h2>
            <p className="text-gray-700 text-lg mb-8">
              Being prepared for medical emergencies can save lives. Consider taking a first aid and CPR course to learn
              essential life-saving skills.
            </p>
            <Button asChild size="lg">
              <Link href="/services/first-aid-training">Learn About Our First Aid Training</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
