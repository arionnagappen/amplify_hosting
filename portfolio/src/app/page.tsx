import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Cloud, Settings, Shield, Eye, Lock, Terminal } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const coreConceptsCards = [
    {
      title: "Infrastructure as Code",
      description:
        "Automated infrastructure provisioning using declarative configuration files for consistent, repeatable deployments.",
      icon: <Settings className="w-8 h-8 text-primary-blue" />,
    },
    {
      title: "CI/CD Automation",
      description: "Streamlined development workflows with automated testing, building, and deployment pipelines.",
      icon: <Terminal className="w-8 h-8 text-primary-blue" />,
    },
    {
      title: "Secure Cloud Design",
      description: "Implementation of security best practices and compliance standards across cloud infrastructure.",
      icon: <Shield className="w-8 h-8 text-primary-blue" />,
    },
  ]

  const technologies = [
    { name: "AWS", icon: <Cloud className="w-8 h-8" /> },
    { name: "Terraform", icon: <Settings className="w-8 h-8" /> },
    { name: "GitHub Actions", icon: <Terminal className="w-8 h-8" /> },
    { name: "CloudWatch", icon: <Eye className="w-8 h-8" /> },
    { name: "IAM", icon: <Lock className="w-8 h-8" /> },
    { name: "Bash", icon: <Terminal className="w-8 h-8" /> },
  ]

  const valueTiles = [
    {
      title: "Hands-on",
      description: "Real-world implementation with practical cloud engineering solutions",
    },
    {
      title: "Minimal Setup",
      description: "Streamlined deployment process with minimal configuration required",
    },
    {
      title: "Real Services",
      description: "Integration with actual cloud services and production-ready infrastructure",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="John Doe profile picture"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-8 border-4 border-light-blue-bg shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark-blue">
              Hi, I&rsquo;m John Doe 👋 Cloud Engineer
            </h1>
            <p className="text-xl text-text-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              This is a test portfolio project showcasing a simple AWS deployment pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="py-12 px-4 bg-light-blue-bg">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-lg text-text-gray">
              This is a demo layout built for testing portfolio infrastructure and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concepts Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-blue">Core Concepts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreConceptsCards.map((card, index) => (
              <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-dark-blue">{card.title}</h3>
                  <p className="text-text-gray leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 bg-light-blue-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-blue">Technologies Used</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-3 flex justify-center text-primary-blue">{tech.icon}</div>
                <h3 className="font-semibold text-dark-blue">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Profile Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Sample profile"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-8 border-4 border-light-blue-bg shadow-lg"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-blue">Sample Profile Section</h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto leading-relaxed">
            This section shows how you'd highlight a profile or project description.
          </p>
        </div>
      </section>

      {/* Value Tiles */}
      <section className="py-20 px-4 bg-light-blue-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-blue">Why This Project</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueTiles.map((tile, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-dark-blue">{tile.title}</h3>
                <p className="text-text-gray leading-relaxed">{tile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-dark-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-8">Deployed with Vercel | GitHub Repo Available</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="bg-white text-dark-blue hover:bg-gray-100" asChild>
              <Link href="#" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            <Button variant="outline" className="bg-white text-dark-blue hover:bg-gray-100" asChild>
              <Link href="#" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
