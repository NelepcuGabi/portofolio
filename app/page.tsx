import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import { Particles } from "@/components/Particles"

export default function Home() {
  return (
   <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <Particles className="absolute inset-0 -z-10" />
      <div className="container mx-auto px-4 py-8">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

