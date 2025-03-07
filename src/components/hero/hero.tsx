import HeroImgSection from "./HeroImg";
import illustration from "/Illustration.png";

import HeroTextSection from "./HeroText";
const HeroSection = () => {
  return (
    <section className="lg:flex lg:justify-center lg:items-center ">
      <div className="flex flex-col  md:flex-row lg:w-[80%] xl:w-[80%] xl:gap-4 ">
        <HeroTextSection />
        <HeroImgSection img={illustration} />
      </div>
    </section>
  );
};

export default HeroSection;
