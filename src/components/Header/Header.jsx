import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo da Biblioteca Comunitária" className="logo"/>
            </div>
            <div className="menu">
                <Link to="/">Início</Link>
                <Link to="/booklist">Catálogo</Link>
                <Link to="/">Quem Somos</Link>
                <Link to="/">Contato</Link>
            </div>
        </header>
    );
}	

export default Header;