import React from "react"
import Home from "../imagens/home.png"

function BackToTopButton() {

    const scrollUp = ()  => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        })
    }

    return(
        <div className="colums-centered">
                <img 
                src={Home} 
                className="icon-home"
                id="backToTop"
                onClick={scrollUp} 
                >
                </img>            
        </div>
    )
}

export default BackToTopButton