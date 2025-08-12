import React,{useState} from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const MovieRow = ({ title, items }) => {

  const [scrollX, setScrollX] = useState(0);
 
  const movieArray =
    items && items.length > 0 && items[0].results ? items[0].results : [];

    const handleLeftClick = () => {
     let minScrollX = scrollX + Math.round(window.innerWidth / 2);
     setScrollX(minScrollX);
     if (minScrollX > 0) {
       setScrollX(0);
     }
    };

    const handleRightClick = () => {
      let x = scrollX - Math.round(window.innerWidth / 2);
      let listW = movieArray.length * 150;
      // Calcula o limite para que o último item não fique cortado
      let maxScroll = (window.innerWidth - listW) -60;
      if (maxScroll > 0) maxScroll = 0; // Evita scroll se a lista for menor que a tela
      if (x < maxScroll) {
        x = maxScroll;
      }
      setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftClick}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightClick}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{ 
          marginLeft: scrollX,
          width: movieArray.length * 150
        }}>
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
