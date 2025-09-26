import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { getMovieById } from "api/MovieApi";
import "./MovieDetails.css";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovies] = useState([]);
    
    useEffect(() => {
        getMovieById(id).then(data => {
            console.log(data);
            if (data.Response === "True") setMovies(data);
        });
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-grow items-center">
                <div className="container min-h-10/12 min-w-full bg-blue-300 py-10 px-52">
                    <div className="details-container flex gap-10 p-4">
                        <div className="img-container">
                            <img src={ movie.Poster } alt="Poster" />
                        </div>
                        <div className="data-container flex flex-col flex-1">
                            <div className="title-container mb-10">
                                <div className="title-description flex gap-10 text-3xl mt-10">
                                    <h1 className="title font-bold">{ movie.Title }</h1>
                                    <h1 className="title-year text-gray-700">({ movie.Year })</h1>
                                </div>
                                <h2 className="title-genre">{ movie.Genre || "Not defined" }</h2> 
                            </div>
                            <div className="container px-5 flex items-center gap-10 mb-5">
                                <div className="rating flex items-center gap-3">
                                    <p className="rating-items text-2xl font-semibold p-2 rounded-full">{ movie.imdbRating || "Not defined" }</p>
                                    <h3 className="text-2xl">Rating</h3>
                                </div>
                                <div className="awards flex rounded-3xl border border-black p-2">
                                    <p>{ movie.Awards || "Not defined" }</p>
                                </div>
                            </div>
                            <div className="details mb-5">
                                <h3 className="text-xl font-semibold py-1">Synopsis</h3>
                                <p>{ movie.Plot || "Not defined" }</p>
                            </div>
                            <div className="attribut flex justify-between gap-4 mb-4">
                                <div className="attribut-item">
                                    <h3 className="text-l font-semibold py-1">{ movie.Director || "Not defined" }</h3>
                                    <p>Director</p>
                                </div>
                                <div className="attribut-item">
                                    <h3 className="text-l font-semibold py-1">{ movie.Writer || "Not defined" }</h3>
                                    <p>Writer</p>
                                </div>
                                <div className="attribut-item">
                                    <h3 className="text-l font-semibold py-1">{ movie.Released || "Not defined" }</h3>
                                    <p>Released</p>
                                </div>
                                <div className="attribut-item">
                                    <h3 className="text-l font-semibold py-1">{ movie.Runtime || "Not defined" }</h3>
                                    <p>Runtime</p>
                                </div>
                            </div>
                            <div className="attribut flex justify-between gap-4 mb-4">
                                <p><strong>With: </strong>{ movie.Actors || "Not defined" }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}