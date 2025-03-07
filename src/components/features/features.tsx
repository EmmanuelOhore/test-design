type FeaturesProps = Record<string, string>;

const Features = ({ img, text }: FeaturesProps) => {
  return (
    <div className="flex items-center px-6 gap-3">
      <div>
        <img src={img} alt="sync image" className="w-[2rem] lg:w-[2.5rem]" />
      </div>
      <h3 className="text-[#B4B6C4] text-base font-bold md:text-[16px] xl:text-[20px]">
        {text}
      </h3>
    </div>
  );
};

export default Features;
