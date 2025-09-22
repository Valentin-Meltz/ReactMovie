import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const id = movie?.imdbID || movie?.id;
  const title = movie.Title || "Unknown Title";
  const year = movie.Year || "Unknown Year";
  const poster = movie.Poster || "";
  const director = movie.Director || "Unknown Director";

  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card border p-2 rounded shadow-md flex flex-col items-center w-72 h-full">
        <div className="img-container p-2 h-4/5 flex items-center">
          <img className="img h-full" src={poster} alt="Poster"  />
        </div>
        <div className="data-container p-2 text-center h-1/5">
          <h3 className="movie-title font-bold">{title}</h3>
          <p className="movie-description">By {director} — {year}</p>
        </div>
      </div>
    </Link>
  );
}