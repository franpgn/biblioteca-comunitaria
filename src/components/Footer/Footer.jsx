import React from "react";
import LogoPampec from "../../assets/pampec-mini.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        Desenvolvido por 
        <img src={LogoPampec} alt="Logo da Pampec com a letra P" />
        ampec Jr. | Política de Privacidade
      </p>
    </footer>
  );
};

export default Footer;
