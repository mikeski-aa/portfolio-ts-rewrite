import MethodComponent from "../assets/icons/symbol-method.svg?react";
import ReactIconComponent from "../assets/icons/react.svg?react";
import JSIconComponent from "../assets/bwicons/yellowjs.svg?react";
import Arrow from "../assets/arrow.svg?react";
import "../styles/navbar.css";
import { useContext } from "react";
import NavButton from "../components/NavButton";
import { GlobalContext } from "../App";
import { IGlobalContext } from "../interfaces";

function NavBar({
  currentPage,
  cPage,
}: {
  currentPage: string;
  cPage: string;
}) {
  const globalContext: IGlobalContext = useContext(GlobalContext);

  return (
    <>
      <div className="buttonContainer">
        {globalContext.navItems.map((item, index) => (
          <NavButton key={index} index={index} navItem={item} />
        ))}
      </div>
      <div className="appLocation">
        {currentPage === "bonusPage.js" ? (
          <div className="fileLoc">
            {"src"}
            <Arrow className="smallIcon arrow" />
            {"bonus"}
            <Arrow className="smallIcon arrow" />
          </div>
        ) : (
          <div className="fileLoc">
            {"src"}
            <Arrow className="smallIcon arrow" />
            {"components"}
            <Arrow className="smallIcon arrow" />
          </div>
        )}

        <div className="fileLoc">
          {currentPage === "bonusPage.js" ? (
            <JSIconComponent className="smallIcon" />
          ) : (
            <ReactIconComponent className="smallIcon" />
          )}{" "}
          {currentPage} <Arrow className="smallIcon arrow" />
        </div>
        <div className="fileLoc">
          <MethodComponent className="smallIcon" />
          {cPage}
        </div>
      </div>
    </>
  );
}

export default NavBar;
