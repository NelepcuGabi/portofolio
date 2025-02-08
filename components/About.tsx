"use client"
import Image from "next/image"

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <section id="about" className="relative min-h-screen flex items-center py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">
              As a beginner web developer, I'm on an exciting journey to master both frontend and backend technologies. I enjoy creating intuitive user interfaces, developing backend systems, and even building small programs in Python to automate tasks.
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              While I'm new to the world of freelancing, I'm eager to take on challenges that will help me grow. I believe
              in the power of hard work, dedication, and continuous learning. My goal is to evolve into a skilled
              developer and eventually venture into freelancing, bringing fresh perspectives and innovative ideas to every
              project.
            </p>
            <div className="flex gap-4">
              <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl text-white font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300"
              >
                View Projects
              </button>
              <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-gray-800/50 rounded-xl text-white font-semibold hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm"
              >
                Connect With Me
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto">
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-01%20at%2011.01.14_b466a3b9.jpg-arrwKvyAGocQPgVcyda6QQtg8kK7GG.jpeg"
                  alt="Gabriel Nelepcus - Aspiring Web Developer"
                  fill
                  priority
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
