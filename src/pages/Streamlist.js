import React, { useState } from "react";
import "../App.css";

function StreamList() {
    const [movie, setMovie] = useState("");
    const [movies, setMovies] = useState([]);
        const addMovie = (e) => {
        e.preventDefault();
        if (movie.trim() === "") return;
        if (movies.includes(movie.trim())) {
            alert("Movie already exists in the list!");
            return;
        }
        setMovies([...movies, movie.trim()]);
        setMovie("");
    };

    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

    
    return (
        <div className={`streamlist-container `}>
            <h2>My Streaming List</h2>
            
            <form onSubmit={addMovie}>
                <input
                    type="text"
                    placeholder="Enter movie name"
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                />
                <button type="submit">➕ Add</button>
            </form>
            <ul >
                {movies.map((m, index) => (
                    <li >
                        {m}
                        <button className="delete-btn" onClick={() => removeMovie(index)}>
                        X
                        </button>
                    </li>                                
                ))}                            
            </ul>
        </div>
    );
}

export default StreamList;

