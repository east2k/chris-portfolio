import { motion } from "motion/react";

type BannerLineContentProps = {
    position: 1 | 2 | 3 | 4;
    title: string;
};

const BannerLineContent = ({ position, title }: BannerLineContentProps) => {
    const bottomPosition = {
        1: "bottom-[10%]",
        2: "bottom-[20%]",
        3: "bottom-[30%]",
        4: "bottom-[40%]",
    };

    const positionClass = bottomPosition[position];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute left-5 ${positionClass}`}
        >
            <h1 className="text-2xl mb-6">{title}</h1>
            <div className="absolute top-16.5 left-0">
                <div className="absolute left-0 bg-zinc-50 w-80.5 h-0.5"></div>
                <div className="absolute left-0 -bottom-2.5 rounded-full bg-zinc-50 w-4 h-4"></div>
            </div>
            <div className="absolute -bottom-3.25 left-79.5 -rotate-45">
                <div className="absolute left-1 bg-zinc-50 w-14 h-0.5"></div>
                <div className="absolute left-14 -bottom-2.5 rounded-full bg-zinc-50 w-4 h-4"></div>
            </div>
        </motion.div>
    );
};

export default BannerLineContent;
