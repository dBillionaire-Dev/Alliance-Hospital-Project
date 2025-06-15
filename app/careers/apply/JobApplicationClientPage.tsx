"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

export default function JobApplicationClientPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto" delay={100}>
            <Link
              href="/careers"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Link>
            <div className="text-center">
              <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
                Job Application
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply for Position</h1>
              <p className="text-gray-200 text-lg">
                Join our team and make a difference in healthcare. Fill out the form below to apply.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Job Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                        First Name *
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
                        Last Name *
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
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="+234 XXX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium text-gray-700">
                      Position Applied For *
                    </label>
                    <select
                      id="position"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Select a position</option>
                      <option value="registered-nurse-cardiology">Registered Nurse - Cardiology</option>
                      <option value="medical-laboratory-technician">Medical Laboratory Technician</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="administrative-assistant">Administrative Assistant</option>
                      <option value="doctor-general-medicine">Doctor - General Medicine</option>
                      <option value="nurse-practitioner">Nurse Practitioner</option>
                      <option value="radiologic-technologist">Radiologic Technologist</option>
                      <option value="physical-therapist">Physical Therapist</option>
                      <option value="medical-receptionist">Medical Receptionist</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message-title" className="text-sm font-medium text-gray-700">
                      Message Title *
                    </label>
                    <input
                      id="message-title"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="e.g., Application for Registered Nurse Position"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message to HR *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tell us about yourself, your experience, and why you want to work at Alliance Hospital..."
                      required
                    ></textarea>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="cv" className="text-sm font-medium text-gray-700">
                        Upload CV/Resume *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-primary/50 transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                        <input id="cv" type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => document.getElementById("cv")?.click()}
                        >
                          Choose File
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="documents" className="text-sm font-medium text-gray-700">
                        Supporting Documents (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-primary/50 transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload certificates, licenses, or other documents</p>
                        <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 10MB total)</p>
                        <input id="documents" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple className="hidden" />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => document.getElementById("documents")?.click()}
                        >
                          Choose Files
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input id="terms" type="checkbox" className="mt-1" required />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the terms and conditions and consent to the processing of my personal data for
                      recruitment purposes. *
                    </label>
                  </div>

                  <div className="flex items-start gap-2">
                    <input id="newsletter" type="checkbox" className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm text-gray-700">
                      I would like to receive updates about future job opportunities at Alliance Hospital.
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We will review your application and contact you if your qualifications match our requirements.
                  </p>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
