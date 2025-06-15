import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Alliance Hospital Abuja. We're here to answer your questions and provide assistance with your healthcare needs.",
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-gray-200 text-lg">
              We're here to answer your questions and provide assistance with your healthcare needs.
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
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Have questions or need to schedule an appointment? Our friendly staff is ready to assist you with
                    all your healthcare needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">+234 8097142623</p>
                      <p className="text-gray-600">+234 8097142624</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">info@alliancehospitalabj.com</p>
                      <p className="text-gray-600">appointments@alliancehospitalabj.com</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-gray-600">No. 5 Malumfashi Close, Off Emeka Anyaoku Street</p>
                      <p className="text-gray-600">Area 11, Garki, Abuja, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Hours of Operation</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                      <p className="text-gray-600 font-medium">Emergency Services: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-2 order-1 lg:order-2" animation="slideLeft" delay={400}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
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
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Message subject"
                      required
                    />
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
                      <option value="general">General Inquiry</option>
                      <option value="appointments">Appointments</option>
                      <option value="billing">Billing & Insurance</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Us</h2>
            <p className="text-gray-600 text-lg">
              Alliance Hospital Abuja is conveniently located in Garki, one of Abuja's premier neighborhoods.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px] bg-gray-200">
              {/* This would be replaced with an actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">Map Placeholder</p>
                  <p>An interactive map would be embedded here</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
