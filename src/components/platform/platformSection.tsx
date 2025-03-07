import { platformData } from "../../constants";
import Platforms from "./platforms";

const PlatformSection = () => {
  return (
    <section className="mt-8 px-4 lg:mt-16">
      <h2 className="text-2xl text-[#060C3C] font-bold text-center md:text-3xl lg:text-4xl ">
        How our platform process easy to use?
      </h2>
      <div className="md:py-8 lg:flex ">
        {platformData.map((item) => (
          <Platforms
            img={item.img}
            header={item.header}
            text={item.text}
            arrow={item.arrow}
          />
        ))}
      </div>
    </section>
  );
};

export default PlatformSection;
