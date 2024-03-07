import { useQuery } from "@tanstack/react-query";
import Recipes from "../../components/recipes/Recipes";
import { fetchRecipes } from "../../util/http";

export default function RecipesPage() {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
    staleTime: 30000,
    gcTime: 60000,
  });
  return (
    <Recipes
      recipes={data?.data}
      error={error}
      isPending={isPending}
      isError={isError}
    />
  );
}
