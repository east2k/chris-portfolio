"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { openChat } from "./Chat/ChatButton";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const headerLinks = [
        { name: "About Me", href: "#about-me-section" },
        { name: "My Projects", href: "#projects-section" },
    ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-row items-center justify-between p-4 md:p-7 w-full relative z-10"
        >
            <motion.h1 className="font-extrabold text-xl md:text-2xl">christian.</motion.h1>

            <div className="hidden md:block bg-linear-to-r from-electric-violet-600 via-charm-500 to-electric-violet-400 rounded-full p-0.5 shadow-lg shadow-electric-violet-500/20">
                <ul className="flex flex-direction-row gap-6 lg:gap-14 bg-void-900/95 backdrop-blur-sm rounded-full px-6 lg:px-10 py-4 text-sm font-light">
                    {headerLinks.map((link, index) => (
                        <Link key={link.name} href={link.href}>
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="hover:text-electric-violet-300 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-electric-violet-400 to-charm-400 group-hover:w-full transition-all duration-300" />
                            </motion.li>
                        </Link>
                    ))}
                    <button>
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            onClick={openChat}
                            className="cursor-pointer hover:text-electric-violet-300 transition-colors relative group"
                        >
                            Chat My Clone
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-electric-violet-400 to-charm-400 group-hover:w-full transition-all duration-300" />
                        </motion.li>
                    </button>
                </ul>
            </div>

            <Link href="#contact-me-section" className="hidden md:block">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer bg-linear-to-r from-electric-violet-600 via-75% via-charm-500 to-100% to-electric-violet-400 px-6 lg:px-10 py-3 lg:py-4 rounded-full text-sm font-medium shadow-lg shadow-electric-violet-500/30 hover:shadow-xl hover:shadow-electric-violet-500/50 transition-all duration-300"
                >
                    Contact Me
                </motion.button>
            </Link>

            {/* Mobile */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer md:hidden p-2 rounded-lg bg-void-900/80 border border-electric-violet-500/30"
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-4 right-4 mt-2 md:hidden bg-void-900/95 backdrop-blur-md border border-electric-violet-500/30 rounded-xl overflow-hidden shadow-xl shadow-electric-violet-500/10"
                    >
                        <ul className="flex flex-col items-center justify-center p-2 gap-2">
                            {headerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className="w-full text-center "
                                >
                                    <li className="px-1 py-3 rounded-lg hover:bg-electric-violet-500/10 transition-colors">
                                        {link.name}
                                    </li>
                                </Link>
                            ))}
                            <li
                                onClick={() => {
                                    openChat();
                                    closeMobileMenu();
                                }}
                                className="w-full text-center px-1 py-3 rounded-lg hover:bg-electric-violet-500/10 transition-colors cursor-pointer"
                            >
                                Chat My Clone
                            </li>
                            <Link
                                href="#contact-me-section"
                                className="w-full"
                                onClick={closeMobileMenu}
                            >
                                <li className="mt-2 px-4 py-3 rounded-lg bg-linear-to-r from-electric-violet-600 via-charm-500 to-electric-violet-400 text-center font-medium">
                                    Contact Me
                                </li>
                            </Link>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
