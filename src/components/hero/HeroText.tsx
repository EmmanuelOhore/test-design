import Tags from "./heroTags";

const HeroTextSection = () => {
  return (
    <div className=" flex flex-col gap-4  w-full px-4 pt-10 py-7 xl:gap-8 ">
      <div className="text_container flex flex-col  gap-4 ">
        <h1 className="text-[#060C3C] text-3xl text-center font-bold md:text-2xl lg:text-3xl lg:text-left xl:text-4xl  ">
          We help any business to get analytics and sales marketing
        </h1>
        <p className="text-[#5D6180] text-lg text-center md:text-sm lg:text-left lg:text-base xl:text-lg">
          The fastest and simple way to generate growing business solutions with
          our products
        </p>
      </div>
      <div className="flex flex-col gap-2  md:w-[90%] md:mx-auto lg:w-full ">
        <div className="input_box justify-between border border-[#B4B6C4]  p-2 flex gap-4 rounded-md md:p-1 xl:p-2 ">
          <input
            type="text"
            placeholder="Your business email"
            className="placeholder:text-sm placeholder:pl-4 xl:placeholder:text-base"
          />
          <button className="outline text-sm font-semibold h-[2.8rem] bg-[#6241D4] text-white w-[9rem] rounded-lg md:h-[2.5rem] xl:text-base xl:h-[3rem]">
            Get Started
          </button>
        </div>
        <p className="text-[#5D6180] text-sm italic md:text-[13px] lg:text-[14px] xl:text-[16px]">
          *we will not disseminate your email and so you avoid spam
        </p>
      </div>
      <div className="hidden md:flex mt-[2rem] gap-8  mx-4 lg:mt-[1rem] lg:gap-4 ">
        <Tags numString="350+" text="Over 500 business powered with us" />
        <Tags numString="4.8" text="Rating on google play and app store" />
      </div>
    </div>
  );
};

export default HeroTextSection;
