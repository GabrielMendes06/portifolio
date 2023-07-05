import letraG from "../imagens/letra-g.png"
export default IconG

function IconG({ wsize, borderR}) {
    return(
        <a href="index.html">
            <img src={letraG} id="g" width={wsize} style={{backgroundColor: "rgb(146, 45, 228)"}}>

            </img>
        </a>
    )
}