export default ContainerCartoon

function ContainerCartoon(props) {
    return(
        <section id="cabecalho-computer">
        <div id="container">
          <div id="computer-background">
            <img src={props.img} id="cartoon"></img>
          </div>
        </div>
      </section>
    )
}