import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import AboutUs from './AboutUs.jsx'
import { 
  CheckCircle, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Globe, 
  Cpu, 
  Database, 
  Lock,
  Zap,
  Monitor,
  ChevronRight,
  Star,
  Play,
  ArrowRight,
  Menu,
  X,
  ChevronLeft,
  ExternalLink,
  Target,
  Clock,
  Calendar,
  BarChart3,
  Lightbulb,
  Rocket,
  ChevronDown,
  Sun,
  Moon,
  Phone,
  Home
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')

  // Theme toggle functionality
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Mega menu data
  const servicesMenu = [
    {
      category: "Core Testing Services",
      items: [
        { name: "LaunchFast QA", href: "#launchfast" },
        { name: "Web Application Testing", href: "#web-testing" },
        { name: "Mobile Application Testing", href: "#mobile-testing" },
        { name: "Desktop Application Testing", href: "#desktop-testing" },
        { name: "API Testing", href: "#api-testing" },
        { name: "Performance Testing", href: "#performance-testing" }
      ]
    },
    {
      category: "Specialized Testing",
      items: [
        { name: "AI Application Testing", href: "#ai-testing" },
        { name: "IoT Device Testing", href: "#iot-testing" },
        { name: "Security Testing", href: "#security-testing" },
        { name: "Robotics Testing", href: "#robotics-testing" },
        { name: "Smart Device Testing", href: "#smart-device-testing" },
        { name: "ETL Testing", href: "#etl-testing" }
      ]
    },
    {
      category: "Testing Approaches",
      items: [
        { name: "Exploratory Testing", href: "#exploratory-testing" },
        { name: "Manual Testing", href: "#manual-testing" },
        { name: "Automation Testing", href: "#automation-testing" },
        { name: "Regression Testing", href: "#regression-testing" },
        { name: "Data Analysis", href: "#data-analysis" },
        { name: "QA Documentation", href: "#qa-documentation" }
      ]
    }
  ]

  const qaSolutionsMenu = [
    {
      category: "AI & ML Solutions",
      items: [
        { name: "AI Application Testing", href: "#ai-solutions" },
        { name: "ML Model Validation", href: "#ml-validation" },
        { name: "Intelligent Test Automation", href: "#intelligent-automation" },
        { name: "Data Quality Assurance", href: "#data-quality" }
      ]
    }
  ]

  const services = [
    {
      icon: Globe,
      title: "Web & Mobile Testing",
      description: "End-to-end testing for web applications and mobile apps (iOS & Android), covering functional, usability, performance, and security aspects."
    },
    {
      icon: Database,
      title: "API Testing",
      description: "Validate functionality, reliability, performance, and security of your APIs. Ensure seamless communication between software components."
    },
    {
      icon: Cpu,
      title: "AI & ML Testing",
      description: "Specialized testing for AI-powered applications, including data integrity, model accuracy validation, and bias detection."
    },
    {
      icon: Smartphone,
      title: "IoT Testing",
      description: "Comprehensive testing for IoT devices and smart technologies, ensuring connectivity, security, and compatibility."
    },
    {
      icon: Lock,
      title: "Security Testing",
      description: "Robust security testing including vulnerability assessments, penetration testing, and security audits."
    },
    {
      icon: Zap,
      title: "Performance Testing",
      description: "Evaluate application speed, scalability, and stability under various load conditions."
    }
  ]

  // Carousel data for hero section
  const carouselSlides = [
    {
      icon: Rocket,
      title: "LaunchFast QA",
      description: "Accelerate your product launch with our rapid testing solutions designed for startups and agile teams.",
      link: "#services",
      gradient: "from-[#25A8E0] to-[#1e90ff]"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Comprehensive security testing to protect your applications from vulnerabilities and cyber threats.",
      link: "#services",
      gradient: "from-[#25A8E0] to-[#0ea5e9]"
    },
    {
      icon: BarChart3,
      title: "Performance Excellence",
      description: "Optimize your application's speed and scalability with our advanced performance testing methodologies.",
      link: "#services",
      gradient: "from-[#25A8E0] to-[#0284c7]"
    },
    {
      icon: Cpu,
      title: "AI & ML Testing",
      description: "Specialized testing for AI-powered applications ensuring accuracy, reliability, and ethical AI systems.",
      link: "#services",
      gradient: "from-[#25A8E0] to-[#0369a1]"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  const process = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Thoroughly understand project requirements, business goals, and target audience to define testing scope."
    },
    {
      step: "02",
      title: "Test Planning & Strategy",
      description: "Develop comprehensive test plan outlining strategy, resources, tools, and timelines."
    },
    {
      step: "03",
      title: "Test Case Design & Execution",
      description: "Design detailed test cases and execute meticulously, identifying defects and ensuring quality."
    },
    {
      step: "04",
      title: "Reporting & Analysis",
      description: "Provide clear reports on test progress, defect status, and quality metrics with actionable insights."
    },
    {
      step: "05",
      title: "Regression & Release Support",
      description: "Ensure application stability through regression testing and continuous support until successful release."
    }
  ]

  const testimonials = [
    {
      name: "Jake Browning",
      role: "Director of Product and Technology",
      content: "Testriq is thorough and proficient in testing across our diverse user base. They are flexible and reliably meet deadlines.",
      rating: 5
    },
    {
      name: "Ranjan Upadhyay",
      role: "Vice President - Operations",
      content: "Testriq provides comprehensive testing resources and responsive support. They've played a crucial role in our business success.",
      rating: 5
    },
    {
      name: "Vinay Vikram Singh",
      role: "Director",
      content: "TESTRIQ provided clear, actionable insights that improved both performance and user experience. Their professionalism is truly appreciated.",
      rating: 5
    },
    {
      name: "Dave Hadden",
      role: "Founder and President, Pro-ficiency",
      content: "Testriq was a clutch QA partner, providing essential services to meet rigorous regulatory requirements with excellence.",
      rating: 5
    }
  ]

  const caseStudies = [
    {
      title: "E-commerce Performance Boost",
      description: "Reduced page load times by 30% for a leading e-commerce client through comprehensive performance testing.",
      impact: "30% faster load times"
    },
    {
      title: "Mobile Banking Security",
      description: "Identified and mitigated critical vulnerabilities for a mobile banking application through thorough security audit.",
      impact: "Zero security incidents"
    },
    {
      title: "Smart Home Compatibility",
      description: "Ensured seamless compatibility and functionality for a new line of smart home devices across various operating systems.",
      impact: "100% compatibility"
    }
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {currentPage === 'about' ? (
        <div>
          {/* Navigation for About Us page */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <a 
                    href="#home" 
                    className="text-2xl font-bold text-[#25A8E0]"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage('home')
                    }}
                  >
                    Testriq
                  </a>
                </div>
                
                <div className="hidden lg:flex items-center space-x-8">
                  <a 
                    href="#home" 
                    className="text-muted-foreground hover:text-[#25A8E0] transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage('home')
                    }}
                  >
                    <Home className="inline mr-2 h-4 w-4" />
                    Back to Home
                  </a>
                  
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="p-2"
                    >
                      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    
                    <Button className="bg-[#25A8E0] hover:bg-[#1e90ff] text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Talk to Expert
                    </Button>
                  </div>
                </div>
                
                <div className="lg:hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation for About Us */}
            {isMenuOpen && (
              <div className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
                  <a 
                    href="#home" 
                    className="block px-3 py-2 text-foreground hover:text-[#25A8E0]"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage('home')
                      setIsMenuOpen(false)
                    }}
                  >
                    <Home className="inline mr-2 h-4 w-4" />
                    Back to Home
                  </a>
                  <div className="px-3 py-2 flex items-center justify-between">
                    <Button className="flex-1 mr-2 bg-[#25A8E0] hover:bg-[#1e90ff] text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Talk to Expert
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="p-2"
                    >
                      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </nav>
          
          <AboutUs />
        </div>
      ) : (
        <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                Test<span className="text-[#25A8E0]">riq</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-[#25A8E0] transition-colors">Home</a>
                <a href="#company" className="text-muted-foreground hover:text-[#25A8E0] transition-colors">Company</a>
                
                {/* Services Mega Menu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center text-muted-foreground hover:text-[#25A8E0] transition-colors">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="absolute top-full left-0 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-lg p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {servicesMenu.map((category, index) => (
                          <div key={index}>
                            <h3 className="font-semibold text-[#25A8E0] mb-3">{category.category}</h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a 
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-[#25A8E0] transition-colors"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* QA Solutions Mega Menu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('qa-solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center text-muted-foreground hover:text-[#25A8E0] transition-colors">
                    QA Solutions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'qa-solutions' && (
                    <div className="absolute top-full left-0 mt-2 w-[400px] bg-background border border-border rounded-lg shadow-lg p-6">
                      <div className="grid grid-cols-1 gap-6">
                        {qaSolutionsMenu.map((category, index) => (
                          <div key={index}>
                            <h3 className="font-semibold text-[#25A8E0] mb-3">{category.category}</h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a 
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-[#25A8E0] transition-colors"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-[#25A8E0] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage('about')
                  }}
                >
                  About Us
                </a>
                <a href="#tools" className="text-muted-foreground hover:text-[#25A8E0] transition-colors">Tools</a>
                <a href="#clients" className="text-muted-foreground hover:text-[#25A8E0] transition-colors">Our Clients</a>
                <a href="#blog" className="text-muted-foreground hover:text-[#25A8E0] transition-colors">Blog</a>
                <a href="#jobs" className="text-muted-foreground hover:text-[#25A8E0] transition-colors">Jobs</a>
                <a href="#contact" className="text-muted-foreground hover:text-[#25A8E0] transition-colors">Contact</a>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Talk to Expert Button */}
              <Button className="bg-[#25A8E0] hover:bg-[#1e90ff] text-white">
                <Phone className="mr-2 h-4 w-4" />
                Talk to Expert
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-[#25A8E0]">Home</a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage('about')
                  setIsMenuOpen(false)
                }}
              >
                About Us
              </a>
              <a href="#company" className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]">Company</a>
              <a href="#services" className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]">Services</a>
              <a href="#qa-solutions" className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]">QA Solutions</a>
              <a href="#tools" className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]">Tools</a>
              <a href="#clients" className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]">Our Clients</a>
              <a href="#blog" className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]">Blog</a>
              <a href="#jobs" className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]">Jobs</a>
              <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-[#25A8E0]">Contact</a>
              <div className="px-3 py-2 flex items-center justify-between">
                <Button className="flex-1 mr-2 bg-[#25A8E0] hover:bg-[#1e90ff] text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Talk to Expert
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="p-2"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100">
                ISTQB Certified Experts
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Premium <span className="text-blue-600">Software Testing</span> Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Accelerate your product launch with our comprehensive QA solutions. Over a decade of experience 
                delivering exceptional software testing services to startups and industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="bg-[#25A8E0] hover:bg-[#1e90ff] text-white">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#25A8E0] text-[#25A8E0] hover:bg-[#25A8E0] hover:text-white">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Calendar className="w-6 h-6 text-[#25A8E0] mr-2" />
                    <div className="text-3xl font-bold text-[#25A8E0]">14+</div>
                  </div>
                  <div className="text-muted-foreground">Years Of Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <CheckCircle className="w-6 h-6 text-[#25A8E0] mr-2" />
                    <div className="text-3xl font-bold text-[#25A8E0]">500K+</div>
                  </div>
                  <div className="text-muted-foreground">Test Cases Executed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Award className="w-6 h-6 text-[#25A8E0] mr-2" />
                    <div className="text-3xl font-bold text-[#25A8E0]">180</div>
                  </div>
                  <div className="text-muted-foreground">Certified Experts</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Users className="w-6 h-6 text-[#25A8E0] mr-2" />
                    <div className="text-3xl font-bold text-[#25A8E0]">100%</div>
                  </div>
                  <div className="text-muted-foreground">End User Satisfaction</div>
                </div>
                <div className="text-center lg:text-left lg:col-span-2">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Clock className="w-6 h-6 text-[#25A8E0] mr-2" />
                    <div className="text-3xl font-bold text-[#25A8E0]">24/7</div>
                  </div>
                  <div className="text-muted-foreground">Availability</div>
                </div>
              </div>
            </div>

            {/* Right Column - Carousel */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                {carouselSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    style={{
                      transform: `translateX(${(index - currentSlide) * 100}%)`
                    }}
                  >
                    <div className={`h-full bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center text-white relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                          <slide.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-white/90 mb-6 leading-relaxed">{slide.description}</p>
                        <a 
                          href={slide.link}
                          className="inline-flex items-center text-white hover:text-white/80 transition-colors font-semibold"
                        >
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Testriq? Your Partner in Quality Assurance
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Testriq QA Lab LLP is dedicated to helping businesses develop award-winning applications. 
                Our team of ISTQB Certified Experts specializes in a wide range of testing services, 
                ensuring quality and client success across diverse industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Budget-friendly and capital-efficient solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Perfect for lean startups and agile innovators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Comprehensive QA solutions tailored to your needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Responsive support and proven expertise</span>
                </div>
              </div>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">LaunchFast QA</h3>
                  <p className="text-gray-600">Accelerated Growth, Capital Efficient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Software Testing Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our specialized testing services designed to meet your unique quality assurance needs 
              with responsive support and proven expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#25A8E0]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#25A8E0]" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#25A8E0] hover:bg-[#1e90ff] text-white">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Redesigned */}
      <section id="process" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#25A8E0] rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-[#25A8E0] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-[#25A8E0] rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-[#25A8E0] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#25A8E0]/10 text-[#25A8E0] border-[#25A8E0]/20">
              Our Process
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Robust QA Methodology
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We follow a proven, transparent methodology that ensures the highest quality and efficiency in every project, 
              delivering exceptional results through systematic excellence.
            </p>
          </div>

          {/* Interactive Process Flow */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#25A8E0]/20 via-[#25A8E0] to-[#25A8E0]/20 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Card */}
                  <div className="bg-background border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#25A8E0] to-[#1e90ff] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-[#25A8E0] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#25A8E0]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                      <div className="w-4 h-4 bg-[#25A8E0] rounded-full flex items-center justify-center">
                        <ChevronRight className="w-2 h-2 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ready to experience our proven methodology?
            </p>
            <Button className="bg-[#25A8E0] hover:bg-[#1e90ff] text-white px-8 py-3">
              <Target className="mr-2 h-4 w-4" />
              Start Your QA Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Impact: Real-World Successes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how Testriq has helped clients achieve their quality goals and overcome complex challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {study.impact}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Case Studies
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="clients" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our clients say about our exceptional QA services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Elevate Your Software Quality?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join 50+ companies who trust us with their critical testing needs. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Industry Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We serve diverse industries with specialized testing solutions tailored to unique business requirements and compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "E-commerce", icon: "🛒", description: "Payment gateways, user experience, performance" },
              { name: "Healthcare", icon: "🏥", description: "HIPAA compliance, data security, patient safety" },
              { name: "FinTech", icon: "💳", description: "Financial regulations, security, transaction integrity" },
              { name: "EdTech", icon: "📚", description: "Learning platforms, accessibility, scalability" },
              { name: "Gaming", icon: "🎮", description: "Performance, multiplayer, cross-platform" },
              { name: "IoT", icon: "🌐", description: "Device connectivity, data integrity, security" },
              { name: "SaaS", icon: "☁️", description: "Multi-tenancy, scalability, integration" },
              { name: "Mobile Apps", icon: "📱", description: "Cross-platform, performance, usability" }
            ].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#25A8E0] hover:bg-[#1e90ff] text-white">
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Technology Stack
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We leverage cutting-edge tools and technologies to deliver comprehensive testing solutions across all platforms and environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-lg mb-6 text-[#25A8E0] text-center">Automation Tools</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src="/icons/selenium.png" alt="Selenium" className="w-8 h-8 object-contain" />
                  <span className="text-muted-foreground">Selenium WebDriver</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/icons/cypress.png" alt="Cypress" className="w-8 h-8 object-contain" />
                  <span className="text-muted-foreground">Cypress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Playwright</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Appium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">TestComplete</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-lg mb-6 text-[#25A8E0] text-center">Performance Testing</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src="/icons/jmeter.png" alt="JMeter" className="w-8 h-8 object-contain" />
                  <span className="text-muted-foreground">JMeter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">LoadRunner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">K6</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Gatling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">BlazeMeter</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-lg mb-6 text-[#25A8E0] text-center">API Testing</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src="/icons/postman.png" alt="Postman" className="w-8 h-8 object-contain" />
                  <span className="text-muted-foreground">Postman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">REST Assured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">SoapUI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cpu className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Insomnia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Newman</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-lg mb-6 text-[#25A8E0] text-center">Security Testing</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src="/icons/owasp-zap.png" alt="OWASP ZAP" className="w-8 h-8 object-contain" />
                  <span className="text-muted-foreground">OWASP ZAP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Burp Suite</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Nessus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Veracode</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-[#25A8E0]" />
                  <span className="text-muted-foreground">Checkmarx</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join 50+ companies who trust us with their critical testing needs and quality assurance requirements.
            </p>
          </div>
          
          {/* Continuous Horizontal Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client1.png" alt="TechLogo" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client2.png" alt="Innovative Startup" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client3.png" alt="Software Company" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client4.png" alt="Digital Agency" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client5.png" alt="FinTech" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client6.png" alt="MedicalTech" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client1.png" alt="TechLogo" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client2.png" alt="Innovative Startup" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client3.png" alt="Software Company" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client4.png" alt="Digital Agency" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client5.png" alt="FinTech" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center justify-center min-w-[200px] h-20 mx-8">
                <img src="/clients/client6.png" alt="MedicalTech" className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Testriq Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Testriq?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver testing solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Result-Oriented Approach",
                description: "We focus on delivering measurable outcomes that directly impact your business goals and user satisfaction."
              },
              {
                icon: Clock,
                title: "Faster Time-to-Market",
                description: "Our efficient testing processes and automation expertise help you launch products faster without compromising quality."
              },
              {
                icon: Shield,
                title: "Risk Mitigation",
                description: "Comprehensive testing strategies that identify and eliminate potential risks before they impact your users."
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description: "ISTQB certified professionals who become an extension of your team, understanding your unique requirements."
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                description: "Testing solutions that grow with your business, from startup MVP to enterprise-scale applications."
              },
              {
                icon: Lightbulb,
                title: "Innovation Focus",
                description: "We stay ahead of technology trends, ensuring your applications are tested with the latest methodologies."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Latest Insights & Best Practices
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from our testing experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Testing: The Future is Here",
                excerpt: "Discover how artificial intelligence is revolutionizing software testing and quality assurance processes.",
                date: "Dec 15, 2024",
                readTime: "5 min read",
                category: "AI Testing"
              },
              {
                title: "Security Testing Best Practices for 2024",
                excerpt: "Essential security testing strategies to protect your applications from evolving cyber threats.",
                date: "Dec 10, 2024",
                readTime: "7 min read",
                category: "Security"
              },
              {
                title: "Performance Testing for Modern Web Apps",
                excerpt: "Comprehensive guide to performance testing strategies for today's complex web applications.",
                date: "Dec 5, 2024",
                readTime: "6 min read",
                category: "Performance"
              }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Articles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#59585B] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Test<span className="text-[#25A8E0]">riq</span>
              </div>
              <p className="text-gray-300 mb-6">
                Premium software testing services with over a decade of experience. 
                ISTQB certified experts providing comprehensive QA solutions.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div>📍 Office Number 2 & 3, 2nd Floor, Ashley Towers,</div>
                <div className="ml-4">Kanakia Rd, Vagad Nagar, Beverly Park,</div>
                <div className="ml-4">Mira Road East, Mira Bhayandar, Maharashtra 401107</div>
                <div className="mt-3">📞 (+91) 915-2929-343</div>
                <div>✉️ contact@testriq.com</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#25A8E0]">Core Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#launchfast" className="hover:text-[#25A8E0] transition-colors">LaunchFast QA</a></li>
                <li><a href="#web-testing" className="hover:text-[#25A8E0] transition-colors">Web Application Testing</a></li>
                <li><a href="#mobile-testing" className="hover:text-[#25A8E0] transition-colors">Mobile App Testing</a></li>
                <li><a href="#api-testing" className="hover:text-[#25A8E0] transition-colors">API Testing</a></li>
                <li><a href="#performance-testing" className="hover:text-[#25A8E0] transition-colors">Performance Testing</a></li>
                <li><a href="#automation-testing" className="hover:text-[#25A8E0] transition-colors">Automation Testing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#25A8E0]">Specialized Testing</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#ai-testing" className="hover:text-[#25A8E0] transition-colors">AI Application Testing</a></li>
                <li><a href="#iot-testing" className="hover:text-[#25A8E0] transition-colors">IoT Device Testing</a></li>
                <li><a href="#security-testing" className="hover:text-[#25A8E0] transition-colors">Security Testing</a></li>
                <li><a href="#robotics-testing" className="hover:text-[#25A8E0] transition-colors">Robotics Testing</a></li>
                <li><a href="#smart-device-testing" className="hover:text-[#25A8E0] transition-colors">Smart Device Testing</a></li>
                <li><a href="#etl-testing" className="hover:text-[#25A8E0] transition-colors">ETL Testing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#25A8E0]">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#company" className="hover:text-[#25A8E0] transition-colors">About Us</a></li>
                <li><a href="#clients" className="hover:text-[#25A8E0] transition-colors">Our Clients</a></li>
                <li><a href="#case-studies" className="hover:text-[#25A8E0] transition-colors">Case Studies</a></li>
                <li><a href="#blog" className="hover:text-[#25A8E0] transition-colors">Blog</a></li>
                <li><a href="#jobs" className="hover:text-[#25A8E0] transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-[#25A8E0] transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                &copy; 2024 Testriq QA Lab LLP. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#privacy" className="hover:text-[#25A8E0] transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-[#25A8E0] transition-colors">Terms of Service</a>
                <a href="#sitemap" className="hover:text-[#25A8E0] transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
      )}
    </div>
  )
}

export default App

