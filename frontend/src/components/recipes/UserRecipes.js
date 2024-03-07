import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../Custom.module.css";
import Modal from "../UI/Modal";

export default function UserRecipes({ recipes, error, isError, isLoading }) {
  const [recipe, setRecipe] = useState();
  const navigate = useNavigate();

  return (
    <>
      {recipes?.length == 0 && (
        <p className="text-center my-3">No recipes found</p>
      )}
      <Modal recipe={recipe} />
      <table class="table table-dark my-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {!error &&
            !isError &&
            !isLoading &&
            recipes.map((recipe) => (
              <tr key={recipe.id}>
                <th scope="row" className="align-middle">
                  {recipe.id}
                </th>
                <td className="align-middle">
                  <div
                    className={classes.preview}
                    style={{ width: "6rem", height: "6rem" }}
                  >
                    <img
                      src={recipe.imageUrl}
                      className="img-fluid object-fit-cover w-auto h-100"
                    />
                  </div>
                </td>
                <td className="align-middle">{recipe.title}</td>
                <td className="align-middle">
                  <button
                    className="btn btn-primary fw-semibold mx-1 my-1"
                    onClick={() => {
                      setRecipe(recipe);
                      navigate(`/recipes/${recipe.id}/edit`);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                    onClick={() => {
                      setRecipe(recipe);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
