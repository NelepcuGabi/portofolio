import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Gabriel Nelepcu | Web & Python Developer – Portfolio & Projects",
    description:
        "Portfolio of Gabriel Nelepcu, Python developer focused on backend development, web apps, and freelancing. Check out my projects and coding journey.",
    keywords:
        "Python, web developer, backend developer,frontend developer, frontend, freelancer, Next.js, React, portfolio, Gabriel Nelepcu, AI projects, programming, software engineer",
    authors: [{ name: "Gabriel Nelepcu", url: "https://gabrielnepcu.com" }],
    creator: "Gabriel Nelepcu",
    openGraph: {
        title: "Gabriel Nelepcu – Python Developer Portfolio",
        description:
            "Check out my latest projects and coding journey in web & AI.",
        url: "https://gabrielnepcu.ro",
        siteName: "Gabriel Nelepcu Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gabriel Nelepcu – Python Developer Portfolio",
        description:
            "Check out my latest projects and coding journey in web & AI.",
        creator: "@numele_tău", // dacă ai cont de Twitter

    },
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

