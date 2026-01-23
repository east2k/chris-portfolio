"use client";
import React from "react";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
    const contactLinks = [
        {
            icon: Phone,
            label: "Phone Number",
            value: "+63 918 504 4043",
            href: "tel:+639185044043",
            gradient:
                "from-electric-violet-600/75 via-75% via-charm-500/75 to-100% to-electric-violet-400/75",
        },
        {
            icon: Mail,
            label: "Email",
            value: "christian.estoque.dev@gmail.com",
            href: "mailto:christian.estoque.dev@gmail.com",
            gradient:
                "from-electric-violet-600/75 via-75% via-charm-500/75 to-100% to-electric-violet-400/75",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/christian-estoque",
            href: "https://www.linkedin.com/in/christian-estoque/",
            gradient:
                "from-electric-violet-600/75 via-75% via-charm-500/75 to-100% to-electric-violet-400/75",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "github.com/east2k",
            href: "https://github.com/east2k",
            gradient:
                "from-electric-violet-600/75 via-75% via-charm-500/75 to-100% to-electric-violet-400/75",
        },
    ];

    return (
        <div
            id="contact-me-section"
            className="flex flex-col max-w-screen-2xl mx-auto text-zinc-50 p-7 items-center mb-20"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center w-full text-5xl font-semibold mb-6 text-electric-violet-400"
            >
                Let&apos;s Connect
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center text-lg mb-12 text-zinc-400 max-w-2xl"
            >
                I&apos;m always excited to connect with fellow developers, potential collaborators,
                or anyone interested in innovative web solutions. Let&apos;s build something amazing
                together!
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
                {contactLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex items-center gap-4 p-6 bg-gradient-to-br from-zinc-900/90 to-void-950/90 rounded-xl border border-zinc-800/50 hover:border-electric-violet-500/50 transition-all duration-300 overflow-hidden"
                        >
                            <div
                                className={`p-3 rounded-lg bg-gradient-to-br ${link.gradient} shadow-lg`}
                            >
                                <Icon className="w-6 h-6 text-white" />
                            </div>

                            <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-1 group-hover:text-electric-violet-300 transition-colors">
                                    {link.label}
                                </h3>
                                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                    {link.value}
                                </p>
                            </div>

                            <Send className="w-5 h-5 text-zinc-600 group-hover:text-electric-violet-400 transition-all duration-300" />
                        </motion.a>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <p className="text-zinc-500 text-sm">
                    Available for freelance opportunities and full-time positions
                </p>
            </motion.div>
        </div>
    );
};

export default Contact;
