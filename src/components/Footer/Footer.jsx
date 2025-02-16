import React from "react";
import LogoPampec from "../../assets/pampec-mini.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center items-center p-2">
      <p className="m-0 text-base text-white">
        Desenvolvido por 
        <img
        className="w-4 h-5 ml-1 align-middle" 
        src={LogoPampec} alt="Logo da Pampec com a letra P" />
        ampec Jr. | Política de Privacidade
      </p>
    </footer>
  );
};

export default Footer;
