import "../styles/vertbar.css";
import FilesIcon from "../assets/bwicons/filealt.svg?react";
import GithubIcon from "../assets/bwicons/github2.svg?react";
import LinkedIn from "../assets/bwicons/linkedin.svg?react";
import Email from "../assets/bwicons/email.svg?react";
import WindowRestoreIcon from "../assets/bwicons/windowrestore.svg?react";
import LineIcon from "../assets/bwicons/linesvg.svg?react";
import Cross from "../assets/bwicons/cross2.svg?react";
import Explorer from "./Explorer";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../App";

function VertBar() {
  const [showExp, setShowExp] = useState(true);
  const [emailModal, setEmailModal] = useState(false);
  const globalContext = useContext(GlobalContext);

  const handleExplorerClick = () => {
    if (showExp) {
      setShowExp(false);
      globalContext.setSidebarStat(false);
    } else {
      setShowExp(true);
      globalContext.setSidebarStat(true);
    }
  };

  const handleGithubClick = () => {
    window.open("https://github.com/mikeski-aa", "__blank");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/michal-nowak-a40681185",
      "__blank"
    );
  };

  const handleEmailClick = () => {
    // window.open("mailto:dev.m.nowak@gmail.com");
    globalContext.setEmailModal(true);
  };

  return (
    <div className="vertBar">
      <div className="vertBtnDiv">
        <button className={`vertBtn ${showExp}`} onClick={handleExplorerClick}>
          <FilesIcon className={`vertIcon ${showExp}`} />
        </button>
        <button className="vertBtn" onClick={handleGithubClick}>
          <GithubIcon className="vertIcon" />
        </button>
        <button className="vertBtn" onClick={handleLinkedInClick}>
          <LinkedIn className="vertIcon" />
        </button>
        <button className="vertBtn" onClick={handleEmailClick}>
          <Email className="vertIcon" />
        </button>
      </div>
      <div className={`explorerDiv ${showExp}`}>
        <Explorer status={showExp} />
      </div>
    </div>
  );
}

export default VertBar;
