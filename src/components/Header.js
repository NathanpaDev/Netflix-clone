import React from "react";
import "./Header.css";
import myflixLogo from "../assets/myflix2.png"; // ajuste o caminho se necessário


const Header = ({black}) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src={myflixLogo} alt="My Flix" title="My Flix" />
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
