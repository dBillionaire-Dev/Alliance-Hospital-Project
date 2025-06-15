import type { Metadata } from "next"
import GeneralApplicationClientPage from "./GeneralApplicationClientPage"

export const metadata: Metadata = {
  title: "General Application",
  description: "Submit a general application to Alliance Hospital Abuja.",
}

export default function GeneralApplicationPage() {
  return <GeneralApplicationClientPage />
}
