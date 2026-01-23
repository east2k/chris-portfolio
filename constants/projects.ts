import movieClosetImage from "@/public/images/projects/movie-closet.png";
import weatherBreezeImage from "@/public/images/projects/weather-breeze.png";

export const projects = [
    {
        id: 1,
        title: "Weather Breeze",
        description: "A simple fun project that provides weather forecasts with a simple ui.",
        technologies: ["Typescript", "NextJS", "Tailwind", "Stripe"],
        githubUrl: "https://github.com/east2k/weather-breeze",
        liveUrl: "https://weather-breeze.vercel.app/",
        imageUrl: weatherBreezeImage,
    },
    {
        id: 2,
        title: "Movie Closet",
        description:
            "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
        githubUrl: "https://github.com/east2k/movie-closet",
        liveUrl: "https://movie-closet.vercel.app/",
        imageUrl: movieClosetImage,
    },
];
