import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import OurTitle from "../../../components/OurTitle";

const ContactInfo = () => {
  return (
    <div className="text-black mt-20">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="flex items-center border border-grey px-5 py-7 rounded">
          <MdOutlineMailOutline className="text-6xl bg-red p-2 text-white rounded-full" />
          <div className="ms-5 text-[#666] font-Jost font-medium">
            <h1 className="text-[18px] font-bold text-black">Email Address</h1>
            <p>info@yourmail.com</p>
            <p>email@example.com</p>
          </div>
        </div>
        <div className="flex items-center border border-grey px-5 py-7 rounded">
          <MdOutlineLocationOn className="text-6xl bg-red p-2 text-white rounded-full" />
          <div className="ms-5 text-[#666] font-Jost font-medium">
            <h1 className="text-[18px] font-bold text-black">Our Address</h1>
            <p>19 Ingraham Street,</p>
            <p>Brooklyn, New York 11206</p>
          </div>
        </div>
        <div className="flex items-center border border-grey px-5 py-7 rounded">
          <IoMdCalendar className="text-6xl bg-red p-2 text-white rounded-full" />
          <div className="ms-5 text-[#666] font-Jost font-medium">
            <h1 className="text-[18px] font-bold text-black">Hours</h1>
            <p>Mon – Fri: 9am – 5pm</p>
            <p>Sat – Sun: closed</p>
          </div>
        </div>
      </div>

      {/* from info  */}
      <div className="mt-20">
        <OurTitle
          subHeading={"GET IN TOUCH"}
          heading={"Needs Help? Let’s Get in Touch"}
        ></OurTitle>
      </div>
      {/* from  */}
      <form className="card-body">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="form-control">
            <input
              type="text"
              placeholder="Your Email"
              className="input bg-from focus:bg-white"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email Address"
              className="input bg-from focus:bg-white"
              required
            />
          </div>
        </div>
        <div className="form-control my-5">
          <input
            type="email"
            placeholder="Your Subject"
            className="input bg-from focus:bg-white"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Type Your Message"
            className="textarea bg-from focus:bg-white w-full h-40"
          ></textarea>
        </div>
        <div className="justify-center flex mt-6">
          <btn className="btn bg-red text-white">Submit Message</btn>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
