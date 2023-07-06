export default SkillContainer;

function SkillContainer(props) {
  return (
    <div className="colums-skills" style={{ borderRight: props.bRight }}>
      <img src={props.img} className="img-skill"></img>
      <h1 className="colum-title">{props.title}</h1>
      <p>{props.paragraph}</p>
      <h2 className="second-title">{props.subtitle}</h2>
      <p>{props.paragraph1}</p>
      <h2 className="second-title">{props.subtitle1}</h2>
      <ul className="list-skills">
        {props.skills.map((skillsD) => (
          <li>{skillsD}</li>
        ))}
      </ul>
    </div>
  )
}
