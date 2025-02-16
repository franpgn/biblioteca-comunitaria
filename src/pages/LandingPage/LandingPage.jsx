import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LogoBltc from "../../assets/Logo.png";
import Mail from "../../assets/mail.svg";
import Wpp from "../../assets/Wpp.svg";
import Footer from "../../components/Footer/Footer";
import Background from "../../assets/bg-landingpage.jpg";
import { getBooksLandingPage } from "../../services/BookService";
import BookCard from "../../components/BookCard/BookCard";

const LandingPage = () => {

  const [relevanceBooks, setRelevanceBooks] = useState([]);
  const [newestBooks, setNewestBooks] = useState([]);
  const [mostRequestedBooks, setMostRequestedBooks] = useState([]);

  useEffect(() => {
    getBooksLandingPage("Harry potter", 0, "relevance").then((data) => {
      setRelevanceBooks(data);
    });
    getBooksLandingPage("thriller", 0, "newest").then((data) => {
      setNewestBooks(data);
    });
    getBooksLandingPage("Lord of Rings", 0, "relevance").then((data) => {
      setMostRequestedBooks(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container-titulo">
        <h1
          className="w-full h-[450px] m-0 flex items-center justify-center text-white text-[48px]"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center 95%",
            backgroundRepeat: "no-repeat",
          }}
        >
          OS LIVROS MAIS FAMOSOS VOCÊ ENCONTRA AQUI
        </h1>
      </div>
      <div className="flex flex-col items-baseline m-0 p-0 px-5 h-screen">
        <div className="flex flex-col items-center justify-center px-[270px]">
          <h2 className="text-4xl">Sobre Nós</h2>
          <p className="text-[24px]">
            A Biblioteca Comunitária é um espaço de aprendizado, cultura e
            encontro para toda a comunidade. Acreditamos no poder transformador
            da leitura e no acesso ao conhecimento como um direito fundamental.
            Aqui, cada livro tem uma história para contar e cada visitante tem
            um espaço para descobrir. Seja para estudar, se inspirar ou
            simplesmente relaxar com uma boa leitura, a Biblioteca Comunitária
            está de portas abertas para você! Venha nos visitar e faça parte
            dessa jornada literária!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-[270px]">
          <h2 className="text-4xl">Instruções para alugar Livros</h2>
          <div className="flex items-start justify-center">
            <p className="text-[24px]">
              1. Faça login ou Inscreva-se - Se já possui uma conta, clique em{" "}
              <strong>"Login"</strong> e informe seu e-mail e senha. - Caso
              ainda não tenha conta, clique em <strong>"Inscreva-se"</strong> e
              preencha os dados necessários. <br />
              <br />
              2. Encontre o livro desejado - Acesse a seção{" "}
              <strong>"Catálogo"</strong> e explore as categorias para localizar
              o livro que deseja alugar. <br />
              <br />
              3. Verifique a disponibilidade - Confira se o livro está
              disponível para aluguel e leia as informações sobre prazos e
              condições. <br />
              <br />
            </p>
            <p className="text-[24px]">
              4. Solicite o aluguel - Clique no botão <strong>"Alugar"</strong>{" "}
              e siga as instruções para confirmar a solicitação.
              <br />
              <br />
              5. Finalize o processo - Caso seja necessário, realize o pagamento
              conforme as opções disponíveis. - Após a confirmação, você
              receberá as informações sobre o acesso ou retirada do livro.
            </p>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-4xl">Livros Destaques</h2>
            <div className="flex justify-around">
              <div></div>
              <BookCard bookList={relevanceBooks} />
            </div>
        </div>
        <div className="w-full">
          <h2 className="text-4xl">Livros mais procurados</h2>
          <div className="flex justify-around">
          <div></div>
          <BookCard bookList={mostRequestedBooks} />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-4xl">Pré-Lançamentos</h2>
          <div className="flex justify-around">
          <div></div>
          <BookCard bookList={newestBooks} />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-4xl">Onde nós estamos</h2>
          <div className="flex justify-around">
            <div className="flex flex-col">
              <p className="text-lg font-bold">
                Rua XXX - Bairro X, Bagé
                <br />
                Rio Grande do Sul, Brasil
                <br />
                CEP: 12345-678
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-3xl m-0">Localização no Google Maps</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65897.86767664432!2d-54.0860367!3d-31.3172746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9505df7561ae627b%3A0xc1051c6b4afaa779!2sUniversidade%20Federal%20do%20Pampa!5e1!3m2!1spt-BR!2sbr!4v1739195612435!5m2!1spt-BR!2sbr"
                className="w-[670px] h-[330px]"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="bg-[#FFF0D7] flex items-center justify-around mt-[1800px]">
        <div>
          <img
            src={LogoBltc}
            alt="Logo da Biblioteca Comunitária"
            className="w-[240px] h-[120px]"
          />
        </div>
        <div className="flex items-start  list-none p-0 gap-5">
          <div className="flex flex-col items-start list-none p-0 gap-1">
            <h3 className="text-3xl">Informações</h3>
            <ul className="p-0">
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-xl no-underline text-black transition-colors duration-400 hover:text-[#01764C]"
                >
                  Política de Troca
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-xl no-underline text-black transition-colors duration-400 hover:text-[#01764C]"
                >
                  Política de Privacidade
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-xl no-underline text-black transition-colors duration-400 hover:text-[#01764C]"
                >
                  Segurança
                </a>
              </li>
              <li className="flex items-center">
                <a className="text-xl no-underline text-black transition-colors duration-400 hover:text-[#01764C]">
                  #VemLerComAGente
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start list-none p-0 gap-1">
            <h3 className="text-3xl ">Fale conosco</h3>
            <ul className="p-0">
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-xl no-underline text-black transition-colors duration-400 hover:text-[#01764C]"
                >
                  <img
                    src={Mail}
                    alt="Icone de Email"
                    className="w-[20px] h-[20px] mr-2 align-middle"
                  />
                  Sac@Biblioteca.com.br
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-xl no-underline text-black transition-colors duration-400 hover:text-[#01764C]"
                >
                  <img
                    src={Wpp}
                    alt="Icone do WhatsApp"
                    className="w-[20px] h-[20px] mr-2 align-middle"
                  />
                  (XX) 9 7070-7070
                </a>
              </li>
              <li className="flex items-center">
                <a className="text-xl no-underline text-black transition-colors duration-400 hover:text-[#01764C]">
                  Atendimento de segunda a sexta-feira, das 8 ás 17h (exceto
                  feriados)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
