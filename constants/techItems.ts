import ZustandLogo from "@/public/images/logos/zustand-logo.svg";
import SupabaseLogo from "@/public/images/logos/supabase-logo.webp";
import PythonLogo from "@/public/images/logos/python-logo.png";
import { StaticImageData } from "next/image";

export type TechItems = {
    name: string;
    displayName: string;
    iconType?: "stack" | "image";
    iconSrc?: StaticImageData | undefined;
};

export const techItems: Array<TechItems> = [
    { name: "html5", displayName: "HTML" },
    { name: "css3", displayName: "CSS" },
    { name: "js", displayName: "JavaScript" },
    { name: "typescript", displayName: "TypeScript" },
    { name: "react", displayName: "ReactJS" },
    { name: "reactquery", displayName: "React Query" },
    { name: "nextjs2", displayName: "NextJS" },
    { name: "tailwindcss", displayName: "Tailwind CSS" },
    { name: "eslint", displayName: "ESLint" },
    {
        name: "zustand",
        displayName: "Zustand",
        iconType: "image" as const,
        iconSrc: ZustandLogo,
    },
    {
        name: "supabase",
        displayName: "Supabase",
        iconType: "image" as const,
        iconSrc: SupabaseLogo,
    },
    { name: "github", displayName: "GitHub" },
    { name: "vercel", displayName: "Vercel" },
    { name: "nodejs", displayName: "NodeJS" },
    { name: "java", displayName: "Java" },
    { name: "php", displayName: "PHP" },
    { name: "laravel", displayName: "Laravel" },
    { name: "c#", displayName: "C#" },
    {
        name: "python",
        displayName: "Python",
        iconType: "image" as const,
        iconSrc: PythonLogo,
    },
];
