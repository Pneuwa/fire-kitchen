import { useEffect, useRef, useState } from "react";
import classes from "../../Custom.module.css";
import ImagePreviewer from "../UI/ImagePreviewer";

export default function ShareForm() {
  const titleRef = useRef();
  const imageUrlRef = useRef();
  const ingredientsRef = useRef();
  const instructionsRef = useRef();
  const [imageData, setImageData] = useState(null);

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImageData(null);
    }
    return setImageData(file);
  };

  useEffect(() => {
    if (imageUrlRef.current?.files[0] == null) {
      return;
    }
    setImageData(imageUrlRef.current.files[0]);
  }, [imageData]);

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    const enteredTitle = titleRef.current.value;
    const uploadedImage = imageUrlRef.current.files[0];
    const enteredIngredients = ingredientsRef.current.value;
    const enteredInstructions = instructionsRef.current.value;

    const data = {
      title: enteredTitle,
      image: uploadedImage,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
    };

    form.classList.add("was-validated");
  };
  return (
    <form
      className={`row needs-validation w-100 w-md-75 w-xl-50 m-auto ${classes.form}`}
      onSubmit={submitHandler}
      noValidate
    >
      <div className="form-group mb-2">
        <label htmlFor="title" className="form-label fw-semibold">
          Title
        </label>
        <input
          type="text"
          className="form-control bg-transparent bg-gradient fw-semibold"
          id="title"
          name="title"
          ref={titleRef}
          required
        />
        <div className="invalid-feedback">Please enter a valid title</div>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="image" className="form-label fw-semibold">
          Image
        </label>
        <input
          type="file"
          className={` bg-transparent bg-gradient fw-semibold ${classes.file}`}
          id="image"
          name="image"
          ref={imageUrlRef}
          onChange={imageChangeHandler}
          required
        />
        <ImagePreviewer imageData={imageData} />
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
          required
        ></textarea>
        <div className="invalid-feedback">Please enter some ingredients</div>
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
          required
        ></textarea>
        <div className="invalid-feedback">Please enter instructions</div>
      </div>
      <div className="col-12 mt-1 mb-5">
        <button className="btn btn-outline-light fw-semibold" type="submit">
          Share
        </button>
      </div>
    </form>
  );
}
