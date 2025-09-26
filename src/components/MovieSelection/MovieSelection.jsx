import React from 'react';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MovieSelection({ selection }) {
    return (
        <div className="movie-selection-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {selection.map((movie, index) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </div>
    );
}