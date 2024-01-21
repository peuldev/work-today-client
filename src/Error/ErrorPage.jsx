import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className=" h-[100vh] flex justify-center items-center container mx-auto">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <h3 className="my-5 text-4xl font-semibold">Page Not found</h3>
          <p className=" inline py-2 px-4 text-white bg-red hover:bg-white hover:text-red rounded-full cursor-pointer hover:border">
            <Link to="/">Back Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
