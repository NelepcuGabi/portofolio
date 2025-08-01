"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Particles from "./Particles"
import { FaPython, FaReact, FaDatabase, FaServer, FaCode, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
const technologies = [
    { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Databases", icon: <FaDatabase />, color: "text-green-400" },
    { name: "Backend", icon: <FaServer />, color: "text-red-400" },
    { name: "Coding", icon: <FaCode />, color: "text-purple-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-400" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
]

const CodeAnimation = () => {
    const [code, setCode] = useState("")
    const fullCode = `def hello_world():
    print("Hello, World!")

hello_world()`

    useEffect(() => {
        let index = 0
        const intervalId = setInterval(() => {
            setCode(fullCode.slice(0, index))
            index++
            if (index > fullCode.length) {
                clearInterval(intervalId)
            }
        }, 50)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto mt-8"
        >
            <pre className="text-green-400 text-sm">
                <code>{code}</code>
            </pre>
        </motion.div>
    )
}

export default function Header() {
    const [currentTech, setCurrentTech] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTech((prev) => (prev + 1) % technologies.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const scrollToSection = (sectionId:any) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20">
            <Particles className="absolute inset-0" />


            <div className="relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Hello, I am Gabriel
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl text-gray-300 mb-8"
                >
                    Aspiring Web Developer | Passionate Learner
                </motion.p>

                <div className="flex justify-center space-x-4 mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={technologies[currentTech].name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center space-x-2"
                        >
                            {technologies[currentTech].icon}
                            <span className="text-xl text-white">{technologies[currentTech].name}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <CodeAnimation />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-12"
                >
                    <button
                        onClick={() => scrollToSection("about")}
                        className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300"
                    >
                        Explore My Journey
                    </button>
                    <a href="https://www.fiverr.com/s/m5EZ8Xb">
                    <button

                        className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300"
                    >
                        Check out my Fiverr
                    </button>
                    </a>
                </motion.div>
            </div>
        </header>
    )
}
