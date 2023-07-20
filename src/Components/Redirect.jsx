function Redirect(props) {
    return(
        <a 
        href={props.url}
        className="link"
        target="blank"
        >
            Ir para Website
        </a>
    )
}

export default Redirect