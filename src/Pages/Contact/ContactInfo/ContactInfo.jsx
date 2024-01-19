import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";

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
    </div>
  );
};

export default ContactInfo;
