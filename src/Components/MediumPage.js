import { useState } from "react";
import MidlePurple from "./MidlePurple";
import Projetos from "./Projetos";

function MediumPage() {
  const imgBox = document.querySelector("#img-box");


  return (
    <div>
      <MidlePurple
        title="Meus Projetos!"
        paragraph="Ultimamente venho pesquisando sobre projetos para desenvolver e adicionar ao meu portifólio, sei que é um passo importante para quem ainda é carente de experiência profissional comprovada, então, aqui adicionarei meus projetos que serão disponibilizados quando eu os finalizar. Enquanto eu não os tenho disponível, fique a vontade para desfrutar da minha pequena Pokedex!"
      />
      <section className="section-startups">
       <Projetos 
       description={"Esse é o meu projeto com APIs do pokemon"}
       idProjeto={"projeto-poke"}
       /> 
       <Projetos 
       description={"Projeto em andamento..."}
       idProjeto={"projeto-login"}
       />
      </section>
      <div className="colums-centered">
        <div
          className="colum-text"
          style={{ paddingTop: "50px", paddingBottom: "250px" }}
        >
          <h1 className="titles-black">
            Achou o visual do meu portifólio agradável ?
          </h1>
          <p className="text-p" style={{ margin: "40px" }}>
            Ficarei muito feliz e grato em ter uma oportunidade de trabalhar com
            você!
          </p>
          <a
            href="https://wa.me/5511977829550"
            className="purple-but"
            target="blank"
            style={{ margin: "auto", padding: "10px" }}
          >
            Começar uma conversa
          </a>
        </div>
      </div>
    </div>
  );
}

export default MediumPage;
