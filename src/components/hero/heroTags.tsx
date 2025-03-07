type TagProps = {
  numString: string;
  text: string;
};
const Tags = ({ numString, text }: TagProps) => {
  return (
    <div className=" flex flex-col gap-4 md:w-[40%] xl:w-[30%]  ">
      <h1 className="text-4xl text-[#060C3C] font-bold">{numString}</h1>
      <p className="text-base text-[#5D6180] font-normal  leading-[1.2rem]">
        {text}
      </p>
    </div>
  );
};

export default Tags;
