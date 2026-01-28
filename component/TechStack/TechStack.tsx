"use client";
import TechItem from "./TechItem";
import { techItems } from "@/constants/techItems";
import { motion } from "motion/react";

const TechStack = () => {
    return (
        <div className="flex flex-col max-w-screen-2xl mx-auto text-zinc-50 p-2 md:p-7 items-center mb-20">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center w-full text-5xl font-semibold mb-6 text-electric-violet-400"
            >
                Tech Stack
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center text-lg mb-12 text-zinc-300 max-w-2xl"
            >
                Technologies and tools I use to bring ideas to life
            </motion.p>

            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row gap-8 items-center flex-wrap w-full justify-center">
                    {techItems.map((tech) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <TechItem
                                name={tech.name}
                                displayName={tech.displayName}
                                iconType={tech.iconType}
                                iconSrc={tech.iconSrc}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
