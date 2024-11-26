import TestImage from "../../assets/desktoppics/main-front.png";
import TestImageOne from "../../assets/desktoppics/loginDesk.png";
import { useEffect, useState } from "react";
import {
  desktopArray,
  newAssetArray,
  mobileArray,
} from "../../utils/imageImport";

function NewProjects() {
  const [imgIndex, setImgIndex] = useState(0);
  const imgArrDesktop = desktopArray();
  const imgArrMobile = mobileArray();
  const imgNewArr = newAssetArray();
  const [fade, setFade] = useState(true);

  let test = {
    1: "one",
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      if (imgIndex == imgNewArr.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex((imgIndex) => imgIndex + 1);
      }
    }, 7000);

    return () => clearInterval(timeout);
  }, [imgIndex]);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => {
      setFade(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [imgIndex]);

  // for now im going to leave these terrible transtions in, but THEY NEED TO GET FIXED... IT LOOKS AWFUL.

  return (
    <div className="newProjectsContainer">
      <div className="newProjectDiv">
        <div className="newProjHeading">Test Text Here</div>
        <div className="newProjImgContainer">
          <img
            src={imgNewArr[imgIndex]}
            className={`projImg ${fade ? "new" : ""} directsc`}
            loading="lazy"
            alt="project image small"
          ></img>
        </div>

        <div className="newProjDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatem
          dolorum eveniet deleniti non eaque iste provident magni quae! Quos,
          esse blanditiis. Exercitationem blanditiis asperiores praesentium iure
          necessitatibus, fuga minus ullam sint dolorum atque quo commodi
          ducimus, iusto reprehenderit! Pariatur quo eum tenetur atque iure odio
          ea accusantium natus omnis.d
        </div>
      </div>
    </div>
  );
}

export default NewProjects;
