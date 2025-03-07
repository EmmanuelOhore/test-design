type ReasonsProps = Record<string, string>;

const Reasons = ({ img, header, text }: ReasonsProps) => {
  return (
    <div className=" flex gap-4  px-[1.2rem]  md:px-[.5rem] md:gap-5  lg:flex-col xl:gap-3">
      <div>
        <img src={img} alt="chart" className="w-[2.8rem] md:w-[2.8rem]" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[18px] font-bold text-[#060C3C] md:text-[16px] xl:text-[20px]">
          {header}
        </h3>
        <p className="text-[#5D6180] text-[14px]  leading-[1.3rem] md:text-[12px] xl:text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Reasons;
