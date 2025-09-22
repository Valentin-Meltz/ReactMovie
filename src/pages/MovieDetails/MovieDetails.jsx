import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "components/Header/Header";
import { getMovieById } from "api/MovieApi";

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
        <>
            <Header />
            <div className="container mx-auto p-4">
                <h1>{ movie.Title }</h1>
                <div className="details-container">
                    <div className="img-container">
                        <img src={ movie.Poster } alt="Poster" />
                    </div>
                    <div className="data-container">
                        <div className="attribut">
                            <p><strong>By: </strong>{ movie.Director || "Not defined" }</p>
                            <p><strong>From: </strong>{ movie.Writer || "Not defined" }</p>
                            <p><strong>Year: </strong>{ movie.Year || "Not defined" }</p>
                            <p><strong>Runtime: </strong>{ movie.Runtime || "Not defined" }</p>
                        </div>
                        <div className="details">
                            <p><strong>Description: </strong>{ movie.Plot || "Not defined" }</p>
                        </div>
                        <div className="attribut">
                            <p><strong>Genre: </strong>{ movie.Genre || "Not defined" }</p>
                            <p><strong>With: </strong>{ movie.Actors || "Not defined" }</p>
                            <p><strong>Box Office: </strong>{ movie.BoxOffice || "Not defined" }</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}