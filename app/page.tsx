import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import { Particles } from "@/components/Particles"
import Script from 'next/script'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
            <Particles className="absolute inset-0 -z-10" />
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-L0TL7FT4YS"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L0TL7FT4YS');
          `,
                }}
            />
            <meta name="google-site-verification" content="1t6wkuxm8ZLGZjU44Q9lUUUsQRrNOeAsyBgZuPtoHac" />
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
