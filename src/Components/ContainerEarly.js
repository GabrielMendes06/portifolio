
export default ContainerEarly

function ContainerEarly(props) {
    return(              
            <div id="colums">
              <h1 className="titles-black" id="typing-animation">
                {props.title}
              </h1>
              <p className="text-p" id="typing-animation-p">
                {props.paragraph}
              </p>
            </div>             
    )
}