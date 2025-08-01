"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    name: "Bachelors Thesis: Hand Gesture Recognition Application Using OpenCV and Neural Networks",
    description:
        "Developed a real-time hand gesture recognition system in Python using OpenCV, MediaPipe, and deep learning models (CNN and LSTM). The application detects and classifies both static and dynamic hand gestures via webcam, with left/right hand labeling and gesture-to-action mapping. Users can define custom gestures and associate them with specific actions (e.g., volume control, media playback, application commands). The system allows continuous improvement by storing unknown gestures for future retraining and includes a terminal-based interface for gesture recording, training, and testing.",
    url: "https://github.com/NelepcuGabi/licenta.git",
    tech: ["Python", "OpenCV", "MediaPipe", "Pytorch"],
  },
  {
    name: "Library Management System",
    description:
        "A beginner-friendly library management system built with Python and Flask. This project helped me understand the basics of backend development and API creation.",
    url: "https://github.com/NelepcuGabi/Library_Backend",
    tech: ["Python", "Flask", "SQL"],
  },
  {
    name: "E-commerce Platform",
    description:
        "I have made this  project to create a simple e-commerce platform. This helped me learn about handling user authentication, managing products, and processing orders.",
    url: "https://github.com/NelepcuGabi/e-commerce",
    tech: ["Python", "Django", "MongoDB"],
  },
  {
    name: "CodeNetHub",
    description:
        "A collaborative project I've contributed to, focused on creating a platform for coding education. This project has expanded my skills in working with larger codebases and team collaboration.It was made for TelecomAcademy.",
    url: "https://github.com/NelepcuGabi/backend",
    tech: ["NodeJS", "Express", "MongoDB"],
  },
  {
    name: "Learn With Corina",
    description:
        "My first live project for a dear friend of mine. I made her this website to help her grow and gain exposure for her english academy It is made in NextJS,being a frontend project. " +
        "I hope in the future I will have more complex projects to make for her. Check it out",
    url: "https://github.com/NelepcuGabi/backend",
    live: "https://site-meditatii.vercel.app/",
    tech: ["NextJS"],
  },
]

export default function Projects() {
  return (
      <section id="projects" className="py-20">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text text-center">
          Learning Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(252, 165, 250, 0.7)" }}
                  className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl pointer-events-none" />
                <div className="relative h-full p-6 backdrop-blur-sm bg-gray-900/50 rounded-2xl border border-gray-700/50 transition-all duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gray-800/50 rounded-full text-gray-300"
                        >
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
                          <span>Live</span>
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