import "../styles/vertbar.css";
import FilesIcon from "../assets/bwicons/filealt.svg?react";
import GithubIcon from "../assets/bwicons/github2.svg?react";
import LinkedIn from "../assets/bwicons/linkedin.svg?react";
import Email from "../assets/bwicons/email.svg?react";
import Explorer from "../components/Explorer";
import { useState, useContext } from "react";
import { GlobalContext } from "../App";
import { IGlobalContext } from "../interfaces";

function VertBar() {
  const [showExp, setShowExp] = useState<boolean>(true);
  const globalContext: IGlobalContext = useContext(GlobalContext);

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
