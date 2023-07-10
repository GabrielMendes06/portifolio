export default ContainerCartoon

function ContainerCartoon(props) {
    return(
      <section id="cabecalho-computer">       
          <div id="computer-background">
            <img src={props.img} id="cartoon"></img>
          </div>       
      </section>
    )
}