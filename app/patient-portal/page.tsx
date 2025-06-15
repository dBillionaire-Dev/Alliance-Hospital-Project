import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { LockKeyhole, User, Shield, FileText, Calendar, Activity } from "lucide-react"

export const metadata: Metadata = {
  title: "Patient Portal",
  description: "Access your medical records, appointments, and test results through our secure patient portal.",
}

export default function PatientPortalPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full font-medium text-sm mb-4">
              Patient Portal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Access Your Health Information</h1>
            <p className="text-gray-200 text-lg">
              Our secure patient portal gives you 24/7 access to your medical records, test results, appointments, and
              more.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Login</CardTitle>
                    <CardDescription>Enter your credentials to access your patient portal account.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="email" type="email" placeholder="name@example.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/patient-portal/reset-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <LockKeyhole className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Login to Portal
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Registration</CardTitle>
                    <CardDescription>
                      Create a new account to access the patient portal. You'll need your patient ID provided by the
                      hospital.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="First name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-id">Patient ID</Label>
                      <Input id="patient-id" placeholder="Your patient ID (e.g., AH-12345)" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-of-birth">Date of Birth</Label>
                      <Input id="date-of-birth" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Create a password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" placeholder="Confirm your password" />
                    </div>
                    <Button type="submit" className="w-full">
                      Register
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Portal Features</h2>
            <p className="text-gray-600 text-lg">
              Our patient portal provides convenient access to your health information and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Medical Records",
                description: "Access your medical history, diagnoses, and treatment plans.",
              },
              {
                icon: Calendar,
                title: "Appointments",
                description: "Schedule, view, and manage your upcoming appointments.",
              },
              {
                icon: Activity,
                title: "Test Results",
                description: "View your laboratory and diagnostic test results.",
              },
              {
                icon: User,
                title: "Provider Communication",
                description: "Securely message your healthcare providers.",
              },
              {
                icon: Shield,
                title: "Privacy & Security",
                description: "Your information is protected with industry-leading security measures.",
              },
              {
                icon: FileText,
                title: "Prescription Refills",
                description: "Request prescription refills and view medication history.",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
                  question: "How do I sign up for the patient portal?",
                  answer:
                    "To sign up for the patient portal, you need your patient ID provided during your visit. Use the registration form above to create your account.",
                },
                {
                  question: "Is my information secure?",
                  answer:
                    "Yes, we use industry-standard encryption and security measures to protect your personal health information. Our portal complies with all healthcare privacy regulations.",
                },
                {
                  question: "What if I forget my password?",
                  answer:
                    "You can reset your password by clicking the 'Forgot password?' link on the login page. You'll receive instructions via email to create a new password.",
                },
                {
                  question: "Can I access the portal on my mobile device?",
                  answer:
                    "Yes, our patient portal is fully responsive and can be accessed on smartphones, tablets, and computers.",
                },
                {
                  question: "Who do I contact for technical support?",
                  answer:
                    "For technical support with the patient portal, please email support@alliancehospitalabj.com or call our help desk at +225 27 22 49 58 58.",
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
    </>
  )
}
