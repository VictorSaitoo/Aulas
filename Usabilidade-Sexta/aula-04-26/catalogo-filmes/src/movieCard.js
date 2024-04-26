import React from "react";

function MovieCard({movie}){
    return(
        <div style={{border: "1px solid #ccc", padding: "10px", margin: "10px"}}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Data de Lançamento: {movie.release_date}</p>
            <img 
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt="{movie.title}"
            />
        </div>
    )
}
export default MovieCard;