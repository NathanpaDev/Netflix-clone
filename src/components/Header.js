import React from "react";
import "./Header.css";
import netflixLogo from "../assets/Netflix_logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src={netflixLogo} alt="Netflix" />
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
