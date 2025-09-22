import React, { useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MovieSelection({ selection }) {
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 20;
    const totalPages = Math.ceil(selection.length / pageSize);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const startIndex = currentPage * pageSize;
    const currentSelection = selection.slice(startIndex, startIndex + pageSize);

    return (
        <div className="movie-selection-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {currentSelection.map((movie, index) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={handlePrevious} disabled={currentPage === 0}>Précédent</button>
                <button onClick={handleNext} disabled={currentPage === totalPages - 1}>Suivant</button>
            </div>
        </div>
    );
}