import "./main.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/Loginpage";
import RegisterPage from "./pages/auth/RegisterPage";
import Layout from "./pages/Layout";
import RecipesPage from "./pages/recipes/RecipesPage";
import RecipeDetailsPage from "./pages/recipes/RecipesDetailsPage";
import SharePage from "./pages/recipes/SharePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "auth",
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
      {
        path: "recipes",
        element: <RecipesPage />,
      },
      { path: "recipes/:id", element: <RecipeDetailsPage /> },
      {
        path: "share",
        element: <SharePage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
