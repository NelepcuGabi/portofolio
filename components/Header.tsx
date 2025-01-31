"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [text, setText] = useState("")
  const fullText = "Hello, I am Gabriel"

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(intervalId)
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
      <header className="py-20 text-center">
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
          {text}
        </h1>
        <p className="text-2xl text-gray-300">Aspiring Python Developer | Eager to Learn & Grow</p>
      </header>
  )
}

