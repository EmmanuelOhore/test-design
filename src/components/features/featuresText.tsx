import box from "/featuresSectionImages/Integrated.png";
import sync from "/featuresSectionImages/Sync.png";
import report from "/featuresSectionImages/Report.png";
import Features from "./features";
const FeaturesTextSection = () => {
  return (
    <div className="md:w-full md:flex md:flex-col md:gap-4">
      <header>
        <h2 className="text-[#060C3C] hidden  md:px-5  md:w-[80%] font-bold md:flex  md:text-xl md:text-left xl:text-3xl">
          We provide features for your product
        </h2>
      </header>
      <div className="p-2 flex flex-col gap-5">
        <div className=" p-5 rounded-md shadow-md flex gap-3">
          <div>
            <img src={box} alt="box image" className="w-[2rem] lg:w-[2.5rem]" />
          </div>
          <div className="text_container flex flex-col gap-3 w-[70%] lg:w-[80%] lg:gap-4">
            <div className="flex flex-col gap-2 lg:gap-3.5">
              <h3 className="text-[#060C3C] text-base font-bold md:text-[16px] xl:text-[20px]">
                Integrated with Social Media
              </h3>
              <p className="text-[#5D6180] text-sm font-normal md:text-sm md:text-left xl:text-lg">
                Seamless integration of more than 20+ apps that can help
                analytics
              </p>
            </div>
            <p className="text-[#6241D4] w-fit text-sm font-bold border-b border-[#6241D4] md:text-sm md:text-left xl:text-lg">
              Learn More
            </p>
          </div>
        </div>

        <Features img={sync} text="Sync with Google Drive" />
        <Features img={report} text="Powerful report" />
      </div>
    </div>
  );
};

export default FeaturesTextSection;
