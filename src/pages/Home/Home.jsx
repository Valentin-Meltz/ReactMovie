import { useEffect, useState } from "react";
import Header from "components/Header/Header";
import MovieSelection from "components/MovieSelection/MovieSelection";
import { searchMovies } from "api/MovieApi";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("harry", 1).then(data => {
      if (data.Response === "True") setMovies(data.Search);
    });
  }, []);


  return (
    <>
      <Header />
      <main className="home flex flex-col items-center justify-center text-center gap-4 mt-5">
        <h2 className="title font-bold text-3xl">Welcome to My ReactMovie 🎬</h2>
        <MovieSelection selection={ movies }/>
      </main>
    </>
  );
}