import "../styles/projectbox.css";
import WindowRestoreIcon from "../assets/bwicons/windowrestore.svg?react";
import LineIcon from "../assets/bwicons/linesvg.svg?react";
import Arrow from "../assets/arrow.svg?react";
import Cross from "../assets/bwicons/cross2.svg?react";
import { useEffect, useRef, useState } from "react";
import { desktopArray, mobileArray } from "../utils/imageImport";

// very simple image carousel to go through project images
function OdinbookCarousel() {
  const [carouselSeat, setCarouselSeat] = useState(0);
  const [descShow, setDescShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [btnText, setBtnText] = useState("See details");
  const descRef = useRef(null);

  const imgDesk = desktopArray();
  const imgMobile = mobileArray();

  const handleGoLeft = () => {
    if (carouselSeat === 0) {
      setCarouselSeat(8);
    } else {
      setCarouselSeat(carouselSeat - 1);
    }
  };

  const handleGoRight = () => {
    if (carouselSeat === 8) {
      setCarouselSeat(0);
    } else {
      setCarouselSeat(carouselSeat + 1);
    }
  };

  // function to set active button in carousel navigation
  const activeBtn = (btnNum) => {
    if (btnNum === 0 && carouselSeat === 0) {
      return "active";
    } else if (btnNum === 1 && carouselSeat === 1) {
      return "active";
    } else if (btnNum === 2 && carouselSeat === 2) {
      return "active";
    } else if (btnNum === 3 && carouselSeat === 3) {
      return "active";
    } else if (btnNum === 4 && carouselSeat === 4) {
      return "active";
    } else if (btnNum === 5 && carouselSeat === 5) {
      return "active";
    } else if (btnNum === 6 && carouselSeat === 6) {
      return "active";
    } else if (btnNum === 7 && carouselSeat === 7) {
      return "active";
    } else if (btnNum === 8 && carouselSeat === 8) {
      return "active";
    } else if (btnNum === 9 && carouselSeat === 9) {
      return "active";
    } else {
      return "inactive";
    }
  };

  // handle circle clicks
  const handleCircleClicks = (number) => {
    setCarouselSeat(number);
  };

  // handle desc toggle show
  const handleDescShow = () => {
    if (descShow === false) {
      setDescShow(true);
      setBtnText("Hide details");
    } else {
      setDescShow(false);
      setBtnText("Show details");
    }
  };

  // handle opening modal
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // handle dynamically adjusting the height of description box based on screen height.
  // current issue -> resizing screen with description open causes overflow
  useEffect(() => {
    if (descShow) {
      descRef.current.style.maxHeight = descRef.current.scrollHeight + "px";
    } else {
      descRef.current.style.maxHeight = "0px";
    }
  }, []);

  // handle pressing escape to close modal
  useEffect(() => {
    function handleEscClick(e) {
      if (e.code === "Escape") {
        setModalOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscClick);

    // important to remove event listener on component unmount ontherwise memory leak will be introduced
    return () => {
      document.removeEventListener("keydown", handleEscClick);
    };
  }, []);

  return (
    <div className={"projectBoxContainer"}>
      <div className={`modal ${modalOpen}`}>
        <div className="modalContent">
          <div className="modalTopBar">
            <button className="modalBtn">
              <LineIcon className="winIcons" />
            </button>
            <button className="modalBtn">
              <WindowRestoreIcon className="winIcons" />
            </button>
            <button className="modalBtn close" onClick={handleCloseModal}>
              <Cross className="winIcons crossImg" />
            </button>
          </div>
          <div className="dualImgLarge">
            <img
              src={imgDesk[carouselSeat]}
              className="modalImg desktop"
              loading="lazy"
            ></img>
            <img
              src={imgMobile[carouselSeat]}
              className="modalImg mobile"
              loading="lazy"
            ></img>
          </div>
          <div className="positionButtons">
            <button
              className={`btnx ${activeBtn(0)}`}
              onClick={() => handleCircleClicks(0)}
            ></button>
            <button
              className={`btnx ${activeBtn(1)}`}
              onClick={() => handleCircleClicks(1)}
            ></button>
            <button
              className={`btnx ${activeBtn(2)}`}
              onClick={() => handleCircleClicks(2)}
            ></button>
            <button
              className={`btnx ${activeBtn(3)}`}
              onClick={() => handleCircleClicks(3)}
            ></button>
            <button
              className={`btnx ${activeBtn(4)}`}
              onClick={() => handleCircleClicks(4)}
            ></button>
            <button
              className={`btnx ${activeBtn(5)}`}
              onClick={() => handleCircleClicks(5)}
            ></button>
            <button
              className={`btnx ${activeBtn(6)}`}
              onClick={() => handleCircleClicks(6)}
            ></button>
            <button
              className={`btnx ${activeBtn(7)}`}
              onClick={() => handleCircleClicks(7)}
            ></button>
            <button
              className={`btnx ${activeBtn(8)}`}
              onClick={() => handleCircleClicks(8)}
            ></button>
          </div>
          <div className="modalBtns">
            <button className="arrowBtns" onClick={handleGoLeft}>
              <Arrow className="arrowImgLeft" />
            </button>
            <button className="arrowBtns" onClick={handleGoRight}>
              <Arrow className="arrowImgRight" />
            </button>
          </div>
        </div>
      </div>
      <div className="projectTitle line testclass">
        <span className="whiteLine">Project showcase:</span> Odinbook
      </div>
      <div className="imageCarousel">
        <div className="imagesContainer">
          <button className="arrowBtns" onClick={handleGoLeft}>
            <Arrow className="arrowImgLeft" />
          </button>
          <div className="dualImgCar" onClick={handleModalOpen}>
            <img
              src={imgDesk[carouselSeat]}
              className="testImg desktop"
              loading="lazy"
            ></img>
            <img
              src={imgMobile[carouselSeat]}
              className="testImg mobile"
              loading="lazy"
            ></img>
          </div>

          <button className="arrowBtns" onClick={handleGoRight}>
            <Arrow className="arrowImgRight" />
          </button>
        </div>

        <div className="positionButtons">
          <button
            className={`btnx ${activeBtn(0)}`}
            onClick={() => handleCircleClicks(0)}
          ></button>
          <button
            className={`btnx ${activeBtn(1)}`}
            onClick={() => handleCircleClicks(1)}
          ></button>
          <button
            className={`btnx ${activeBtn(2)}`}
            onClick={() => handleCircleClicks(2)}
          ></button>
          <button
            className={`btnx ${activeBtn(3)}`}
            onClick={() => handleCircleClicks(3)}
          ></button>
          <button
            className={`btnx ${activeBtn(4)}`}
            onClick={() => handleCircleClicks(4)}
          ></button>
          <button
            className={`btnx ${activeBtn(5)}`}
            onClick={() => handleCircleClicks(5)}
          ></button>
          <button
            className={`btnx ${activeBtn(6)}`}
            onClick={() => handleCircleClicks(6)}
          ></button>
          <button
            className={`btnx ${activeBtn(7)}`}
            onClick={() => handleCircleClicks(7)}
          ></button>
          <button
            className={`btnx ${activeBtn(8)}`}
            onClick={() => handleCircleClicks(8)}
          ></button>
        </div>
      </div>
      <button className="detailsBtn" onClick={handleDescShow}>
        {btnText}
      </button>
      <div className={`projectDescription ${descShow}`} ref={descRef}>
        <h4 className="line bolder">Overview: </h4>
        <span className="fileStyle bolder">Fullstack project</span> - social
        media web app, strongly inspierd by Facebook in design and layout. This
        was my final project having successfully finished "The Odin Project"
        course. My goal with this project was to deliver a functional and
        responsive application for mobile and desktop users.
        <h4 className="line bolder">Technologies used</h4>
        <ul className="techStackUl">
          <li className="techStackList">
            <span className="tsListItem fileStyle bolder">Language:</span>{" "}
            Javascript
          </li>
          <li className="techStackList">
            <span className="tsListItem fileStyle bolder">Frontend:</span> React
          </li>
          <li className="techStackList">
            <span className="tsListItem fileStyle bolder">Backend:</span> Node,
            Express
          </li>
          <li className="techStackList">
            <span className="tsListItem fileStyle bolder">Database:</span>{" "}
            PostgreSQL (using PrismaORM)
          </li>
        </ul>
        <h4 className="line bolder">Key features</h4>
        <ul className="ulStyle">
          <li>
            <span className="fcnStyle bolder">Login and registration </span>
            implemented using Passport.js middleware.
          </li>
          <li>
            <span className="fcnStyle bolder">Logging in </span>
            utilises storing user credentials as a JWT token in localstorage.
          </li>
          <li>
            <span className="fcnStyle bolder">Encryption</span> of passwords
            done using bcrypt.js.
          </li>
          <li>
            <span className="fcnStyle bolder">Validation</span> is handled both
            on the frontend and backend. Backend validation leverages
            express-validator alongside Prisma's in-built validation.
          </li>
          <li>
            <span className="fcnStyle bolder">Guest login </span>- users are
            logged into a shared account
          </li>
        </ul>
        <span className="brackStyle bolder">Users are able to:</span>
        <ul>
          <li>Register a new account</li>
          <li>Log in (into their registered account or guest)</li>
          <li>Create text posts, or posts with images</li>
          <li>Like and comment on posts</li>
          <li>Like comments</li>
          <li>Search for friends and send requests</li>
          <li>Manage requests</li>
          <li>Manage their profile - changing profile icon, profile banner</li>
        </ul>
        <h4 className="line">Repos and links</h4>
        <ul className="ulStyle">
          <li>
            <a
              className="linkStyle"
              target="_blank"
              href="https://odinbookproject.netlify.app/"
            >
              Project website
            </a>
          </li>
          <li>
            <a
              className="linkStyle"
              target="_blank"
              href="https://github.com/mikeski-aa/social-media-frontend"
            >
              Frontend repo
            </a>
          </li>
          <li>
            <a
              className="linkStyle"
              target="_blank"
              href="https://github.com/mikeski-aa/social-media-backend"
            >
              Backend repo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OdinbookCarousel;
