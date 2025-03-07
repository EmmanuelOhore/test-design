import Reasons from "./reasons";
import { reasonData } from "../../constants";
const ReasonTextSection = () => {
  return (
    <div className="md:w-[90%] lg:w-full ">
      <header className="hidden w-[80%] mx-auto flex-col gap-2 md:flex md:w-full">
        <h2 className="text-[#060C3C] text-2xl font-bold text-center  md:text-xl md:text-left xl:text-3xl">
          The reasons to prefer choosing our platform
        </h2>
        <p className=" text-[#5D6180] text-base text-center md:text-sm md:text-left xl:text-lg">
          Seamless integration of more than 20+ apps that can help analytics
          your product
        </p>
      </header>
      <div className="p-4 flex mt-4 flex-col gap-8 md:gap-4 md:mt-2 md:p-2 lg:grid lg:grid-cols-2 lg:gap-4">
        {reasonData.map((item) => {
          return (
            <Reasons img={item.img} header={item.header} text={item.text} />
          );
        })}
      </div>
    </div>
  );
};

export default ReasonTextSection;
