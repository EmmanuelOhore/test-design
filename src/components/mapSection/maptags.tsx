type TagProps = {
  numString: string;
  text: string;
};
const Tags = ({ numString, text }: TagProps) => {
  return (
    <div className=" flex flex-col gap-2  w-[90%] md:gap-2 md:w-[60%] lg:w-[100%] ">
      <h1 className="text-[21px] text-[#060C3C] font-bold md:text-[28px] lg:text-[26px] xl:text-[30px]">
        {numString}
      </h1>
      <p className="text-sm text-[#5D6180] font-normal  leading-[1.2rem] md:text-base lg:text-sm xl:text-base">
        {text}
      </p>
    </div>
  );
};

export default Tags;
