import team1 from "../../../assets/slider/team1.jpg";
const Banner = () => {
  return (
    <div
      className="h-[800px]"
      style={{
        backgroundImage: `url(${team1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center pt-[300px]">
        <div className="text-center text-white cursor-default">
          <h1 className="text-xl bg-red rounded py-1 inline px-5">
            Welcome To Work Today
          </h1>
          <h4 className="font-Jost lg:text-6xl md:text-3xl text-xl font-bold my-5">
            Empowering leaders <br /> to live life on{" "}
            <span className="text-red">Purpose</span>
          </h4>
          <div className="flex justify-center ">
            <div className="flex items-center hover:text-red ">
              <p className="bg-black text-black inline py-3 px-5 rounded-full relative right-4 ">
                .
              </p>
              <p className="cursor-pointer  absolute text-xl">Find out more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
