// eslint-disable-next-line react/prop-types
const DisplyBlog = ({ blog }) => {
  // eslint-disable-next-line react/prop-types
  const { name, title, photo } = blog;
  return (
    <div className="text-white cursor-default">
      <img src={photo} alt="" />
      <h1 className="uppercase mt-7 mb-3 text-[14px]">
        <span className="text-red hover:text-white">Author Name</span> /{" "}
        <span className="font-medium">{name}</span>
      </h1>
      <h1 className="text-2xl font-semibold hover:text-red cursor-pointer">{title}</h1>
    </div>
  );
};

export default DisplyBlog;
