import type { Metadata } from "next"
import JobApplicationClientPage from "./JobApplicationClientPage"

export const metadata: Metadata = {
  title: "Job Application",
  description: "Apply for a position at Alliance Hospital Abuja.",
}

export default function JobApplicationPage() {
  return <JobApplicationClientPage />
}
