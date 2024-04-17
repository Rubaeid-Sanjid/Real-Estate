import { Helmet } from "react-helmet-async";
import Slider from "../../Component/Banner/Slider";
import Estates from "../../Component/Estates/Estates";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Residence Realm | Home</title>
      </Helmet>
      <Slider></Slider>
      <Estates></Estates>
    </div>
  );
};

export default Home;
