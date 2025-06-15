import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, AlertTriangle } from "lucide-react"

interface EmergencyButtonProps {
  variant?: "floating" | "inline"
  size?: "sm" | "default" | "lg"
}

export default function EmergencyButton({ variant = "inline", size = "default" }: EmergencyButtonProps) {
  const baseClasses = "emergency-button text-white font-bold border-0 hover:scale-105 transition-all duration-200"
  const floatingClasses = variant === "floating" ? "floating-emergency animate-pulse-emergency" : ""

  return (
    <div className={floatingClasses}>
      <Button
        asChild
        size={size}
        className={`${baseClasses} ${variant === "floating" ? "rounded-full h-16 w-16 p-0" : ""}`}
      >
        <Link href="/emergency" className="flex items-center gap-2">
          {variant === "floating" ? (
            <div className="flex flex-col items-center">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-xs mt-1">SOS</span>
            </div>
          ) : (
            <>
              <Phone className="h-5 w-5" />
              Emergency
            </>
          )}
        </Link>
      </Button>
    </div>
  )
}
