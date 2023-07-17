import { useState } from "react";

function Projetos(props) {

    const [display, setDisplay] = useState("0");

    function TransitionPage() {
      setDisplay("0.85");
    }
  
    function PageTransition() {
      setDisplay("0");
    }

    return(
        <div
          className="container-poke"
          onMouseEnter={TransitionPage}
          onMouseLeave={PageTransition}
        >
          <div className="box" id="box-poke">
            <div className="site-image" id={props.idProjeto}>
              {/* <img src={Pokedex} id="pokedex"></img> */}
              <div
                className="link-box"
                style={{ opacity: display, transition: "all 0.5s" }}
              >
                <h1 className="white-title" id="title-poke">
                  {props.description}
                </h1>
                <a
                  href="https://gabrielmendes06.github.io/pokeapi/"
                  className="link"
                  target="blank"
                >
                  Ir para Website
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Projetos