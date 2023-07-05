import PurpleTecnology from "../imagens/cartoon.png";
import Support from "../imagens/support.png";
import Dev from "../imagens/dev.png";

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
      <section className="mid-background">
        <div id="container-mid">
          <div className="colums-centered">
            <div className="colum-text">
              <h1 className="white-title">
                Olá, me chamo Gabriel, prazer em conhece-lo!
              </h1>
              <p className="white-p">
                Comecei a estudar programação no final de 2022, com facilidade em aprender e desejo em adquirir conhecimento, construi uma base sólida o
                suficiente para desenvolver sistemas de forma sutil, eficiente e limpa.
                Inclusive, apresento-lhe algumas das minhas habilidades através
                da construção e design desta página, meu portifólio!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-startups">
        <div className="container-narrow">
          <div className="box">
            <div id="content-skills">
              <div className="colums-skills" id="border2">
                <div>
                  <img src={Dev} className="icon-skills"></img>
                </div>
                <h1 className="colum-title">Developer</h1>
                <p>
                  Gosto de criar códigos do zero, mantendo sua formatação sempre
                  limpa e de fácil entendimento.
                </p>
                <h2 className="second-title">Ferramentas de desenvolvedor:</h2>
                <p>Git, Vercel, GitHub, Postman</p>
                <h2 className="second-title">Linguagens:</h2>
                <ul className="list-skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>PowerApp(M365)</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="colums-skills" id="border1">
                <div>
                  <img src={Support} className="icon-skills"></img>
                </div>
                <h1 className="colum-title">Suporte Técnico</h1>
                <p style={{maxWidth: "560px"}}>
                  Sempre busco maneiras diretas para automatizar a solução dos
                  problemas, realizando minhas tarefas com auto desempenho.
                </p>
                <h2 className="second-title">Habilidades de infra:</h2>
                <p>Redes, Switchs, TPC/IP</p>
                <h2 className="second-title">
                  Conhecimento de hardwares e softwares:
                </h2>
                <ul className="list-skills">
                  <li>Instalação de impressoras</li>
                  <li>Montagem de computadores</li>
                  <li>Atualização de softwares e hardwares</li>
                  <li>Sistemas operacionais</li>
                  <li>Migração de rede</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
