"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import Cal, { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"

export default function Contact() {
    const [formData, setFormData] = useState({
        from_firstname: "",
        from_lastname: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage("")

        try {
            await emailjs.send(
                "service_b0ptapg",
                "template_d3p7ibo",
                {
                    from_firstname: formData.from_firstname,
                    from_lastname: formData.from_lastname,
                    email: formData.email,
                    message: formData.message,
                },
                "tP93UnAKmOX_sLwV1"
            )
            setSubmitMessage("Message sent successfully! I'll get back to you soon.")
            setFormData({ from_firstname: "", from_lastname: "", email: "", message: "" })
        } catch (error) {
            console.error("Error sending message:", error)
            setSubmitMessage("An error occurred while sending the message. Please try again or contact me directly.")
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            getCalApi({ namespace: "15min" }).then((cal) => {
                cal("ui", {
                    cssVarsPerTheme: {
                        light: { "cal-brand": "#bc20c6" },
                        dark: { "cal-brand": "#ab7edc" },
                    },
                    hideEventTypeDetails: false,
                    layout: "month_view",
                })
            })
        }
    }, [])

    return (
        <section id="contact" className="py-20">
            {/* Titlu și text descriptiv (apar din dreapta) */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text text-center">
                    Let's Connect and Grow Together
                </h2>
                <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
                    I'm always excited to connect with fellow developers, potential mentors, or anyone interested in Python and web
                    development. Whether you have advice, opportunities for collaboration, or just want to chat about coding, I'd
                    love to hear from you!
                </p>
            </motion.div>

            {/* Formularul (apare din stânga) */}
            <motion.form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto space-y-6"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="from_firstname"
                        placeholder="First Name"
                        value={formData.from_firstname}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                    />
                    <input
                        type="text"
                        name="from_lastname"
                        placeholder="Last Name"
                        value={formData.from_lastname}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                />
                <textarea
                    name="message"
                    placeholder="Share your thoughts, ideas, or questions"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 bg-gray-800/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                ></textarea>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-purple-500 rounded-md transition-all duration-300 text-lg font-semibold disabled:opacity-50"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitMessage && (
                    <p
                        className={`text-center ${
                            submitMessage.includes("successfully") ? "text-green-400" : "text-red-400"
                        }`}
                    >
                        {submitMessage}
                    </p>
                )}
            </motion.form>
        </section>
    )
}