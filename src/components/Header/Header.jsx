import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex bg-[#bdad80] items-center justify-between px-4">
            <div>
                <img src={Logo} alt="Logo da Biblioteca Comunitária" className="w-[150] h-[75px]"/>
            </div>
            <div className="flex items-center gap-4 mx-auto">
                <Link to="/" className="text-[#363435] no-underline font-bold text-lg transition-colors duration-400 p-1.5 rounded-md hover:text-white hover:bg-[#01764C]">Início</Link>
                <Link to="/booklist" className="text-[#363435] no-underline font-bold text-lg transition-colors duration-400 p-1.5 rounded-md hover:text-white hover:bg-[#01764C]">Catálogo</Link>
                <Link to="/" className="text-[#363435] no-underline text-lg font-bold transition-colors duration-400 p-1.5 rounded-md hover:text-white hover:bg-[#01764C]">Quem Somos</Link>
                <Link to="/" className="text-[#363435] no-underline text-lg font-bold transition-colors duration-400 p-1.5 rounded-md hover:text-white hover:bg-[#01764C]">Contato</Link>
            </div>
        </header>
    );
}

export default Header;