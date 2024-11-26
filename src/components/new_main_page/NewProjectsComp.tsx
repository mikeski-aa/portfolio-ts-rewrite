import projects from "../../utils/projectData";
import NewProjectCard from "./NewProjectCard";

function NewProjectComp() {
  return (
    <div className="newSection Projects">
      <div className="newProjectsHeading">Projects</div>
      <div className="newProjectCardsContainer">
        {projects.map((item, index) => (
          <NewProjectCard
            key={index}
            heading={item.title}
            text={item.desc}
            isHosted={item.isHosted}
            projectLink={item.projectLink}
            smallPic={item.smallPic}
            skills={item.tech}
            type={item.type}
            feRepo={item.feRepo}
            beRepo={item.beRepo}
          />
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
