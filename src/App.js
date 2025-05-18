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
      if (
        originals.length > 0 &&
        originals[0].item &&
        originals[0].item.length > 0 &&
        originals[0].item[0].results &&
        originals[0].item[0].results.length > 0
      ) {
        let results = originals[0].item[0].results;
        let randomChosen = Math.floor(Math.random() * results.length);
        let chosen = results[randomChosen];
        setFeaturedData(chosen);
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
        setFeaturedData(chosenInfo);

      
      }
    };
    loadAll();
  }, []);

    return (
    <div className="page">
    
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
