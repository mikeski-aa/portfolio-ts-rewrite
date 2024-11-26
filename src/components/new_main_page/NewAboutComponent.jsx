import Typewriter from "typewriter-effect";
import "../../styles/new_main_design/newaboutstyle.css";
import headshot from "../../assets/gif/IMG_252521.png";

function NewAboutComp() {
  return (
    <div className="newSection About">
      <div className="newHeadshotDiv">
        <img
          src={headshot}
          className="headshotImgNew"
          alt="headshot image"
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
  );
}

export default NewAboutComp;
