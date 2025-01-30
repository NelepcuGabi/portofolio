"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    name: "Library Backend",
    description: "A modern library management system backend built with Python.",
    url: "https://github.com/NelepcuGabi/Library_Backend",
    tech: ["Python", "Flask", "SQL"],
  },
  {
    name: "E-commerce",
    description: "Full-featured e-commerce platform.",
    url: "https://github.com/NelepcuGabi/e-commerce",
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "CodeNetHub",
    description: "Advanced coding platform for learning and collaboration.",
    url: "https://github.com/NelepcuGabi/backend",
    live: "https://codenethub.telacad.ro",
    tech: ["Python", "Django", "MongoDB"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
            <div className="relative h-full p-6 backdrop-blur-sm bg-gray-900/50 rounded-2xl border border-gray-700/50 transition-all duration-300 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm bg-gray-800/50 rounded-full text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                >
                  <FaGithub className="text-xl" />
                  <span>Source</span>
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                    <span>Live Demo</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

