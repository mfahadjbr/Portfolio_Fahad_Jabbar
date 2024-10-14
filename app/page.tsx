'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Mail, Github, Linkedin, Download } from 'lucide-react'
import Scroll from '@/app/components/Scroll'
import Project from '@/app/components/Project'
// import Skill from '@/app/components/Skill'

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Html","Css", "Mysql", "Prisma", "Tailwind CSS", "Framer Motion"
]

export default function EnhancedPortfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const resumeRef = useRef(null)
  const contactRef = useRef(null)

  type Section = 'home' | 'about me' |'projects' | 'skills' | 'resume' | 'contact';

  const scrollToSection = (section: Section) => {
    setActiveSection(section)
    const ref = section === 'home' ? homeRef : section === 'about me' ? aboutRef : section === 'projects' ? projectsRef : section === 'skills' ? skillsRef : section === 'resume' ? resumeRef : contactRef
const element = ref.current as HTMLElement | null;
element?.scrollIntoView({ behavior: 'smooth' })
    setIsSidebarOpen(false)
  }

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png?height=40&width=40" alt="Logo" width={70} height={40} className="mr-4 rounded-full" />
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-white">
            <Menu size={24} />
          </button>
          <ul className="hidden md:flex space-x-8 justify-center flex-grow">
            <li><button onClick={() => scrollToSection('home')} className={`hover:text-blue-400 transition-colors ${activeSection === 'home' ? 'text-blue-400' : ''}`}>Home</button></li>
            <li><button onClick={() => scrollToSection('about me')} className={`hover:text-blue-400 transition-colors ${activeSection === 'about' ? 'text-blue-400' : ''}`}>About Me</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={`hover:text-blue-400 transition-colors ${activeSection === 'projects' ? 'text-blue-400' : ''}`}>Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={`hover:text-blue-400 transition-colors ${activeSection === 'skills' ? 'text-blue-400' : ''}`}>Skills</button></li>
            <li><button onClick={() => scrollToSection('resume')} className={`hover:text-blue-400 transition-colors ${activeSection === 'resume' ? 'text-blue-400' : ''}`}>Resume</button></li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </motion.button>
        </nav>
      </header>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 bg-gray-800 z-50 md:hidden"
          >
            <div className="p-4">
              <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 text-white">
                <X size={24} />
              </button>
              <ul className="mt-8 space-y-4">
                <li><button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about me')} className="text-white hover:text-blue-400 transition-colors">About Me</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-white hover:text-blue-400 transition-colors">Projects</button></li>
                <li><button onClick={() => scrollToSection('skills')} className="text-white hover:text-blue-400 transition-colors">Skills</button></li>
                <li><button onClick={() => scrollToSection('resume')} className="text-white hover:text-blue-400 transition-colors">Resume</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-400 transition-colors">Contact</button></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section ref={homeRef} className="min-h-screen flex items-center pt-16">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Fahad Jabbar</h1>
              {/* <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p> */}
              <Scroll/>
              <div className="flex space-x-4">
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-colors"
                >
                  <span>View My Work</span>
                  <ChevronDown size={20} />
                </motion.button>
                <motion.a
                  href="/path-to-your-cv.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-600 transition-colors"
                >
                  <span>Download CV</span>
                  <Download size={20} />
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <Image
                src="/fahad.png?height=400&width=400"
                alt="John Doe"
                width={400}
                height={400}
                className=" w-[23vw] rounded-full shadow-[0_0_50px_20px_rgba(50,50,50,1)] hover:shadow-[0_0_70px_30px_rgba(100,100,100,1)] border-gray-400 border-2 transition-shadow duration-300 animate-float"
              />
            </motion.div>
          </div>
        </section>


        <section ref={aboutRef} className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 rounded-lg p-8"
              >
                <p className="text-lg mb-4">
                  Hello! I'm Muhammad Fahad Jabbar, a passionate Full Stack Developer with over 1 years of experience in creating robust and scalable web applications. My journey in the world of programming started when I was in college, and since then, I've been constantly learning and evolving with the ever-changing landscape of web technologies.
                </p>
                <p className="text-lg mb-4">
                  I specialize in Next.js ecosystems, with expertise in React for frontend development and Node.js,Python for backend services. I'm also well-versed in database management, API design, and cloud deployment strategies.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me contributing to open-source projects, writing tech blogs, or exploring the great outdoors. I'm always excited about taking on new challenges and collaborating with like-minded professionals to create innovative solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        <section ref={projectsRef} className="py-20">
          <div className="container mx-auto px-6">
          <Project projectsRef={projectsRef} />
          </div>
        </section>
        

        <section ref={skillsRef} className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blue-500 rounded-full px-4 py-2 text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          {/* <Skill/> */}
        </section>

        <section ref={resumeRef} className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Resume</h2>
            <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
              <ul className="list-disc list-inside mb-6">
                <li>Senior Developer at Tech Co. (2020-Present)</li>
                <li>Full Stack Developer at Web Solutions Inc. (2017-2020)</li>
                <li>Junior Developer at StartUp XYZ (2015-2017)</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <ul className="list-disc list-inside mb-6">
                <li>Master's in Computer Science, University of Technology from America (2029)</li>
                <li>Bachelor's in Artifical Intelligence, Air University Islamabad (2027)</li>
              </ul>
              <motion.a
                href="/path-to-your-cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors"
              >
                <span>Download Full Resume</span>
                <Download size={20} />
              </motion.a>
            </div>
          </div>
        </section>

        <section ref={contactRef} className="py-20 bg-gray-800">
          <div className="container mx-auto px-6 ">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
            <motion.form
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  action="https://formspree.io/f/myzygreg" // Formspree action URL
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    placeholder="Your Name"
    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
    id="name"
    name="Name"
    autoComplete="off"
    required
  />
  <input
    type="email"
    placeholder="Your Email"
    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
    id="email"
    name="Email"
    autoComplete="off"
    required
  />
  <textarea
    placeholder="Your Message"
    rows={4}
    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
    id="message"
    name="Message"
    autoComplete="off"
    required
  ></textarea>
  
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
    type="submit"
  >
    Send Message
  </motion.button>
</motion.form>

              <div className="mt-12 flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/mfahadjbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:mfahadjbr@gmail.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white  py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Muhammad Fahad Jabbar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}