export default function RecipeDetails({ recipe }) {
  return (
    <div className="container my-5">
      {!recipe && <p className="text-center">This recipe is not found</p>}
      {recipe && (
        <div className="row">
          <div className="col-12 col-md-4">
            <img src={recipe?.imageUrl} className="img-fluid" />
          </div>
          <div className="col-12 col-md-8 mt-3 mt-md-0">
            <h1 style={{ fontFamily: "Merienda" }}>{recipe?.title}</h1>
            <p className="text-muted">by {recipe?.author}</p>
            <h2>Ingredients</h2>
            <p>{recipe?.ingredients}</p>
            <h2>Instructions</h2>
            <p>{recipe?.instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}
