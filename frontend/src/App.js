import "./main.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/Loginpage";
import RegisterPage from "./pages/auth/RegisterPage";
import Logout from "./components/auth/Logout";
import Layout from "./pages/Layout";
import RecipesPage from "./pages/recipes/RecipesPage";
import RecipeDetailsPage from "./pages/recipes/RecipesDetailsPage";
import EditPage from "./pages/recipes/EditPage";
import SharePage from "./pages/recipes/SharePage";
import UserRecipesPage from "./pages/recipes/UserRecipesPage";
import ProtectedAuth from "./util/ProtectedAuth";
import ProtectedRoute from "./util/ProtectedRoute";

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
          {
            path: "login",
            element: (
              <ProtectedAuth>
                <LoginPage />
              </ProtectedAuth>
            ),
          },
          {
            path: "register",
            element: (
              <ProtectedAuth>
                <RegisterPage />
              </ProtectedAuth>
            ),
          },
        ],
      },
      {
        path: "logout",
        element: (
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        ),
      },
      {
        path: "recipes",
        element: <RecipesPage />,
      },
      {
        path: "my-recipes",
        element: (
          <ProtectedRoute>
            <UserRecipesPage />
          </ProtectedRoute>
        ),
      },
      { path: "recipes/:id", element: <RecipeDetailsPage /> },
      {
        path: "recipes/:id/edit",
        element: (
          <ProtectedRoute>
            <EditPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "share",
        element: (
          <ProtectedRoute>
            <SharePage />
          </ProtectedRoute>
        ),
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
