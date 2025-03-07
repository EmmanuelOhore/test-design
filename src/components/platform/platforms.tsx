type PlatformsProps = {
  arrow?: string;
  img?: string;
  header?: string;
  text?: string;
};

const Platforms = ({ arrow, img, header, text }: PlatformsProps) => {
  return (
    <div className="flex flex-col items-center py-4 relative ">
      {arrow ? (
        <div className="flex-1 flex  -z-10 ">
          <img
            src={arrow}
            alt="arrow"
            className="lg:rotate-90 lg:w-[25px] xl:w-[30px]  "
          />
        </div>
      ) : (
        <div className="flex items-center flex-col ">
          <header className="flex flex-col  items-center lg:flex-row">
            <div>
              <img src={img} alt="login" />
            </div>
          </header>

          <div className="flex flex-col gap-2 w-[80%] xl:w-[65%]">
            <h2 className="text-lg text-center w-[80%] mx-auto leading-[1.2rem] font-semibold text-[#060C3C] lg:font-bold xl:text-xl xl:leading-[1.5rem] xl:w-[70%]">
              {header}
            </h2>
            <p className="text-sm leading-[1.2rem] text-center font-semibold text-[#5D6180] xl:text-lg xl:leading-[1.2rem]">
              {text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Platforms;
