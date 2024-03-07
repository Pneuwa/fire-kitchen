import { Link } from "react-router-dom";
import classes from "../../Custom.module.css";

export default function RecipeItem({ id, title, author, imageUrl }) {
  return (
    <Link
      to={`/recipes/${id}`}
      className="text-decoration-none mb-2"
      id={Math.random()}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <div className="card bg-dark">
        <div className={classes.recipe}>
          <img src={imageUrl} className="card-img-top img-fluid" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            by {author}
          </h6>
        </div>
      </div>
    </Link>
  );
}
