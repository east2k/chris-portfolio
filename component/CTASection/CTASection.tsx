"use client";
import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { openChat } from "../Chat/ChatButton";

const CTASection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col max-w-screen-2xl mx-auto text-zinc-50 p-2 md:p-7 mb-20"
        >
            <div
                className={`relative overflow-hidden rounded-2xl bg-violet-950/50 border border-zinc-800/50 p-6 md:p-12 backdrop-blur-sm`}
            >
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-start gap-6 flex-1">
                        <div className={`p-4 rounded-xl bg-violet-500/50 shadow-lg`}>
                            <Rocket className="w-8 h-8 text-white" />
                        </div>

                        <div className="flex-1">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold mb-3 text-zinc-300"
                            >
                                Let&apos;s Build Something Amazing
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-zinc-300 text-lg w-4/5"
                            >
                                From concept to deployment, I deliver exceptional results that
                                exceed expectations. Chat with my AI clone to know a brief version
                                of myself!
                            </motion.p>
                        </div>
                    </div>

                    <button
                        onClick={openChat}
                        className={`cursor-pointer w-full md:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-electric-violet-600 via-75% via-charm-500 to-100% to-electric-violet-400 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-electric-violet-500/50 transition-all duration-300 whitespace-nowrap`}
                    >
                        Start a Conversation
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default CTASection;
