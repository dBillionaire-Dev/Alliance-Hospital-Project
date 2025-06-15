import CountUp from "./count-up"
import { AnimatedSection } from "./animated-section"

const stats = [
  {
    number: 50000,
    suffix: "+",
    label: "Patients Treated",
    description: "Successfully treated patients",
  },
  {
    number: 500,
    suffix: "+",
    label: "Medical Specialists",
    description: "Expert doctors and specialists",
  },
  {
    number: 10,
    suffix: "+",
    label: "Years of Excellence",
    description: "Serving the community",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Emergency Care",
    description: "Round-the-clock emergency services",
  },
]

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600 text-lg">
              These numbers reflect our commitment to providing exceptional healthcare services to our community.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={300 + index * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
