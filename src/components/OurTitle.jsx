// eslint-disable-next-line react/prop-types
const OurTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <div className="mx-auto font-Jost">
        <p className="text-red font-medium text-center">{subHeading}</p>
        <h3 className="lg:text-4xl text-2xl font-semibold text-black text-center mt-5">
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default OurTitle;
