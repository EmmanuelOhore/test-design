import { useState } from "react";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(true);
  const handleNavToggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <nav className="flex flex-wrap justify-between p-4 items-center w-[80%] mx-auto">
      <div className="flex items-center gap-16 md:gap-8 lg:gap-16 xl:gap-18">
        <img
          src="/Logo.png"
          alt="logo"
          className="w-7 md:w-9 lg:w-10 xl:w-12"
        />

        <ul className=" gap-8 hidden md:flex md:gap-4 xl:gap-7">
          <li className="text-base font-semibold md:text-sm md:font-medium lg:text-base lg:font-semibold xl:text-lg xl:font-semibold">
            Pricing
          </li>
          <li className="text-base font-semibold md:text-sm md:font-medium lg:text-base lg:font-semibold xl:text-lg xl:font-semibold ">
            Resource Center
          </li>
          <li className="text-base font-semibold md:text-sm md:font-medium lg:text-base lg:font-semibold xl:text-lg xl:font-semibold ">
            About
          </li>
          <li className="text-base font-semibold md:text-sm md:font-medium lg:text-base lg:font-semibold xl:text-lg xl:font-semibold ">
            Contact
          </li>
        </ul>
      </div>
      <div className="btn_container gap-5 hidden md:flex">
        <button className=" px-8 py-3  rounded-md text-base font-bold text-[#060C3C] md:px-5 md:py-2 md:text-sm md:font-medium lg:text-base lg:font-semibold xl:text-lg xl:font-bold xl:px-8 xl:py-3">
          Log in
        </button>
        <button className=" px-8 py-3 rounded-md text-base font-bold text-white bg-[#6241D4] md:px-5 md:py-2 md:text-sm md:font-medium lg:text-base lg:font-semibold xl:text-lg xl:font-bold xl:px-8 xl:py-3">
          Sign Up
        </button>
      </div>
      <i
        onClick={handleNavToggle}
        className="fa-solid fa-bars text-[18px] md:!hidden "
      ></i>
      {isOpen && (
        <div className=" basis-full flex flex-col pt-3 items-center gap-4 md:hidden">
          <ul className=" gap-2 flex flex-col justify-center items-center ">
            <li className="text-sm font-medium">Pricing</li>
            <li className="text-sm font-medium">Resource Center</li>
            <li className="text-sm font-medium">About </li>
            <li className="text-sm font-medium">Contact </li>
          </ul>
          <div className="btn_container flex gap-4  ">
            <button className="outline px-6 py-2 rounded-md text-sm  font-medium text-[#060C3C]">
              Log in
            </button>
            <button className=" px-6 py-2 rounded-md text-sm  font-medium text-white bg-[#6241D4]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
