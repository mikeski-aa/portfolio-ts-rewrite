import "../styles/bonuspage.css";
import dragDropGif from "../assets/gif/dragdrop.gif";
import mmbCloseGif from "../assets/gif/mmbclose.gif";
import terminalTyping from "../assets/gif/terminaltyping.gif";
import { useEffect } from "react";

function BonusPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`bonusPageDivCont`}>
      <div className="bonusContent">
        <div className="headingBonus">Having fun exploring?</div>
        <div className="bonus part one">
          <div className="bonusTxtBox">
            Did you know you can <span className="line">drag tabs</span>?
          </div>

          <img
            src={dragDropGif}
            className="bonusGif"
            loading="lazy"
            alt="functionality gif"
          ></img>
        </div>
        <div className="bonus part two">
          <div className="bonusTxtBox">
            Tabs can also be closed by clicking{" "}
            <span className="linkStyle">middle mouse button</span>!
          </div>

          <img
            src={mmbCloseGif}
            className="bonusGif"
            loading="lazy"
            alt="functionality gif"
          />
        </div>
        <div className="bonus part three">
          <div className="bonusTxtBox">
            {" "}
            You can{" "}
            <span className="brackStyle">interact with the terminal</span>!
          </div>

          <img
            src={terminalTyping}
            className="bonusGif"
            loading="lazy"
            alt="functionality gif"
          />
        </div>
      </div>
    </div>
  );
}

export default BonusPage;
