import PurpleTecnology from "../imagens/cartoon.png";
import Support from "../imagens/support.png";
import Dev from "../imagens/dev.png";
import MidlePurple from "./MidlePurple";
import SkillContainer from "./SkillContainer";

function Main() {
  return (
    <main id="corpo">
      <div id="cabecalho">
        <div id="container">
          <div id="colums-is-centered">
            <div id="colums">
              <h1 className="titles-black">
                Desenvolvedor Frontend
              </h1>
              <p className="text-p">
                Eu construo sistemas e designs codificando sempre da maneira mais limpa possível, simplesmente amo o
                que faço.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section id="cabecalho-computer">
        <div id="container">
          <div id="computer-background">
            <img src={PurpleTecnology} id="cartoon"></img>
          </div>
        </div>
      </section>
      <MidlePurple 
      title="Olá, me chamo Gabriel, prazer em conhece-lo!"
      paragraph="Comecei a estudar programação no final de 2022, com facilidade em aprender e desejo em adquirir conhecimento, construi uma base sólida o
      suficiente para desenvolver sistemas de forma sutil, eficiente e limpa.
      Inclusive, apresento-lhe algumas das minhas habilidades através
      da construção e design desta página, meu portifólio!"
      />
      <section className="section-startups">
        <div className="container-narrow">
          <div className="box">
            <div id="content-skills">
              <SkillContainer 
              img={Dev} 
              title={"Developer"}
              paragraph={"Gosto de criar códigos do zero, mantendo sua formatação sempre limpa e de fácil entendimento."}
              subtitle={"Ferramentas de desenvolvedor:"}
              paragraph1={"Git, Vercel, GitHub, Postman"}
              subtitle1={"Linguagens:"}
              skills={["HTML", "CSS", "JavaScript", "React.js", "Next.js", "PowerApp(M365)", "Bootstrap"]}
              bRight={"1px solid rgba(211, 206, 206, 0.575)"}
              />
              <SkillContainer
              img={Support}
              title={"Suporte Técnico"}
              paragraph={"Sempre busco maneiras diretas para automatizar a solução dos problemas, realizando minhas tarefas com auto desempenho."}
              subtitle={"Habilidades de infra:"}
              paragraph1={"Redes, Switchs, TCP/IP"}
              subtitle1={"Conhecimento de hardwares e softwares:"}
              skills={["Instalação de impressoras", "Montagem de computadores", "Atualização de softwares e hardwares", "Sistemas operacionais", "Migração de rede"]} 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;