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
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
