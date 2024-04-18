import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import { ProfilePage } from "./pages/profile";
import { SettingsPage } from "./pages/settings";
import { AdminLayout } from "./components/admin-layout";
import { HomeLayout } from "./components/home-layout";
import { ProtectedLayout } from "./components/protected-layout";
import { AdminOnlyPage } from "./pages/admin-only";
import { CustomerLayout } from "./components/customer-layout";
import { CustomerOnlyPage } from "./pages/customer-only";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminOnlyPage />} />
      </Route>

      <Route element={<CustomerLayout />}>
        <Route path="/customer" element={<CustomerOnlyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
