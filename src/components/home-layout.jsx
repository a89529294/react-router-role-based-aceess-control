import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { AppBar } from "./app-bar";

export const HomeLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" },
        ]}
      />
      {/* {outlet} */}
      <Outlet />
    </div>
  );
};
