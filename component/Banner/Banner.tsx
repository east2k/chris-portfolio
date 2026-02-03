"use client";
import Image from "next/image";
import Header from "../Header";
import BannerLineContent from "./BannerLineContent";
import { motion } from "motion/react";

const Banner = () => {
    const bulletins = [
        "Front-end Web Developer",
        "Responsive Website",
        "NextJS Focused",
        "TypeScript Engineer",
    ];

    return (
        <div className="flex flex-col items-center max-w-screen-2xl mx-auto text-zinc-50 mb-10 z-1">
            <div className="relative border-none md:border-2 border-void-900 w-full m-0 md:m-3 rounded-none md:rounded-xl min-h-[500px] sm:min-h-[600px] md:min-h-[750px] lg:h-[911px] overflow-hidden">
                <Image
                    src="/images/banner-bg.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    quality={100}
                    className="object-cover object-center z-0 blur-xs"
                />
                <Header />
                <div className="relative">
                    <div className="px-4 md:px-7">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-left mt-8 md:mt-20 bg-linear-to-r from-white via-electric-violet-200 to-charm-300 bg-clip-text text-transparent"
                        >
                            Hello,
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-left text-base md:text-lg mt-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/4 text-zinc-200/90"
                        >
                            I&apos;m a front-end web developer with a passion for building
                            beautiful, performant web applications.
                        </motion.p>
                    </div>
                </div>

                <div className="md:hidden px-4 my-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl font-bold leading-tight"
                    >
                        I am Christian Estoque
                    </motion.h1>
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="mt-6 flex flex-wrap gap-2"
                    >
                        {bulletins.map((item) => (
                            <li
                                key={item}
                                className="px-3 py-1.5 text-sm bg-electric-violet-500/70 border border-electric-violet-500 rounded-full"
                            >
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <div className="hidden md:block absolute right-0 bottom-28">
                    <div className="px-7">
                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-6xl lg:text-8xl font-bold text-right mt-20 leading-tight"
                        >
                            I am
                            <br /> <span>Christian</span>
                            <br /> <span>Estoque</span>
                        </motion.h1>
                    </div>
                </div>

                <BannerLineContent position={1} title="Front-end Web Developer" />
                <BannerLineContent position={2} title="Responsive Website" />
                <BannerLineContent position={3} title="NextJS Focused" />
                <BannerLineContent position={4} title="TypeScript Engineer" />
            </div>
        </div>
    );
};

export default Banner;
