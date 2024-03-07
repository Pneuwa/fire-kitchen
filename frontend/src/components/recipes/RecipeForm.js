import { useEffect, useRef, useState } from "react";
import classes from "../../Custom.module.css";
import ImagePreviewer from "../UI/ImagePreviewer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { queryClient, shareRecipe } from "../../util/http";
import { GetUser } from "../../util/get-user";
import Error from "../UI/Error";

export default function RecipeForm() {
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const titleRef = useRef();
  const ingredientsRef = useRef();
  const instructionsRef = useRef();
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = GetUser();
  let method;
  let body;

  const imageChangeHandler = async (e) => {
    let data = new FormData();
    data.append("formFile", e.target.files[0]);
    const res = await fetch("https://localhost:7030/api/Image", {
      method: "POST",
      headers: {
        Accept: "*/*",
      },
      body: data,
    });
    const resData = await res.json();
    setImageData(resData.link);
  };

  useEffect(() => {
    if (pathname.includes("edit")) {
      setIsEditing(true);
      const fetchSelectedProduct = async () => {
        const res = await fetch(
          `https://localhost:7030/api/Recipe/id?id=${params.id}`
        );
        const resData = await res.json();
        setRecipe(resData.data);
        setImageData(resData.data.imageUrl);
        if (resData.data.authorId != user.id) {
          navigate("/recipes");
        }
      };
      fetchSelectedProduct();
      return;
    }
    setIsEditing(false);
    return;
  }, [pathname]);

  const { mutate, isPending } = useMutation({
    mutationFn: shareRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate("/recipes");
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    const enteredTitle = titleRef.current.value;
    const enteredIngredients = ingredientsRef.current.value;
    const enteredInstructions = instructionsRef.current.value;
    const author = user.firstName + " " + user.lastName;

    const data = {
      title: enteredTitle,
      imageUrl: imageData,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
      author: author,
      authorId: user.id,
    };

    form.classList.add("was-validated");

    if (
      data.title == "" ||
      data.imageUrl == null ||
      data.ingredients == "" ||
      data.instructions == ""
    ) {
      setHasError(true);
      setErrorMessage("All fields are required");
      return;
    }

    if (isEditing) {
      method = "PUT";
      body = { id: recipe.id, ...data };
    } else {
      method = "POST";
      body = data;
    }

    mutate({ method, body });
  };
  return (
    <form
      className={`row needs-validation w-100 w-md-75 w-xl-50 m-auto ${classes.form}`}
      onSubmit={submitHandler}
      noValidate
    >
      {hasError && <Error message={errorMessage} />}
      <div className="form-group mb-2">
        <label htmlFor="title" className="form-label fw-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-control bg-transparent bg-gradient fw-semibold"
          name="title"
          ref={titleRef}
          defaultValue={isEditing ? recipe.title : ""}
          required
        />
        <div className="invalid-feedback fw-semibold text-danger">
          Please enter a title
        </div>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="image" className="form-label fw-semibold">
          Image
        </label>
        <input
          id="image"
          type="file"
          className={` bg-transparent bg-gradient fw-semibold ${classes.file}`}
          name="image"
          onChange={imageChangeHandler}
          defaultValue={isEditing ? recipe.imageUrl : null}
          required
        />
        <ImagePreviewer imageData={imageData} hasError={hasError} />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="ingredients" className="form-label fw-semibold">
          Ingredients
        </label>
        <textarea
          className="form-control bg-transparent bg-gradient fw-semibold"
          id="ingredients"
          name="ingredients"
          rows={3}
          ref={ingredientsRef}
          defaultValue={isEditing ? recipe.ingredients : ""}
          required
        ></textarea>
        <div className="invalid-feedback fw-semibold text-danger">
          Please enter some ingredients
        </div>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="instructions" className="form-label fw-semibold">
          Instructions
        </label>
        <textarea
          className="form-control bg-transparent bg-gradient fw-semibold"
          id="instructions"
          name="instructions"
          rows={5}
          ref={instructionsRef}
          defaultValue={isEditing ? recipe.instructions : ""}
          required
        ></textarea>
        <div className="invalid-feedback fw-semibold text-danger">
          Please enter instructions
        </div>
      </div>
      <div className="col-12 mt-1 mb-5">
        {!isPending && (
          <button className="btn btn-outline-light fw-semibold" type="submit">
            {isEditing ? "Edit" : "Share"}
          </button>
        )}
      </div>
    </form>
  );
}
