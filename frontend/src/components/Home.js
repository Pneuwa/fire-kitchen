import burger from "../images/carousel/burger-with-melted-cheese.jpg";
import pizza from "../images/carousel/pizza-salami-close-up.jpg";
import pancakes from "../images/carousel/pouring-honey-on-pancakes.jpg";
import baklava from "../images/carousel/traditional-turkish-baklava-dessert-detail.jpg";
import chicken from "../images/carousel/close-up-of-butter-chicken-indian-dish.jpg";
import noodle from "../images/carousel/plate-of-noodles-with-shrimps.jpg";
import Carousel from "./UI/Carousel";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const navigateRecipesHandler = () => {
    window.scrollTo(0, 0);
    navigate("/recipes");
  };
  const navigateShareHandler = () => {
    window.scrollTo(0, 0);
    navigate("/share");
  };
  return (
    <div className="container-fluid d-flex flex-column justify-content-center">
      <div className="row">
        <Carousel source1={burger} source2={pizza} source3={pancakes} />
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center bg-dark py-3">
          <p
            style={{
              width: "75%",
              fontSize: "2em",
              textAlign: "center",
              fontFamily: "Merienda",
            }}
          >
            Turn your love for cooking into a flavorful adventure and spice up
            your kitchen adventures!
          </p>
          <button
            className="btn btn-outline-primary p-2 mt-3 fw-semibold"
            onClick={navigateRecipesHandler}
          >
            Try out new recipes
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center bg-dark order-2 order-md-1 py-3">
          <p
            style={{
              width: "75%",
              fontSize: "2em",
              textAlign: "center",
              fontFamily: "Merienda",
            }}
          >
            Unleash your culinary creativity and share the flavors of your
            kitchen!
          </p>
          <button
            className="btn btn-outline-primary p-2 mt-3 fw-semibold"
            onClick={navigateShareHandler}
          >
            Share your favorite recipes
          </button>
        </div>
        <Carousel
          className="order-1 order-md-2"
          source1={baklava}
          source2={chicken}
          source3={noodle}
        />
      </div>
    </div>
  );
}
