import team1 from "../../../assets/slider/team1.jpg";
const Banner = () => {
  return (
    <div className="h-[800px] rounded" style={{ backgroundImage: `url(${team1})` }}>
      <div className="flex justify-center pt-[300px]">
        <div className="text-center text-white">
          <h1 className="text-xl bg-red rounded py-1 inline px-5">
            Welcome To Work Today
          </h1>
          <h4 className="font-Jost text-6xl font-bold my-5">
            Empowering leaders <br /> to live life on{" "}
            <span className="text-red">Purpose</span>
          </h4>
          <p>Find out more</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
