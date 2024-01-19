import titleBg from "../../../assets/title/titlebar-bg.png";
const Contact = () => {
  return (
    <div
      className="px-2 h-[500px] py-20"
      style={{
        backgroundImage: `url(${titleBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-white font-Jost text-center pt-[200px]">
          <h1 className="text-5xl">Contact Us</h1>
          <p className="border-b inline">Work Today</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
