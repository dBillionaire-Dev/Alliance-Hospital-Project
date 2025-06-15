import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Phone, CalendarCheck } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule an appointment with one of our specialists at Alliance Hospital Abidjan. We offer convenient online booking and flexible appointment times.",
}

export default function AppointmentsPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Appointments
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-gray-200 text-lg">
              Schedule a consultation with one of our specialists. We offer convenient online booking and flexible
              appointment times.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <AnimatedSection className="lg:col-span-1 order-2 lg:order-1" animation="slideRight" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Appointment Information</h2>
                  <p className="text-gray-600 mb-8">
                    Choose your preferred method to schedule an appointment with our specialists.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>By Phone</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        Call our appointment line to speak directly with our scheduling team.
                      </CardDescription>
                      <p className="font-medium">+234 8097142623</p>
                      <p className="text-sm text-gray-500">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Online Booking</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        Use our online form to schedule an appointment at your convenience.
                      </CardDescription>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Walk-In Hours</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        For urgent but non-emergency cases, you can visit during our walk-in hours.
                      </CardDescription>
                      <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 11:00 AM</p>
                      <p className="text-sm text-gray-500">Saturday: 10:00 AM - 12:00 PM</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-2 order-1 lg:order-2" animation="slideLeft" delay={400}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Online Appointment Request</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-medium text-gray-700">
                      Department
                    </label>
                    <select
                      id="department"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Select a department</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="ophthalmology">Ophthalmology</option>
                      <option value="general-medicine">General Medicine</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="gastroenterology">Gastroenterology</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="preferred-date" className="text-sm font-medium text-gray-700">
                        Preferred Date
                      </label>
                      <input
                        id="preferred-date"
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="preferred-time" className="text-sm font-medium text-gray-700">
                        Preferred Time
                      </label>
                      <select
                        id="preferred-time"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="reason" className="text-sm font-medium text-gray-700">
                      Reason for Visit
                    </label>
                    <textarea
                      id="reason"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Please briefly describe the reason for your visit"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2">
                    <input id="new-patient" type="checkbox" className="mt-1" />
                    <label htmlFor="new-patient" className="text-sm text-gray-700">
                      I am a new patient
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <CalendarCheck className="mr-2 h-5 w-5" />
                    Request Appointment
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    This is a request form. Our team will contact you to confirm your appointment.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What to Expect</h2>
            <p className="text-gray-600 text-lg">
              Here's what you can expect when you visit Alliance Hospital Abidjan for your appointment.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Before Your Visit",
                items: [
                  "Bring your ID and insurance information",
                  "List of current medications",
                  "Previous medical records if available",
                  "Arrive 15 minutes early to complete paperwork",
                ],
              },
              {
                step: "2",
                title: "During Your Visit",
                items: [
                  "Check-in at the reception desk",
                  "Initial assessment by a nurse",
                  "Consultation with your doctor",
                  "Diagnostic tests if necessary",
                ],
              },
              {
                step: "3",
                title: "After Your Visit",
                items: [
                  "Receive your treatment plan",
                  "Schedule follow-up appointments if needed",
                  "Visit our pharmacy for prescribed medications",
                  "Access your medical records online",
                ],
              },
            ].map((step, index) => (
              <AnimatedSection key={step.step} delay={300 + index * 200}>
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold text-xl">{step.step}</span>
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      {step.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
