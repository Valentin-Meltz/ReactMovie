import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Page d’accueil */}
      <Route path="/" element={<Home />} />

      {/*Details d'un produit */}
      <Route path="/movie/:id" element={<MovieDetails />} />

      {/* 404 */}
      <Route path="*" element={<div>Page introuvable</div>} />
    </Routes>
  );
}