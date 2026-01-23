import Image from "next/image";
import BannerHero from "@/public/images/banner-user.png";

const BannerHeroImage = () => {
    return (
        <Image
            src={BannerHero}
            alt="Banner Hero"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-auto"
        />
    );
};

export default BannerHeroImage;
