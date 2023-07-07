export default ContainerEarly

function ContainerEarly(props) {
    return(
        <div id="container">
          <div id="colums-is-centered">
            <div id="colums">
              <h1 className="titles-black">
                {props.title}
              </h1>
              <p className="text-p">
                {props.paragraph}
              </p>
            </div>
          </div>
        </div>
    )
}