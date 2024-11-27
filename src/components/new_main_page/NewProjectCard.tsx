import { useState } from "react";
import "../../styles/new_main_design/newprojectcard.css";
import NewSkillBoxForCard from "./NewSkillBoxForCard";
import Internet from "../../assets/bwicons/internet.svg?react";
import Github from "../../assets/bwicons/github2.svg?react";
import { IProjects, ITechStack } from "../../interfaces";

function NewProjectCard({ project }: { project: IProjects }) {
  const [showDesc, setShowDesc] = useState(false);

  const handleMouseEnter = () => {
    setShowDesc(true);
  };

  const handleMouseExit = () => {
    setShowDesc(false);
  };

  return (
    <div
      className="newProjectCard"
      onMouseOver={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseExit()}
    >
      {/* <div className="newCardHeading">{props.heading}</div> */}
      <div className={`newProjectDesc ${showDesc}`}>
        <p className="projectHeading">{project.title}</p>
        <p className="projText">{project.desc}</p>
        <div className="projectLinksDiv">
          <button
            className="btnCard"
            onClick={() => window.open(project.projectLink, "_blank")}
          >
            <Internet className="projectLinkIcon" />
            Project site
          </button>
          <button
            className="btnCard"
            onClick={() => window.open(project.feRepo, "_blank")}
          >
            <Github className="projectLinkIcon" />
            Frontend Repo
          </button>
          {project.type != "Fullstack" ? null : (
            <button
              className="btnCard"
              onClick={() => window.open(project.beRepo, "_blank")}
            >
              <Github className="projectLinkIcon" />
              Backend Repo
            </button>
          )}
        </div>
      </div>
      <div className="newProjectImg">
        <img
          className="cardImgSmall"
          src={project.smallPic}
          alt="project preview image"
          loading="lazy"
        />
      </div>
      <div className="techCard">
        {project.tech.map((item: ITechStack, index: number) => (
          <NewSkillBoxForCard key={index} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default NewProjectCard;
