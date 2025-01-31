import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gabriel Nelepcu | Aspiring Python Developer & Future Freelancer",
  description:
      "Passionate beginner Python developer eager to learn and grow. Exploring the world of backend development, web applications, and freelancing opportunities.",
  keywords: "Python, beginner developer, aspiring freelancer, learning, coding journey, backend development",
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>{children}</body>
      </html>
  )
}

