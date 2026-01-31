import Image from "next/image";
import BannerHero from "@/public/images/banner-user.png";

const BannerHeroImage = () => {
    return (
        <Image
            src={BannerHero}
            alt="Banner Hero"
            width={500}
            height={500}
            priority
            sizes="(max-width: 640px) 60vw, (max-width: 768px) 50vw, 33vw"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/3 h-auto"
        />
    );
};

export default BannerHeroImage;
