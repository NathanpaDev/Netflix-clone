import React from "react";
import "./Header.css";


const Header = ({black}) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="https://pt.m.wikipedia.org/wiki/Ficheiro:Netflix_2015_logo.svg" alt="My Flix" title="My Flix" />
        </a>
      </div>
      
      <div className="header--user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar do usuário"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
