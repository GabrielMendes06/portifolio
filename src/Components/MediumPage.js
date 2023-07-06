import { useState } from "react";
import MidlePurple from "./MidlePurple";

function MediumPage() {

    const imgBox = document.querySelector("#img-box")
    const [display, setDisplay] = useState("0")

    function TransitionPage() {
        setDisplay("0.85")
    }

    function PageTransition() {
        setDisplay("0")
    }

    return(
        <div>
           <MidlePurple
            title="Meus Projetos!"
            paragraph="Ultimamente venho pesquisando sobre projetos para desenvolver e adicionar ao meu portifólio, sei que é um passo importante para quem ainda é carente de experiência profissional comprovada, então, aqui adicionarei meus projetos que serão disponibilizados quando eu os finalizar. Enquanto eu não os tenho disponível, fique a vontade para desfrutar da minha pequena Pokedex!"
            />
            <section className="section-startups">
                <div className="container-narrow" id="container-poke" onMouseEnter={TransitionPage} onMouseLeave={PageTransition}>
                        <div className="box" id="box-poke">
                            <div className="site-image">
                                {/* <img src={Pokedex} id="pokedex"></img> */}
                                <div className="link-box" style={{opacity: display, transition: "all 0.5s"}}>
                                    <h1 className="white-title" id="title-poke">Esse é o meu projeto com APIs do pokemon</h1>
                                    <a href="https://gabrielmendes06.github.io/pokeapi/" className="link" target="blank">Ir para Website</a>
                                </div>
                            </div>                           
                        </div>
                </div>
            </section>
            <div className="colums-centered">
                <div className="colum-text" style={{paddingTop: "250px", paddingBottom: "250px"}}>
                    <h1 className="titles-black">Achou o visual do meu portifólio agradável ?</h1>
                    <p className="text-p" style={{margin: "40px"}}>Ficarei muito feliz e grato em ter uma oportunidade de trabalhar com você!</p>
                    <a href="https://www.linkedin.com/in/gabrielmendes7/" className="purple-but" target="blank" style={{margin: "auto", padding: "10px"}}>Começar uma conversa</a>
                </div>
            </div>
        </div>
    )
}

export default MediumPage