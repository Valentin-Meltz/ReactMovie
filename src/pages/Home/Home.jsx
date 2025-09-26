import { useEffect, useState } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MovieSelection from "components/MovieSelection/MovieSelection";
import { searchMovies } from "api/MovieApi"; // <-- uniquement la recherche par mot-clé
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);           
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setMovies([]);
      setHasMore(false);
      setPage(1);
      return;
    }

    setLoading(true);
    setMovies([]);
    setPage(1);

    const data = await searchMovies(query, 1);

    if (data?.Response === "True" && Array.isArray(data.Search)) {
      setMovies(data.Search);

      let more = false;
      if (typeof data.totalResults === "string" || typeof data.totalResults === "number") {
        const total = parseInt(data.totalResults, 10);
        if (!Number.isNaN(total)) {
          more = 10 < total;
        }
      } else {
        more = data.Search.length === 10;
      }

      setHasMore(more);
      setPage(2);
    } else {
      setMovies([]);
      setHasMore(false);
    }

    setLoading(false);
  };

  const handleLoadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    const currentPage = page;
    const data = await searchMovies(query, currentPage);

    if (data?.Response === "True" && Array.isArray(data.Search) && data.Search.length > 0) {
      setMovies((prev) => [...prev, ...data.Search]);

      let more = false;
      if (typeof data.totalResults === "string" || typeof data.totalResults === "number") {
        const total = parseInt(data.totalResults, 10);
        if (!Number.isNaN(total)) {
          more = (currentPage * 10) < total;
        }
      } else {
        more = data.Search.length === 10;
      }

      setHasMore(more);
      setPage(currentPage + 1);
    } else {
      setHasMore(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    document.title = "Home - My ReactMovie";

    searchMovies("harry", 1).then(data => {
      if (data.Response === "True") setMovies(data.Search);
    });    
  }, []);

  return (
    <>
      <Header />
      <main className="home flex flex-col items-center justify-center text-center gap-4 mt-5 p-4">
        <h2 className="title font-bold text-3xl mt-10 mb-5">Welcome to My ReactMovie 🎬</h2>

        <div className="form-container p-4 w-full max-w-6xl mb-10 ">
          <form className="form flex justify-start items-center gap-10 p-4 w-full" onSubmit={handleSearchSubmit}>
            <input
              className="input border p-2 rounded shadow-md w-80"
              type="text"
              placeholder="Search for a movie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <input
              type="submit"
              className="submit border p-2 rounded shadow-md bg-blue-400 font-bold"
              value={loading ? "Loading…" : "Search"}
              disabled={loading}
            />
          </form>
        </div>

        <MovieSelection selection={movies} />

        {hasMore && (
          <button
            className="border p-2 rounded shadow-md bg-blue-500 text-white font-semibold mt-4"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading…" : "Load more"}
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}