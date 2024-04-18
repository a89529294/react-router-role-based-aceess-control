import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { AppBar } from "./app-bar";

export const AdminLayout = () => {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" },
          { label: "Admin", path: "admin" },
        ]}
      />
      <Outlet />
    </div>
  );
};
