import React from "react";
import "./MovieRow.css";

const MovieRow = ({ title, items }) => {
  console.log("MovieRow items:", items);
  // Verifica se items existe e tem pelo menos um elemento
  const movieArray =
    items && items.length > 0 && items[0].results ? items[0].results : [];

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {movieArray.length > 0
            ? movieArray.map((item) => (
                <div key={item.id} className="movieRow--item">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title || item.title}
                    key={item.id}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
