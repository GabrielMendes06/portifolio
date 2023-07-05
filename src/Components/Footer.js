import IconG from "./Gstyle"
import Linkedin from "../imagens/linkedin.png"
import Instagram from "../imagens/instagram.png"
import Email from "../imagens/o-email.png"
import Github from "../imagens/github.png"


export default Footer

function Footer() {
    return(       
            <div className="mid-background" style={{paddingBottom: "90px"}}>              
                <div className="colums-centered">
                    <IconG wsize={100}/>
                </div>
                <div className="container-narrow">
                    <p className="texto-footer">Vivendo, aprendendo e subindo de nível um dia de cada vez.</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/gabrielmendes7/" target="blank" className="button-medium"><img src={Linkedin} className="icon-small"></img></a>
                    <a href="https://github.com/GabrielMendes06" target="blank" className="button-medium"><img src={Github} className="icon-small"></img></a>
                    <a href="mailto:gabriel.mendes17@outlook.com" target="blank" className="button-medium"><img src={Email} className="icon-small"></img></a>
                    <a href="https://www.instagram.com/mendezz_gabriel/" target="blank" className="button-medium"><img src={Instagram} className="icon-small"></img></a>
                </div>
                <div className="copyright">
                    <p className="textcopy">Criado por Gabriel Mendes &copy; </p>
                </div>
            </div>
        
    )
}