import { logoData } from "../constants";

const LogoList = () => {
  return (
    <section className="mt-8">
      <div className=" p-5  grid grid-cols-3 gap-2 md:grid-cols-6 place-items-center  lg:w-[80%] lg:mx-auto xl:w-[70%] ">
        {logoData.map((logo, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center w-[5rem] h-[2rem] xl:w-[6.5rem]"
            >
              <img
                src={logo.img}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LogoList;
