import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Target,
  Eye,
  Heart,
  Lightbulb,
  Handshake,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe
} from 'lucide-react'

function AboutUs() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to excellence in everything we do to ensure software performs as expected. Our dedication to quality drives every decision we make."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We operate transparently to build trust and give clients confidence in their applications. Open communication is the foundation of our partnerships."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Be accountable, work together as a team and communicate clearly. We believe in the power of collective expertise and shared responsibility."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Think outside the box, challenge constructively and act before others do. We embrace new technologies and methodologies to stay ahead."
    },
    {
      icon: Heart,
      title: "Ethics",
      description: "Creating a positive place to work and supporting ethical initiatives. We prioritize integrity and social responsibility in all our endeavors."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Always deliver exceptional quality, accomplish and improve. We constantly evolve our processes to exceed expectations."
    }
  ]

  const differentiators = [
    {
      icon: Users,
      title: "Expert Team",
      description: "We understand that our people impact the success of our business, and we hire people who are smart, dedicated for TESTRIQ."
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      description: "We strive to provide superior customer service and ensure that every client is completely satisfied with our work."
    },
    {
      icon: CheckCircle,
      title: "Dedicated Engineers",
      description: "Our engineers are trustworthy, dedicated and experienced and will go the extra mile to solve your IT issues."
    },
    {
      icon: Target,
      title: "Value-Added Solutions",
      description: "We are committed to deliver outstanding, cutting edge IT solutions that add real value that goes beyond what is expected."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
              ISTQB Certified Experts
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Empowering Your <span className="text-[#25A8E0]">Software Journey</span> with Unwavering Quality
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Testriq: Your Trusted Partner in Comprehensive Software Quality Assurance. 
              High Quality Product is a shared responsibility, not just limited to Developers. 
              Let's Collaborate and Benefit Mutually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#25A8E0] hover:bg-[#1e90ff] text-white">
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-[#25A8E0] text-[#25A8E0] hover:bg-[#25A8E0] hover:text-white">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story & Journey
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Target className="h-5 w-5 text-[#25A8E0] mr-2" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To empower clients to confidently release reliable, high-quality software by providing expert testing services tailored to their needs. We take pride in helping both startups and enterprises build award-winning applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Eye className="h-5 w-5 text-[#25A8E0] mr-2" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the globally trusted provider of comprehensive quality assurance and testing solutions that instill confidence throughout the software development lifecycle.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#25A8E0]/10 to-blue-100 dark:from-[#25A8E0]/20 dark:to-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Testriq QA Lab LLP</h3>
                  <p className="text-[#25A8E0] font-medium">Confident Software Quality Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, and define how we deliver exceptional quality assurance services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#25A8E0]">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#25A8E0]/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-[#25A8E0]" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Testriq Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Testriq?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our differentiators that make us the preferred choice for software quality assurance and testing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#25A8E0]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-[#25A8E0]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Accreditations Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Affiliations & Accreditations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our commitment to quality is validated by industry-recognized certifications and standards.
            </p>
          </div>

          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="w-32 h-20 bg-[#25A8E0] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">ISO 27001</span>
              </div>
              <p className="text-sm text-muted-foreground">Information Security Management</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-20 bg-[#25A8E0] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">ISO 9001</span>
              </div>
              <p className="text-sm text-muted-foreground">Quality Management System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#25A8E0] to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner with a QA Leader?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join 50+ companies who trust us with their critical testing needs. 
              Contact us today for a free consultation and discover how we can elevate your software quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-[#25A8E0] hover:bg-gray-100">
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#25A8E0]">
                <Mail className="mr-2 h-4 w-4" />
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

