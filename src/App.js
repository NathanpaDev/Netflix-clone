import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";


const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  console.log("movieList:", movieList);

  return (
    <div className="page">
      <header>
        <h1>Netflix</h1>
      </header>
      <main>
        <section className="lists">
          {movieList.length === 0 && <div>Carregando...</div>}
          {movieList.map((item) => (
            <MovieRow
              key={item.slug || item.title}
              title={item.title}
              items={item.item} // <-- Corrigido aqui!
            />
          ))}
        </section>
      </main>
      <footer>
        <p>Rodapé básico</p>
      </footer>
    </div>
  );
};

export default App;
