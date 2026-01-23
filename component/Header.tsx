"use client";
import { motion } from "motion/react";
import Link from "next/link";

const Header = () => {
    const headerLinks = [
        { name: "About Me", href: "#about-me-section" },
        { name: "My Projects", href: "#projects-section" },
        { name: "Chat My Clone", href: "#" },
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-row items-center justify-between p-7 w-full relative z-10"
        >
            <motion.h1 className="font-extrabold text-2xl">christian.</motion.h1>

            <div className="bg-gradient-to-r from-electric-violet-600 via-charm-500 to-electric-violet-400 rounded-full p-0.5 shadow-lg shadow-electric-violet-500/20">
                <ul className="flex flex-direction-row gap-14 bg-void-900/95 backdrop-blur-sm rounded-full px-10 py-4 text-sm font-light">
                    {headerLinks.map((link, index) => (
                        <Link key={link.name} href={link.href}>
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="hover:text-electric-violet-300  transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-violet-400 to-charm-400 group-hover:w-full transition-all duration-300" />
                            </motion.li>
                        </Link>
                    ))}
                </ul>
            </div>

            <Link href="#contact-me-section">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer bg-gradient-to-r from-electric-violet-600 via-75% via-charm-500 to-100% to-electric-violet-400 px-10 py-4 rounded-full text-sm font-medium shadow-lg shadow-electric-violet-500/30 hover:shadow-xl hover:shadow-electric-violet-500/50 transition-all duration-300"
                >
                    Contact Me
                </motion.button>
            </Link>
        </motion.header>
    );
};

export default Header;
