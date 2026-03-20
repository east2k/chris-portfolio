import hirepathImage from "@/public/images/projects/hirepath.png";
import beerookImage from "@/public/images/projects/beerook.png";
import nimbubrainImage from "@/public/images/projects/nimbus-brain.png";
import calcuniverseImage from "@/public/images/projects/calcuniverse.png";
import weatherBreezeImage from "@/public/images/projects/weather-breeze.png";
import movieClosetImage from "@/public/images/projects/movie-closet.png";
import custoMewZableImage from "@/public/images/projects/custo-mew-zable.png";

export const projects = [
    {
        id: 1,
        title: "Hire Path",
        description:
            "A complete job application tracking app. Organize, manage, and follow up on your job applications.",
        technologies: ["Typescript", "NextJS", "Tailwind", "Neon", "Clerk"],
        githubUrl: "https://github.com/east2k/hire-path",
        liveUrl: "https://hire-path-official.vercel.app/",
        imageUrl: hirepathImage,
    },
    {
        id: 2,
        title: "BeeRook",
        description:
            "A website that allows users to list and browse properties for rent and sale. Complete with dashboard, profile pages, property pages, etc.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
        liveUrl: "https://beerook.com/",
        imageUrl: beerookImage,
    },
    {
        id: 3,
        title: "NimbusBrain",
        description:
            "NimbusBrain is an AI-powered project intelligence workspace that gives developers the missing link between their codebase and architectural decisions. It combines project management, task tracking, decision logging, knowledge base, and a context-aware AI assistant in a single unified interface with an AI that actually remembers your projects.",
        technologies: ["Typescript", "NextJS", "Tailwind", "Neon", "Clerk"],
        liveUrl: "https://nimbusbrain.app/",
        imageUrl: nimbubrainImage,
    },
    {
        id: 4,
        title: "CalcUniverse",
        description:
            "A simple webapp that lists more than 100+ calculators for various purposes, from finance to health. Mostly a challenge to see if I can compete with the big calculator pages currently",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
        liveUrl: "https://calcuniverse.app/",
        imageUrl: calcuniverseImage,
    },
    {
        id: 5,
        title: "Weather Breeze",
        description: "A simple fun project that provides weather forecasts with a simple ui.",
        technologies: ["Typescript", "NextJS", "Tailwind"],
        githubUrl: "https://github.com/east2k/weather-breeze",
        liveUrl: "https://weather-breeze.vercel.app/",
        imageUrl: weatherBreezeImage,
    },
    {
        id: 6,
        title: "Movie Closet",
        description:
            "A movie collection app that allows users to browse, search, and save their favorite movies. Quite simple that fetches api online.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
        githubUrl: "https://github.com/east2k/movie-closet",
        liveUrl: "https://movie-closet.vercel.app/",
        imageUrl: movieClosetImage,
    },
    {
        id: 7,
        title: "CustoMewZable",
        description:
            "Just a simple fun little project that makes svg of cats. Users can save cats, and export them as png or svg.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
        githubUrl: "https://github.com/east2k/custo-mew-zable",
        liveUrl: "https://custo-mew-zable.vercel.app/",
        imageUrl: custoMewZableImage,
    },
];
