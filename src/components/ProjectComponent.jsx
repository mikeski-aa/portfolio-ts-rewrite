import "../styles/projectcomponent.css";

function ProjectComponent(props) {
  // this component should conditionally render depending on input;

  return (
    <div className="projectContainer">
      <div className="projectHeading">{props.title}</div>
      <div className="projectText">{props.desc}</div>
      <div className="projectLink">
        {props.isHosted ? (
          <a target="_blank" href={props.projectLink} className="projectLink">
            Project link
          </a>
        ) : (
          <span className="notHosted">Project not currently hosted</span>
        )}
      </div>
      <div className="repoLink">
        {props.type === "Frontend" || props.type === "Backend" ? (
          <a href={props.repoLink} className="projectLink">
            {props.type} repo
          </a>
        ) : null}
        {props.type === "Fullstack" ? (
          <div className="multiLink">
            <a href={props.feRepo} className="projectLink">
              Frontend repo
            </a>
            <a href={props.beRepo} className="projectLink">
              Backend repo
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectComponent;
