import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { AppBar } from "./app-bar";

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" },
          user.role === "admin"
            ? { label: "Admin", path: "admin" }
            : { label: "Customer", path: "customer" },
        ]}
      />
      <Outlet />
    </div>
  );
};
