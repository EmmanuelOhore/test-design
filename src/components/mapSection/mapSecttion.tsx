import Tags from "./maptags";
import { TagData } from "../../constants";
import map from "/mapSectionImages/Map.png";
const MapSection = () => {
  return (
    <section className="p-1 mt-16 lg:flex lg:justify-center md:items-center ">
      <div className=" flex flex-col gap-4 lg:w-[80%] ">
        <header className="flex flex-col items-center justify-center">
          <h2 className="text-base text-[#FFD43D] md:text-lg xl:text-xl">
            Global Scale
          </h2>
          <h3 className="text-2xl text-[#060C3C] font-bold text-center w-[70%] md:text-3xl md:w-[50%] xl:text-4xl xl:w-[40%]">
            Trusted by company around the world
          </h3>
        </header>
        <div>
          <img src={map} alt="map" className="w-full h-full" />
        </div>
        <div className="grid place-items-center grid-cols-2 gap-6  p-4 md:p-10 lg:grid-cols-4 lg:gap-10">
          {TagData.map((data) => {
            return <Tags numString={data.head} text={data.para} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
