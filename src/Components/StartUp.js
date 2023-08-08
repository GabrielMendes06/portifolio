import SkillContainer from "./SkillContainer"
import Dev from "../imagens/dev.png"
import Support from "../imagens/support.png"
export default StartUp

function StartUp() {
    return(
    <section className="section-startups">
        <div className="container-narrow">
          <div className="box">
            <div id="content-skills">
              <SkillContainer 
              img={Dev} 
              title={"Developer"}
              paragraph={"Gosto de criar códigos do zero, mantendo sua formatação sempre limpa e de fácil entendimento."}
              subtitle={"Ferramentas de desenvolvedor:"}
              paragraph1={"Git, Vercel, GitHub, Postman, Insomnia"}
              subtitle1={"Linguagens:"}
              skills={["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "MySQL", "Microsoft 365"]}
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
    )
}