import pattern from "/Pattern.png";
import { navLinksData } from "../../constants";
import logo from "/Logo.png";
const Footer = () => {
  return (
    <footer className="flex justify-center mt-[5rem] p-2 bg-[#060C3C]">
      <div className="  outline-white lg:w-[90%]  md:flex md:flex-col md:gap-6">
        <div className="flex md:justify-center border-b border-[#1F244E]  lg:justify-between">
          <div className=" text_container relative flex flex-col items-center py-8 gap-3 lg:items-start lg:gap-5 ">
            <span
              style={{
                background: `url(${pattern})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute top-0 right-0 w-[40%] h-[70%] z-10 lg:hidden"
            ></span>
            <h2 className=" text-[28px] font-bold text-white z-10">
              Ready to get started?
            </h2>
            <p className="text-[#B4B6C4] text-base font-normal text-center w-[70%] lg:text-left">
              The fastest and simple way to generate growing business solutions
              with our products
            </p>
            <div className="input_box  justify-between border border-[#B4B6C4] bg-white z-10  w-[18rem] p-2 flex gap-4 rounded-md md:p-1 xl:p-2 xl:w-[25rem] ">
              <input
                type="text"
                placeholder="Your business email"
                className="placeholder:text-sm placeholder:pl-4 xl:placeholder:text-base"
              />
              <button className="text-[12px] font-semibold h-[2.3rem] bg-[#6241D4] text-white w-[10rem] rounded-lg md:h-[2.5rem] xl:text-base xl:h-[3rem]">
                Get Started
              </button>
            </div>
          </div>
          <div className="img_container  hidden  justify-center lg:flex ">
            <img src={pattern} alt="pattern" className="w-[70%]" />
          </div>
        </div>
        <div className="navlinks_ciontainer py-5   border-b border-[#1F244E]  md:flex  lg:py-10">
          <div className="flex flex-col items-center gap-4 md:w-[50%]  lg:items-start lg:gap-6">
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-7 md:w-9 lg:w-10 xl:w-12"
              />
            </div>
            <div className="w-[80%] lg:w-[90%]">
              <p className="text-[#B4B6C4]  text-center lg:text-left">
                The fastest and simple way to generate growing business
                solutions with our products
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#B4B6C4]">
                <i className="fa-solid fa-envelope mr-2"></i>
                hello@dhuhacreative.com
              </h3>
              <h3 className="text-[#B4B6C4]">
                <i className="fa-brands fa-slack mr-2"></i>Join our slack
                community
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 px-8 lg:grid-cols-3 md:mt-0 lg:gap-6 ">
            {navLinksData.map((navLinks, index) => {
              return (
                <div key={index}>
                  <h2 className=" text-white text-base font-bold">
                    {navLinks.header}
                  </h2>
                  <ul className="flex flex-col gap-1.5">
                    {navLinks.links.map((link, index) => {
                      return (
                        <li
                          key={index}
                          className="text-[#B4B6C4] font-normal mt-2 text-sm"
                        >
                          {link}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex  flex-col items-center gap-3 py-3 lg:flex-row lg:justify-between lg:items-center">
          <p className="text-[#B4B6C4] font-normal text-sm">
            © 2020 Growthly. All Right Reserved
          </p>
          <div className="flex gap-4">
            <i className="fa-brands fa-instagram text-[#B4B6C4] text-[20px]"></i>
            <i className="fa-brands fa-twitter text-[#B4B6C4] text-[20px]"></i>
            <i className="fa-brands fa-linkedin text-[#B4B6C4] text-[20px]"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
