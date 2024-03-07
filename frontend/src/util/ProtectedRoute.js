import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const token = sessionStorage.getItem("session");
  if (!token) {
    return <Navigate to="/auth/login" />;
  } else {
    return props.children;
  }
}

export default ProtectedRoute;
