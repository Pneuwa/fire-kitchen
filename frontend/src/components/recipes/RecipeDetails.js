import { useParams } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Strawberry Milk Splash",
    ingredients: "something, not in card",
    author: "User #1",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
  },
  {
    id: 2,
    title: "Crispy Spicy Chicken Wings",
    ingredients: "something, not in card",
    author: "User #2",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg",
  },
  {
    id: 3,
    title: "Fried Egg and Guacamole Sandwiches",
    ingredients: "something, not in card",
    author: "User #3",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
  },
  {
    id: 4,
    title: "Freshly Prepared Beef Steak with Vegetables",
    ingredients: "something, not in card",
    author: "User #4",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/05/freshly-prepared-beef-steak-with-vegetables.jpg",
  },
  {
    id: 5,
    title: "Fruit Tartelette Macro",
    ingredients: "something, not in card",
    author: "User #5",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/08/fruit-tartelette-macro.jpg",
  },
  {
    id: 6,
    title: "Mediterranean Chickpea Salad",
    ingredients: "something, not in card",
    author: "User #6",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/10/mediterranean-chickpea-salad.jpg",
  },
  {
    id: 7,
    title: "Delicious Steak with Herbs Cut on Slices",
    ingredients: "something, not in card",
    author: "User #7",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/delicious-steak-with-herbs-cut-on-slices.jpg",
  },
  {
    id: 8,
    title: "Coffee Latte with Croissant",
    ingredients: "something, not in card",
    author: "User #8",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/coffee-latte-with-croissant.jpg",
  },
  {
    id: 9,
    title: "Mexican Tacos Lined Up",
    ingredients: "something, not in card",
    author: "User #9",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/09/mexican-tacos-lined-up.jpg",
  },
  {
    id: 10,
    title: "Bagel at Home",
    ingredients: "something, not in card",
    author: "User #10",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/08/bagel-at-home.jpg",
  },
  {
    id: 11,
    title: "Cutting Pizza",
    ingredients: "something, not in card",
    author: "User #11",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/12/cutting-pizza.jpg",
  },
  {
    id: 12,
    title: "Tomato Omelette",
    ingredients: "something, not in card",
    author: "User #12",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/11/tomato-omelette.jpg",
  },
  {
    id: 13,
    title: "Banh-mi with Cucumber",
    ingredients: "something, not in card",
    author: "User #13",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/11/banh-mi-with-cucumber.jpg",
  },
  {
    id: 14,
    title: "Challah",
    ingredients: "something, not in card",
    author: "User #14",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/11/challah.jpg",
  },
  {
    id: 15,
    title: "Clafoutis Cake",
    ingredients: "something, not in card",
    author: "User #15",
    instructions: "not in card view",
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/11/clafoutis-cake.jpg",
  },
];

export default function RecipeDetails() {
  const params = useParams();
  const selectedRecipe = recipes.filter((recipe) => recipe.id == params.id)[0];
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src={selectedRecipe.img} className="img-fluid" />
        </div>
        <div className="col-12 col-md-8 mt-3 mt-md-0">
          <h1 style={{ fontFamily: "Merienda" }}>{selectedRecipe.title}</h1>
          <p className="text-muted">by {selectedRecipe.author}</p>
          <h2>Ingredients</h2>
          <p>{selectedRecipe.ingredients}</p>
          <h2>Instructions</h2>
          <p>{selectedRecipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}
