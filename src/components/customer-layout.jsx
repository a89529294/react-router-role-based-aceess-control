import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { AppBar } from "./app-bar";

export const CustomerLayout = () => {
  const { user } = useAuth();

  if (!user || user.role !== "customer") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" },
          { label: "Customer", path: "customer" },
        ]}
      />
      <Outlet />
    </div>
  );
};
