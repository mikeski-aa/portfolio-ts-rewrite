import { IProjects } from "../../interfaces";
import projects from "../../utils/projectData";
import NewProjectCard from "./NewProjectCard";

function NewProjectComp() {
  return (
    <div className="newSection Projects">
      <div className="newProjectsHeading">Projects</div>
      <div className="newProjectCardsContainer">
        {projects.map((item: IProjects, index: number) => (
          <NewProjectCard key={index} project={item} />
        ))}
      </div>
      <div className="moreProjectsBtn">
        <a
          href="https://github.com/mikeski-aa"
          target="_blank"
          className="ghubLink"
        >
          More projects
        </a>
      </div>
    </div>
  );
}

export default NewProjectComp;
