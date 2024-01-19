import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import SatisfiedClient from "../SatisfiedClient/SatisfiedClient";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SatisfiedClient></SatisfiedClient>
      <Services></Services>
    </div>
  );
};

export default Home;
