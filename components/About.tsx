import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-xl leading-relaxed text-black-300">
            I'm an aspiring backend developer, passionate and eager to push my boundaries. With experience in Python,
            Flask, MongoDB, SQL, JavaScript, and Node.js, I'm ready to transform your ideas into reality. I love
            tackling new challenges and finding innovative solutions to complex problems.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl text-white font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 bg-gray-800/50 rounded-xl text-white font-semibold hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm">
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
          <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-01%20at%2011.01.14_b466a3b9.jpg-arrwKvyAGocQPgVcyda6QQtg8kK7GG.jpeg"
              alt="Gabriel Nelepcus Portrait"
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

