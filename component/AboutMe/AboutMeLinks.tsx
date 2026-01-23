"use client";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

type AboutMeLinksProps = {
    icon: React.ElementType;
    text: string;
    link: string;
};

const AboutMeLinks = ({ icon, text, link }: AboutMeLinksProps) => {
    const IconComponent = icon;
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-row items-center justify-end group"
        >
            <div className="border-2 border-electric-violet-500/30 rounded-lg min-w-16 min-h-16 flex items-center justify-center mr-5 bg-gradient-to-br from-electric-violet-950/50 to-charm-950/50 group-hover:border-electric-violet-500/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-electric-violet-500/20">
                <IconComponent
                    width={35}
                    height={35}
                    className="text-electric-violet-300 group-hover:text-electric-violet-200 transition-colors"
                />
            </div>
            <p className="w-8/12 text-zinc-300 group-hover:text-zinc-100 transition-colors">
                {text}
            </p>
            <Link
                href={link}
                className="rounded-full bg-electric-violet-600 text-white p-2 ml-5 flex items-center hover:from-electric-violet-500 hover:to-charm-500 transition-all duration-300 hover:shadow-lg hover:shadow-electric-violet-500/50"
            >
                <ChevronsRight />
            </Link>
        </motion.div>
    );
};

export default AboutMeLinks;
