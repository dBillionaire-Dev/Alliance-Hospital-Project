import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container py-12">
        <div className="text-center mb-8">
          <p className="max-w-3xl mx-auto">
            Alliance Hospital is a Multi-Specialty Hospital located at No. 5 Malumfashi Close, Off Emeka Anyaoku Street,
            Area 11, Garki, F.C.T, Abuja. It was established with the goal of offering world class medical services
            thereby stopping medical tourism by Nigerians to foreign countries.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link href="/blogs" className="hover:text-primary transition-colors">
            Blogs
          </Link>
          <Link href="/appointments" className="hover:text-primary transition-colors">
            Book Appointment
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </Link>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <Link href="#" className="hover:text-primary transition-colors">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container text-center">
          <p>&copy; Copyright {new Date().getFullYear()} <a href="http://nexdbillionairedev.vercel.app" target="_blank" rel="noopener noreferrer">Nex.Dev</a>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
