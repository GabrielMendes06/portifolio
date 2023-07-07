import letraG from "../imagens/letra-g.png"
export default IconG

function IconG({ wsize, borderR}) {
    return(
        <a href="index.html">
            <img src={letraG} className="g" width={wsize}>

            </img>
        </a>
    )
}