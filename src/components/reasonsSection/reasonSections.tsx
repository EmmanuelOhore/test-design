import SectionHeader from "../../ui/sectionHeader";
import HeroImgSection from "../hero/HeroImg";
import illustration from "/reasonSectionImages/Left.png";
import ReasonTextSection from "./reasonTextsection";
const ReasonSections = () => {
  return (
    <section className="my-10 flex justify-center flex-col items-center">
      <SectionHeader
        header="The reasons to prefer choosing our platform"
        text="Seamless integration of more than 20+ apps that can help analytics your product"
      />

      <div className="flex flex-col mt-4  md:flex-row lg:w-[80%] xl:w-[80%] xl:gap-10 ">
        <HeroImgSection img={illustration} />
        <ReasonTextSection />
      </div>
    </section>
  );
};

export default ReasonSections;
