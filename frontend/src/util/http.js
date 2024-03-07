import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchRecipes({ signal, id, authorId }) {
  let url = `https://localhost:7030/api/Recipe/`;
  if (id) {
    url += `id?id=${id}`;
  }
  if (authorId) {
    url += `author?authorId=${authorId}`;
  }
  const res = await fetch(url, { signal });
  const resData = await res.json();
  return resData;
}

export async function shareRecipe({ method, body }) {
  const res = await fetch("https://localhost:7030/api/Recipe", {
    method: method,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const resData = await res.json();
  return resData;
}

export async function deleteRecipe(id) {
  await fetch(`https://localhost:7030/api/Recipe/id?id=${id}`, {
    method: "DELETE",
  });
}

export async function auth({ path, body }) {
  const res = await fetch(`https://localhost:7030/api${path}`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const resData = await res.json();
  return resData;
}
