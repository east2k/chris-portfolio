"use client";
import Image from "next/image";
import React from "react";
import Tooltip from "./Tooltip";
import StackIcon from "tech-stack-icons";
import { TechItems } from "@/constants/techItems";
import { motion } from "motion/react";

const TechItem = ({ name, displayName, iconType = "stack", iconSrc }: TechItems) => {
    return (
        <Tooltip content={displayName}>
            <motion.div className="p-4 rounded-xl bg-gradient-to-br from-zinc-900/50 to-void-950/50 border border-zinc-800/30 hover:border-electric-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-violet-500/20">
                {iconType === "stack" ? (
                    <StackIcon
                        className="w-8 h-8 transition-transform"
                        name={name}
                        variant="dark"
                    />
                ) : (
                    iconSrc && (
                        <Image
                            className="w-8 h-8 transition-transform"
                            src={iconSrc}
                            alt={displayName}
                            priority={true}
                        />
                    )
                )}
            </motion.div>
        </Tooltip>
    );
};

export default TechItem;
