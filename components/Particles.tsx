"use client"

import { useState, useEffect } from "react"
import { FaPython, FaReact, FaDatabase, FaServer, FaCode, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"

interface ParticlesProps {
  className?: string
}

const icons = [
  { Icon: FaPython, color: "text-yellow-400" },
  { Icon: FaReact, color: "text-blue-400" },
  { Icon: FaDatabase, color: "text-green-400" },
  { Icon: FaServer, color: "text-red-400" },
  { Icon: FaCode, color: "text-purple-400" },
  { Icon: FaHtml5, color: "text-orange-400" },
  { Icon: FaCss3Alt, color: "text-blue-500" },
  { Icon: FaGitAlt, color: "text-orange-500" },
]

export function Particles({ className = "" }: ParticlesProps) {
  const [positions, setPositions] = useState<{ top: number, left: number }[]>([])

  useEffect(() => {
    const handleResize = () => {
      setPositions(icons.map(() => ({
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      })))
    }

    handleResize() // Set initial positions
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
      <div className={className}>
        {icons.map((icon, index) => {
          const IconComponent = icon.Icon
          const position = positions[index]

          if (!position) return null

          return (
              <div
                  key={index}
                  className={`absolute text-6xl ${icon.color} opacity-30`}
                  style={{ top: position.top, left: position.left }}
              >
                <IconComponent />
              </div>
          )
        })}
      </div>
  )
}

export default Particles;
