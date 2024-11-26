import "../../styles/new_main_design/newpagedesign.css";
import headshot from "../../assets/gif/IMG_252521.png";
import "../../styles/new_main_design/newskills.css";
import "../../styles/new_main_design/newprojects.css";
import Typewriter from "typewriter-effect";
import skills from "../../utils/skillsData";
import NewSkillBox from "./NewSkillBox";
import projects from "../../utils/projectData";
import NewProjectCard from "./NewProjectCard";
import NewContactMe from "./NewContactMe";
import desktopShowcase from "../../assets/gif/desktopShowcase.gif";
import terminalShowcase from "../../assets/gif/terminalShowcase.gif";
import BackgroundParticles from "../BackgroundParticles";

function NewMainPageDesign() {
  // writing out the basic layout before breaking it down into own compoenents and styling individually
  return (
    <div className="newDesignDiv">
      <div className="newSection About">
        <div className="newHeadshotDiv">
          <img
            src={headshot}
            className="headshotImgNew"
            alt="headshot image"
            loading="lazy"
          ></img>
        </div>
        <div className="newAbout content div">
          <div className="newAboutHeading">Michal Nowak&nbsp;</div>
          <div className="newAboutSubHeading">
            Fullstack developer based in Berlin&nbsp;
          </div>
          <div className="newAboutText">
            <Typewriter
              options={{ delay: 0.2 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "I'm a self-taught fullstack developer who's always been drawn to the creative and technical aspects of building websites. I love the challenge of turning ideas into reality, and I'm constantly learning new things to stay on top of the latest trends in web development."
                  )
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <div className="newSection Skills">
        <div className="scrollHolder">
          {skills.map((item, index) => (
            <NewSkillBox key={index} name={item.name} />
          ))}
        </div>
      </div>
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
      <div className="newSection Contact">
        <div className="newProjectsHeading">Contact</div>
        <NewContactMe />
      </div>
      <div className="mobile">
        <BackgroundParticles />
        <div className="mobileTextHeader">Hey there mobile device user!</div>
        <div className="mobileMainText">
          Check out the desktop version to see the full version of my website
          which includes:
        </div>

        <div className="imagesGifs">
          <div className="firstImgText">
            Interactive explorer and page windows
          </div>
          <img
            src={desktopShowcase}
            className="desktopShowcase"
            alt="dekstop showcase image"
            loading="lazy"
          ></img>
          <div className="firstImgText two">Interactive terminal</div>
          <img
            src={terminalShowcase}
            className="desktopShowcase"
            alt="desktop showcase terminal"
            loading="lazy"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default NewMainPageDesign;
