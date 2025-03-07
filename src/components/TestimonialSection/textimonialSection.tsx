import Testimonials from "./testimony";
import { testimonialData } from "../../constants";
const TestimonialSection = () => {
  return (
    <section className="mt-15 p-3">
      <header className="flex justify-center">
        <h2 className="text-2xl text-[#060C3C] font-bold text-center w-[70%] md:text-3xl md:w-[50%] xl:text-4xl xl:w-[40%]">
          See what our customers have to say about us
        </h2>
      </header>
      <div className=" p-4 mx-auto mt-8 flex flex-col gap-5 lg:flex-row lg:gap-10 lg:justify-center xl:w-[80%]">
        {testimonialData.map((data) => {
          return (
            <Testimonials
              img={data.img}
              text={data.text}
              profile={data.profile}
              name={data.name}
              title={data.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialSection;
