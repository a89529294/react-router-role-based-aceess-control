import { useAuth } from "../hooks/use-auth";

export const AdminOnlyPage = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>This is an admin only page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
