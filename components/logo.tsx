import { cn } from "@/lib/utils"
import Link from "next/link"

interface LogoProps {
  className?: string
  linkWrapper?: boolean
}

export default function Logo({ className, linkWrapper = true }: LogoProps) {
  const logoContent = (
    <div className={cn("flex items-center mr-6", className)}>
      <img src='/images/logo.png' alt="Alliance Hospital Logo" className="mr-4" />
    </div>
  )

  return linkWrapper ? <Link href="/">{logoContent}</Link> : logoContent
}
