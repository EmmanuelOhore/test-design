import backgroundImage from "/Bg.png";

const HeroImgSection = ({ img }: { img: string }) => {
  return (
    <div
      className=" w-full "
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={img} alt="illustration image" />
    </div>
  );
};

export default HeroImgSection;
