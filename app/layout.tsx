import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Alliance Hospital",
    default: "Alliance Hospital | Quality Healthcare in Nigeria",
  },
  description:
    "Alliance Hospital provides world-class healthcare services in Nigeria with state-of-the-art facilities and experienced medical professionals.",
  keywords: ["hospital", "healthcare", "medical center", "Abuja", "Nigeria", "doctors", "medical services"],
  authors: [{ name: "Alliance Hospital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alliancehospitalabj.com",
    title: "Alliance Hospital | Quality Healthcare in Nigeria",
    description:
      "Alliance Hospital provides world-class healthcare services in Nigeria with state-of-the-art facilities and experienced medical professionals.",
    siteName: "Alliance Hospital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alliance Hospital | Quality Healthcare in Nigeria",
    description:
      "Alliance Hospital provides world-class healthcare services in Nigeria with state-of-the-art facilities and experienced medical professionals.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
