import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Doctors from "@/components/doctors"
import Testimonials from "@/components/testimonials"
import ContactCta from "@/components/contact-cta"
import Stats from "@/components/stats"

export const metadata: Metadata = {
  title: "Alliance Hospital",
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
      <Doctors />
      <Testimonials />
      <ContactCta />
    </>
  )
}
