/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";


const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o filme em destaque
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
    };
    loadAll();
  }, []);

  console.log("movieList:", movieList);

  return (
    <div className="page">
      <header>
        <h1>SpeedFlix</h1>
      </header>
      {featuredData && <FeaturedMovie item={featuredData} />}
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
