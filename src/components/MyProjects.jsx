import { useState } from "react";
import "../styles/myprojects.css";
import OdinbookCarousel from "./OdinbookCarousel";
import ProjectComponent from "./ProjectComponent";
import projects from "../utils/projectData";
import ExportLine from "./ExportLine";
import CodeComponent from "./CodeComponent";

function MyProjects() {
  return (
    <div className="myProjectsComponent">
      <CodeComponent
        firstImport="OdinbookCarousel"
        firstImportLocation={`"./OdinbookCarousel"`}
        styleImportLink={`"../styles/myprojects.css"`}
        functionName="My_projects"
        rLine="243"
      />
      <div className="myProjectsTitle">
        <h2>My_projects</h2>
      </div>
      <div className="myProjectsContainer">
        <OdinbookCarousel />

        <div className="smallerProjects">
          {projects.map((item, index) => (
            <ProjectComponent
              key={index}
              title={item.title}
              desc={item.desc}
              projectLink={item.projectLink}
              repoLink={item.repoLink}
              feRepo={item.feRepo}
              beRepo={item.beRepo}
              type={item.type}
              isHosted={item.isHosted}
            ></ProjectComponent>
          ))}
        </div>
      </div>
      <ExportLine text="My_projects" top="270" mid="271" bot="273" />
    </div>
  );
}

export default MyProjects;
