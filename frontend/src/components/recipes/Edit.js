import classes from "../../Custom.module.css";
import hero from "../../images/sergey-kotenev-V6C_1AUqAWw-unsplash.jpg";
import RecipeForm from "./RecipeForm";

export default function Edit() {
  return (
    <div
      className="container-fluid w-100 w-xl-75"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "center",
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={`row pt-5 mb-0 ${classes.head}`}>
        <h2 className="m-0 mb-5 text-center">Edit your favorite recipe!</h2>
      </div>
      <RecipeForm />
    </div>
  );
}
