import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function Private({ children }) {
  const { loggedIn, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;
   
  if(!loggedIn) <Navigate to='/login' />
  else return children
}

export default Private;
