import hirepathImage from "@/public/images/projects/hirepath.png";
import weatherBreezeImage from "@/public/images/projects/weather-breeze.png";
import movieClosetImage from "@/public/images/projects/movie-closet.png";
import beerookImage from "@/public/images/projects/beerook.png";
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
        title: "Weather Breeze",
        description: "A simple fun project that provides weather forecasts with a simple ui.",
        technologies: ["Typescript", "NextJS", "Tailwind"],
        githubUrl: "https://github.com/east2k/weather-breeze",
        liveUrl: "https://weather-breeze.vercel.app/",
        imageUrl: weatherBreezeImage,
    },
    {
        id: 3,
        title: "Movie Closet",
        description:
            "A movie collection app that allows users to browse, search, and save their favorite movies. Quite simple that fetches api online.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
        githubUrl: "https://github.com/east2k/movie-closet",
        liveUrl: "https://movie-closet.vercel.app/",
        imageUrl: movieClosetImage,
    },
    {
        id: 4,
        title: "BeeRook",
        description:
            "A website that allows users to list and browse properties for rent and sale. Complete with dashboard, profile pages, property pages, etc.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
        liveUrl: "https://beerook.com/",
        imageUrl: beerookImage,
    },
    {
        id: 5,
        title: "CustoMewZable",
        description:
            "Just a simple fun little project that makes svg of cats. Users can save cats, and export them as png or svg.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
        githubUrl: "https://github.com/east2k/custo-mew-zable",
        liveUrl: "https://custo-mew-zable.vercel.app/",
        imageUrl: custoMewZableImage,
    },
];
