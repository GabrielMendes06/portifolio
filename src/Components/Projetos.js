import { useState } from "react";
import Redirect from "./Redirect";

function Projetos(props) {
  const [display, setDisplay] = useState("0");

  function TransitionPage() {
    setDisplay("0.85");
  }

  function PageTransition() {
    setDisplay("0");
  }

  return (
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
            {props.component}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
