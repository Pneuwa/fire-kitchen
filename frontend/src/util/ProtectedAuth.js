import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedAuth(props) {
  const navigate = useNavigate();
  const session = sessionStorage.getItem("session");
  useEffect(() => {
    if (session) {
      navigate(0);
    }
  });
  if (session) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
}

export default ProtectedAuth;
