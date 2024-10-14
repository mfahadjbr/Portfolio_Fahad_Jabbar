'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 70 },
  { name: "TypeScript", level: 75 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "MongoDB", level: 70 },
  { name: "Prisma", level: 90 }
]

export default function EnhancedPortfolioSkills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-blue-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}