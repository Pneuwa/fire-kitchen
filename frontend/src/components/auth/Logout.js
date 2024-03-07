import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const session = sessionStorage.getItem("session");
  useEffect(() => {
    if (session) {
      sessionStorage.removeItem("session");
      navigate("/");
    }
  });
  return;
}
