import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Christian Estoque | Front-End Developer",
    description:
        "Front-end web developer specializing in Next.js, TypeScript, and creating beautiful, performant web applications. Let's build something amazing together.",
    keywords: [
        "Christian Estoque",
        "Front-end Developer",
        "Next.js",
        "TypeScript",
        "Web Developer",
        "React",
        "Portfolio",
    ],
    authors: [{ name: "Christian Estoque" }],
    openGraph: {
        title: "Christian Estoque | Front-End Developer",
        description:
            "Front-end web developer specializing in Next.js, TypeScript, and creating beautiful web applications.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${plusJakartaSans.className} antialiased bg-void-950`}>
                {children}
            </body>
        </html>
    );
}
