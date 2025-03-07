import SectionHeader from "../../ui/sectionHeader";
import HeroImgSection from "../hero/HeroImg";
import illustration from "/featuresSectionImages/Right.png";
import FeaturesTextSection from "./featuresText";

const FeaturesSection = () => {
  return (
    <section className=" md:p-4  lg:flex lg:justify-center lg:items-center ">
      <SectionHeader header="We provide features for your product" />
      <div className="flex flex-col mt-4  md:flex-row-reverse lg:w-[80%] xl:w-[80%] xl:gap-10 ">
        <HeroImgSection img={illustration} />
        <FeaturesTextSection />
      </div>
    </section>
  );
};

export default FeaturesSection;
