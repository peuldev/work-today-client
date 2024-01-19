import Blog from "../../Blog/Blog/Blog";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import SatisfiedClient from "../SatisfiedClient/SatisfiedClient";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SatisfiedClient></SatisfiedClient>
      <Services></Services>
      <Blog></Blog>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
