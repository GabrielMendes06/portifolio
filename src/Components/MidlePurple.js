export default MidlePurple;

function MidlePurple(props) {
  return (
    <section className="mid-background">
      <div id="container-mid">
        <div className="colums-centered">
          <div className="colum-text">
            <h1 className="white-title">{props.title}</h1>
            <p className="white-p">{props.paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
