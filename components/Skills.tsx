import { FaPython, FaGitAlt, FaNodeJs, FaJs,FaDatabase } from "react-icons/fa"
import { SiFlask, SiDjango } from "react-icons/si"

const skills = [
  { name: "Python", icon: FaPython },
  { name: "Flask", icon: SiFlask },
  { name: "Git", icon: FaGitAlt },
  { name: "Node.js", icon: FaNodeJs },
  { name: "JavaScript", icon: FaJs },
  { name: "Django", icon: SiDjango },
    {name: "SQL", icon: FaDatabase },
    {name:"MongoDB", icon: FaDatabase },
]

export default function Skills() {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-semibold mb-6 text-blue-300">Skills</h2>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-full flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <skill.icon className="text-3xl text-purple-400" />
            <span className="font-medium text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

