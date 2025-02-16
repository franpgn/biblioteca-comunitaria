import React from "react";
import Logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const handleScrollQuemSomos = () => {
        const quemSomosElement = document.getElementById('quem-somos');
        if (quemSomosElement) {
            quemSomosElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleScrollContato = () => {
        const contatoElement = document.getElementById('contato');
        if (contatoElement) {
            contatoElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <header className="flex bg-[#bdad80] items-center justify-between px-4">
            <div>
                <img src={Logo} alt="Logo da Biblioteca Comunitária" className="w-[150] h-[75px]"/>
            </div>
            <div className="flex items-center gap-4 mx-auto">
                <Link to="/" className={`text-[#363435] no-underline text-lg font-bold transition-colors duration-400 p-1.5 rounded-md hover:text-white hover:bg-[#01764C] ${location.pathname === '/' ?  'bg-[#01764C] text-white'  :  'bg-transparent' }`}>Início</Link>
                <Link to="/booklist" className={`text-[#363435] no-underline text-lg font-bold transition-colors duration-400 p-1.5 rounded-md hover:text-white hover:bg-[#01764C] ${location.pathname === '/booklist' ? 'bg-[#01764C] text-white'  :  'bg-transparent'}`}>Catálogo</Link>
                <Link to="/" className="text-[#363435] no-underline text-lg font-bold transition-colors duration-400 p-1.5 rounded-md hover:text-white hover:bg-[#01764C]" onClick={handleScrollQuemSomos}>Quem Somos</Link>
                <Link to="/" className="text-[#363435] no-underline text-lg font-bold transition-colors duration-400 p-1.5 rounded-md hover:text-white hover:bg-[#01764C]" onClick={handleScrollContato}>Contato</Link>
            </div>
            <div className="w-[150px]"></div>
        </header>
    );
}

export default Header;