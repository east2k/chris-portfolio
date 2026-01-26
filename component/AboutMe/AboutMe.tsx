"use client";
import { BotMessageSquare, Mail } from "lucide-react";
import React from "react";
import AboutMeLinks from "./AboutMeLinks";
import { motion } from "motion/react";

const AboutMe = () => {
    return (
        <motion.div
            id="about-me-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-row max-w-screen-2xl mx-auto text-zinc-50 rounded-2xl p-7 mb-10 backdrop-blur-sm bg-zinc-900 border border-zinc-800/50 shadow-2xl"
        >
            <div className="w-1/2 px-5 py-10">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-5xl font-semibold mb-6 text-electric-violet-400"
                >
                    About Me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="w-3/4 text-zinc-300 leading-relaxed"
                >
                    Hello! I&apos;m Christian, a front-end web developer with a passion for building
                    innovative solutions. I specialize in Next.js and have extensive experience with
                    TypeScript, creating performant and beautiful web experiences.
                </motion.p>
            </div>
            <div className="w-1/2 px-5 py-10 flex flex-col gap-10">
                <AboutMeLinks
                    icon={BotMessageSquare}
                    text="Chat with my AI clone - you can ask
                        me anything and I'll answer it the best I can!"
                    link=""
                />
                <AboutMeLinks
                    icon={Mail}
                    text="Get in touch directly via email - I'm always open to
                        discussing new projects and opportunities!"
                    link="#contact-me-section"
                />
            </div>
        </motion.div>
    );
};

export default AboutMe;
