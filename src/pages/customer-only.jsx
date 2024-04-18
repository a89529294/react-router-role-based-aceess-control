import { useAuth } from "../hooks/use-auth";

export const CustomerOnlyPage = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>This is an customer only page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
