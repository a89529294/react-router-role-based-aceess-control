import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./use-local-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data) => {
    let user;
    if (data.email === "admin@example.com") {
      user = {
        email: data.email,
        role: "admin",
      };
    } else {
      user = {
        email: data.email,
        role: "customer",
      };
    }

    setUser(user);
    navigate("/profile", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
