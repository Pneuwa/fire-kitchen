import { useQuery } from "@tanstack/react-query";
import RecipeDetails from "../../components/recipes/RecipeDetails";
import { useParams } from "react-router-dom";
import { fetchRecipes } from "../../util/http";

export default function RecipeDetailsPage() {
  const params = useParams();
  const recipeId = params.id;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["recipes", { id: recipeId }],
    queryFn: ({ signal }) => fetchRecipes({ signal, id: recipeId }),
    staleTime: 10000,
    enabled: !!recipeId,
  });
  return <RecipeDetails recipe={data?.data} />;
}
