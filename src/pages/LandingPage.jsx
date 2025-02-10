import React from "react";
import Header from "../components/Header/Header";
import LogoBltc from "../assets/Logo.png";
import "./LandingPage.css";
import Mail from "../assets/mail.svg";
import Wpp from "../assets/Wpp.svg";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="container-titulo">
        <h1>Título</h1>
      </div>
      <div className="container-conteudo">
        <div className="container-conteudo-sobre">
          <h2>Seção sobre nós</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="container-conteudo-sobre">
          <h2>Instruções</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="container-conteudo-principal">
          <h2>Livros Destaques</h2>
        </div>
        <div className="container-conteudo-principal">
          <h2>Livros mais procurados</h2>
        </div>
        <div className="container-conteudo-principal">
          <h2>Pré-Lançamentos</h2>
        </div>
        <div className="container-conteudo-principal">
          <h2>Onde nós estamos</h2>
          <div className="conteudo-principal-ondeestamos">
            <div>
              <p>
                Rua XXX - Bairro X, Bagé<br/> 
                Rio Grande do Sul, Brasil<br/> 
                CEP: 12345-678
              </p>
            </div>
            <div>
              <h3>Localização no Google Maps</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65897.86767664432!2d-54.0860367!3d-31.3172746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9505df7561ae627b%3A0xc1051c6b4afaa779!2sUniversidade%20Federal%20do%20Pampa!5e1!3m2!1spt-BR!2sbr!4v1739195612435!5m2!1spt-BR!2sbr"
                className="ondeestamos-mapa"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container-conteudo-contato">
        <div>
          <img
            src={LogoBltc}
            alt="Logo da Biblioteca Comunitária"
            className="contato-logo"
          />
        </div>
        <div className="conteudo-contato-infos">
          <h3>Informações</h3>
          <ul>
            <li>
              <a href="#">Política de Troca</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Segurança</a>
            </li>
            <li>
              <a>#VemLerComAGente</a>
            </li>
          </ul>
        </div>
        <div className="conteudo-contato-infos">
          <h3>Fale conosco</h3>
          <ul>
            <li>
              <a href="#">
                <img
                  src={Mail}
                  alt="Icone de Email"
                  className="contato-sac-ico"
                />
                Sac@Biblioteca.com.br
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={Wpp}
                  alt="Icone do WhatsApp"
                  className="contato-sac-ico"
                />
                (XX) 9 7070-7070
              </a>
            </li>
            <li>
              <a>
                Atendimento de segunda a sexta-feira, das 8 ás 17h (exceto
                feriados)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
