import { fetchRecipes } from "../../util/http";
import { useQuery } from "@tanstack/react-query";
import UserRecipes from "../../components/recipes/UserRecipes";
import { GetUser } from "../../util/get-user";

export default function UserRecipesPage() {
  const user = GetUser();
  const authorId = user.id;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["userRecipes", { authorId: authorId }],
    queryFn: ({ signal }) =>
      fetchRecipes({ signal, id: null, authorId: authorId }),
    staleTime: 10000,
    enabled: !!authorId,
  });
  return (
    <UserRecipes
      recipes={data?.data}
      error={error}
      isError={isError}
      isLoading={isLoading}
    />
  );
}
