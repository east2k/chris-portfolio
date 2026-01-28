"use client";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { openChat } from "../Chat/ChatButton";

type AboutMeLinksProps = {
    icon: React.ElementType;
    text: string;
    link?: string;
};

const AboutMeLinks = ({ icon, text, link }: AboutMeLinksProps) => {
    const IconComponent = icon;
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-row items-center justify-start md:justify-end group"
        >
            <div className="border-2 border-electric-violet-500/30 rounded-lg min-w-12 min-h-12 md:min-w-16 md:min-h-16 flex items-center justify-center mr-3 md:mr-5 bg-linear-to-br from-electric-violet-950/50 to-charm-950/50 group-hover:border-electric-violet-500/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-electric-violet-500/20">
                <IconComponent
                    className="w-6 h-6 md:w-9 md:h-9 text-electric-violet-300 group-hover:text-electric-violet-200 transition-colors"
                />
            </div>
            <p className="flex-1 md:w-8/12 text-sm md:text-base text-zinc-300 group-hover:text-zinc-100 transition-colors">
                {text}
            </p>
            <Link
                onClick={(event)=>{
                    if(!link){
                        event.preventDefault();
                        openChat();
                    }
                }}
                href={link ?? "#"}
                className="rounded-full bg-electric-violet-600 text-white p-2 ml-3 md:ml-5 flex items-center hover:from-electric-violet-500 hover:to-charm-500 transition-all duration-300 hover:shadow-lg hover:shadow-electric-violet-500/50"
            >
                <ChevronsRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
        </motion.div>
    );
};

export default AboutMeLinks;
