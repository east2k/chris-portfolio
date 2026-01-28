"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(true);
    const cursorRef = useRef<HTMLDivElement>(null);

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const size = useMotionValue(16);
    const smoothSize = useSpring(size, { damping: 20, stiffness: 300 });

    useEffect(() => {
        setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        let isHovering = false;

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            const hovering = !!target.closest(
                'a, button, input, textarea, select, [role="button"]',
            );

            if (hovering !== isHovering) {
                isHovering = hovering;
                size.set(hovering ? 40 : 16);

                if (cursorRef.current) {
                    cursorRef.current.style.borderColor = hovering ? "#d46f88" : "#914dff";
                    cursorRef.current.style.backgroundColor = hovering
                        ? "rgba(212, 111, 136, 0.1)"
                        : "transparent";
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cursorX, cursorY, size]);

    if (isTouchDevice) return null;

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 rounded-full border-2 border-electric-violet-500 pointer-events-none z-9999 hidden lg:block transition-colors duration-150"
            style={{
                x: cursorX,
                y: cursorY,
                width: smoothSize,
                height: smoothSize,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    );
};

export default CustomCursor;
