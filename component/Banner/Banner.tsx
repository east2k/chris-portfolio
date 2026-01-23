"use client";
import Header from "../Header";
import BannerLineContent from "./BannerLineContent";
import { motion } from "motion/react";

const Banner = () => {
    return (
        <div className="flex flex-col items-center max-w-screen-2xl mx-auto text-zinc-50 mb-10">
            <div className="relative border-2 border-void-900 w-full m-3 rounded-xl h-[911px] bg-[url('/images/banner-bg.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden">
                <Header />
                <div className="relative">
                    <div className="px-7">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-8xl font-bold text-left mt-20 bg-gradient-to-r from-white via-electric-violet-200 to-charm-300 bg-clip-text text-transparent"
                        >
                            Hello,
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-left text-lg mt-4 w-1/4 text-zinc-200/90"
                        >
                            I&apos;m a front-end web developer with a passion for building
                            beautiful, performant web applications.
                        </motion.p>
                    </div>
                </div>
                <div className="absolute right-0 bottom-28">
                    <div className="px-7">
                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-8xl font-bold text-right mt-20 leading-tight"
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
