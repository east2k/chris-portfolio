import AboutMe from "@/component/AboutMe/AboutMe";
import Banner from "@/component/Banner/Banner";
import Contact from "@/component/Contact";
import ProjectShowcase from "@/component/ProjectShowcase/ProjectShowcase";
import TechStack from "@/component/TechStack/TechStack";
import CTASection from "@/component/CTASection/CTASection";

export default function Home() {
    return (
        <>
            <div className="bg-void-950 transition-colors duration-300">
                <Banner />
                <AboutMe />
                <TechStack />
                <ProjectShowcase />
                <CTASection />
                <Contact />
            </div>
        </>
    );
}
