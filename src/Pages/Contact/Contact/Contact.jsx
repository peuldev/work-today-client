import titleBg from "../../../assets/title/titlebar-bg.png";
import ContactInfo from "../ContactInfo/ContactInfo";
const Contact = () => {
  return (
    <div
      className="px-2 py-20"
      style={{
        backgroundImage: `url(${titleBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-white font-Jost text-center pt-[200px]">
          <h1 className="text-5xl">Contact Us</h1>
          <p className="border-b inline">Work Today</p>
        </div>
        <ContactInfo></ContactInfo>
      </div>
    </div>
  );
};

export default Contact;
