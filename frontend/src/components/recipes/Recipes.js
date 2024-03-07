import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import RecipeItem from "./RecipeItem";
import Masonry from "react-masonry-css";

export default function Recipes({ recipes, error, isPending, isError }) {
  const [search, setSearch] = useState(false);
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(() => {
    if (searchedRecipes.length > 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [searchedRecipes.length]);

  const searchHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const enteredTerm = e.target.value.toLowerCase();

    if (enteredTerm == "" || enteredTerm == " ") {
      setSearchedRecipes([]);
    } else {
      setSearchedRecipes(
        recipes.filter(
          (searchedRecipe) =>
            searchedRecipe.title.toLowerCase().includes(enteredTerm) ||
            searchedRecipe.author.toLowerCase().includes(enteredTerm)
        )
      );
    }
  };

  return (
    <div className="container my-3">
      <div className="row">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search by title or author"
          className="form-control mb-3 w-75 w-sm-50 m-auto"
          onChange={searchHandler}
        />
      </div>
      <div className="row">
        {search && (
          <h1
            className="text-center mb-3 p-0"
            style={{ fontFamily: "Merienda" }}
          >
            Filtered Recipes
          </h1>
        )}
        {error && <p>{error.message}</p>}
        {isError && <p>{isError}</p>}
        {isPending && <Loading />}
        {!error && !isError && !isPending && (
          <Masonry
            breakpointCols={{ default: 4, 576: 1, 768: 2, 992: 3 }}
            className="d-flex"
            columnClassName="d-flex flex-column p-1"
          >
            {(search ? searchedRecipes : recipes).map((recipe) => (
              <RecipeItem
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                author={recipe.author}
                imageUrl={recipe.imageUrl}
              />
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}
