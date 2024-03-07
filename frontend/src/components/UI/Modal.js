import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteRecipe, queryClient } from "../../util/http";

export default function Modal({ recipe }) {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: deleteRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userRecipes"] });
      navigate("/my-recipes");
    },
  });
  const deleteHandler = () => {
    mutate(recipe.id);
  };
  return (
    <div className="modal fade" id="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{recipe?.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Do you want to delete this recipe ?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary fw-semibold"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary fw-semibold"
              data-bs-toggle="modal"
              data-bs-target="#modal"
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
