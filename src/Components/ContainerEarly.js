
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
              <a href="https://drive.google.com/file/d/1g_fQVu5XVjJY5L-V4B-IvoBw5XfP1peB/view?usp=drive_link" className="purple-but" target="blank" style={{marginTop: "20px"}}>CV - Gabriel Mendes</a>
            </div>             
    )
}