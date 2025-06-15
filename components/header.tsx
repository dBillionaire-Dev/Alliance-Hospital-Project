"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import Logo from "@/components/logo"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Medical Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blogs" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close sidebar when pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname.startsWith(path))
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Main navigation */}
      <div className={cn("bg-white transition-all duration-300 border-b", isScrolled ? "py-2 shadow-md" : "py-4")}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo className="h-10 w-auto" />

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-gray-700 hover:text-primary font-medium transition-colors whitespace-nowrap px-1 nav-link",
                      isActive(item.href) ? "active text-primary" : "",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors whitespace-nowrap px-1 nav-link">
                    <span>Patients</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1">
                      <Link href="/insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Insurance Information
                      </Link>
                      <Link href="/patient-forms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Patient Forms
                      </Link>
                      <Link href="/patient-portal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Patient Portal
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="hidden lg:block ml-8">
              <Button asChild className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Link href="/appointments">MAKE AN APPOINTMENT</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <Logo className="h-8 w-40 mb-4" />
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={handleLinkClick}
                        className={cn(
                          "text-lg font-medium text-gray-700 hover:text-primary transition-colors",
                          isActive(item.href) ? "text-primary" : "",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <details className="group">
                      <summary className="text-lg font-medium text-gray-700 hover:text-primary cursor-pointer">
                        Patients
                      </summary>
                      <div className="mt-2 ml-4 flex flex-col space-y-2">
                        <Link
                          href="/insurance"
                          onClick={handleLinkClick}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Insurance Information
                        </Link>
                        <Link
                          href="/patient-forms"
                          onClick={handleLinkClick}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Patient Forms
                        </Link>
                        <Link
                          href="/patient-portal"
                          onClick={handleLinkClick}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          Patient Portal
                        </Link>
                      </div>
                    </details>
                  </nav>
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90" onClick={handleLinkClick}>
                      <Link href="/appointments">MAKE AN APPOINTMENT</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
