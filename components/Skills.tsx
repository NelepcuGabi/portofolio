"use client"
import { FaPython, FaGitAlt, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa"
import { SiFlask, SiDjango, SiMongodb, SiNextdotjs } from "react-icons/si"
import { motion } from "framer-motion"

const skills = [
    {
        name: "Python",
        icon: FaPython,
        description: "My primary focus and the language I'm most passionate about learning",
    },
    { name: "Flask", icon: SiFlask, description: "Exploring web development with this lightweight framework" },
    { name: "Git", icon: FaGitAlt, description: "Learning version control for better project management" },
    { name: "JavaScript", icon: FaJs, description: "Expanding my skills to frontend development" },
    { name: "Django", icon: SiDjango, description: "On my learning list for robust web application development" },
    { name: "Node.js", icon: FaNodeJs, description: "Interested in learning for full-stack capabilities" },
    { name: "MongoDB", icon: SiMongodb, description: "Eager to learn about NoSQL databases" },
    { name: "SQL", icon: FaDatabase, description: "Learned it for relational database management" },
    { name: "Next", icon: SiNextdotjs, description: "Learning to make more engaging frontend" },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            {/* Titlu animat din dreapta */}
            <motion.h2
                className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text text-center"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Skills & Learning Journey
            </motion.h2>

            {/* Grilă animată */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1, // efect de tip "stagger"
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                    >
                        <skill.icon className="text-5xl text-purple-400" />
                        <h3 className="font-medium text-xl text-center">{skill.name}</h3>
                        <p className="text-gray-400 text-center text-sm">{skill.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}