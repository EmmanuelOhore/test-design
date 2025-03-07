type Testimonial = Record<string, string>;
const Testimonials = ({ img, text, profile, name, title }: Testimonial) => {
  return (
    <div className=" h-[30%] p-8 flex flex-col gap-6 rounded-lg bg-[#F4F1FF] lg:h-auto">
      <div>
        <img src={img} alt="netflix " className="w-[5.5rem]" />
      </div>
      <div>
        <p className="text-[#5D6180] font-normal text-sm lg:text-[14px] italic  xl:text-[15px]">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className=" rounded-full overflow-hidden w-[2.5rem] lg:w-[3rem]">
          <img
            src={profile}
            alt="proflie"
            className="object-contain h-full w-full"
          />
        </div>
        <div>
          <h2 className="text-[#060C3C] font-bold text-sm  lg:text-base">
            {name}
          </h2>
          <h3 className="font-normal text-[#6241D4] text-[12px] lg:text-sm">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
