import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Login from "pages/Auth/Login";
import Signup from "pages/Auth/Signup";
import Admin from "pages/Admin/Admin";
import MovieDetails from "pages/MovieDetails/MovieDetails";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Page d’accueil */}
      <Route path="/" element={<Home />} />

      {/* Pages d'authentification */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin */}
      <Route path="/admin" element={<Admin />} />

      {/*Details d'un produit */}
      <Route path="/movie/:id" element={<MovieDetails />} />

      {/* 404 */}
      <Route path="*" element={<div>Page introuvable</div>} />
    </Routes>
  );
}