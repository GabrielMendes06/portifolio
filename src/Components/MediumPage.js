import { useState } from "react";
import MidlePurple from "./MidlePurple";
import Projetos from "./Projetos";
import Redirect from "./Redirect";

function MediumPage() {
  const imgBox = document.querySelector("#img-box");


  return (
    <div>
      <MidlePurple
        title="Meus Projetos!"
        paragraph="Ultimamente venho pesquisando sobre projetos para desenvolver e adicionar ao meu portifólio, fique a vontade para dar uma olhada nos projetos que venho desenvolvendo logo abaixo!"
      />
      <section className="section-startups">
       <Projetos 
       description={"Esse é o meu projeto com APIs do pokemon"}
       idProjeto={"projeto-poke"}
       component={<Redirect url={"https://gabrielmendes06.github.io/pokeapi/"}/>}
       /> 
       <Projetos 
       description={"Projeto de admnistração com tela de login!"}
       idProjeto={"projeto-login"}
       component={<Redirect url={"https://login-two-mauve.vercel.app/"}/>}
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
