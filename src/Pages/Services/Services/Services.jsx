import { FaArrowRight } from "react-icons/fa6";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { LiaHandsSolid } from "react-icons/lia";
import OurTitle from "../../../components/OurTitle";

const Services = () => {
  return (
    <div className="mx-2 bg-[#f7f7f7]">
      <div className="max-w-screen-xl mx-auto my-24 py-20">
        <OurTitle
          heading={"High Quality Services"}
          subHeading={"OUR SERVICES"}
        ></OurTitle>
        {/* Services info  */}
        <div className="pt-20 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          <div className=" bg-white p-4 border border-grey rounded">
            <div className="hover:text-red">
              <LiaPeopleCarrySolid className="text-6xl" />
            </div>
            <h1 className="text-xl font-semibold">Process Development</h1>
            <p className="text-[#666] my-5">
              Sagitis himos pulvinar morb socis laoreet posuere enim non auctor
              etiam pretium libero
            </p>
            <div className="flex cursor-pointer group">
              {" "}
              <FaArrowRight className="p-3 bg-white text-4xl rounded-full group-hover:bg-red group-hover:text-white" />
              <button className="ms-2 group-hover:text-red font-medium text-[#1C2539]">
                Read More
              </button>
            </div>
          </div>
          <div className=" bg-white p-4 border border-grey rounded">
            <div className="hover:text-red">
              <RiCustomerService2Line className="text-6xl" />
            </div>
            <h1 className="text-xl font-semibold">Strategy & Planning</h1>
            <p className="text-[#666] my-5">
              Sagitis himos pulvinar morb socis laoreet posuere enim non auctor
              etiam pretium libero
            </p>
            <div className="flex cursor-pointer group">
              {" "}
              <FaArrowRight className="p-3 bg-white text-4xl rounded-full group-hover:bg-red group-hover:text-white" />
              <button className="ms-2 group-hover:text-red font-medium text-[#1C2539]">
                Read More
              </button>
            </div>
          </div>
          <div className=" bg-white p-4 border border-grey rounded">
            <div className="hover:text-red">
              <CiEdit className="text-6xl" />
            </div>
            <h1 className="text-xl font-semibold">Business Planning</h1>
            <p className="text-[#666] my-5">
              Sagitis himos pulvinar morb socis laoreet posuere enim non auctor
              etiam pretium libero
            </p>
            <div className="flex cursor-pointer group">
              {" "}
              <FaArrowRight className="p-3 bg-white text-4xl rounded-full group-hover:bg-red group-hover:text-white" />
              <button className="ms-2 group-hover:text-red font-medium text-[#1C2539]">
                Read More
              </button>
            </div>
          </div>
          <div className=" bg-white p-4 border border-grey rounded">
            <div className="hover:text-red">
              <LiaHandsSolid className="text-6xl" />
            </div>
            <h1 className="text-xl font-semibold">Compensation</h1>
            <p className="text-[#666] my-5">
              Sagitis himos pulvinar morb socis laoreet posuere enim non auctor
              etiam pretium libero
            </p>
            <div className="flex cursor-pointer group">
              {" "}
              <FaArrowRight className="p-3 bg-white text-4xl rounded-full group-hover:bg-red group-hover:text-white" />
              <button className="ms-2 group-hover:text-red font-medium text-[#1C2539]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
