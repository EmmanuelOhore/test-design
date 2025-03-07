type SectionProps = Record<string, string>;

const SectionHeader = ({ header, text }: SectionProps) => {
  return (
    <header className="flex w-[85%] mx-auto flex-col gap-2 md:hidden">
      <h2 className="text-[#060C3C] text-2xl font-bold text-center ">
        {header}
      </h2>
      <p className=" text-[#5D6180] text-base text-center">{text}</p>
    </header>
  );
};

export default SectionHeader;
