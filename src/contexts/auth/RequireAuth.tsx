import Login from "pages/Login";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if(!auth.user) {
    return <Login />;
  }

  return children;
}