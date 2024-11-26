import WindowRestoreIcon from "../assets/bwicons/windowrestore.svg?react";
import LineIcon from "../assets/bwicons/linesvg.svg?react";
import Cross from "../assets/bwicons/cross2.svg?react";
import { useContext, useEffect } from "react";
import "../styles/emailmodal.css";
import { GlobalContext, IGlobalContext } from "../App";

function EmailModal() {
  const globalContext: IGlobalContext = useContext(GlobalContext);

  const handleCloseModal = () => {
    globalContext.setEmailModal(false);
  };

  // escape to close modal
  useEffect(() => {
    function handleEscClick(e: KeyboardEvent) {
      if (e.code === "Escape") {
        globalContext.setEmailModal(false);
      }
    }

    document.addEventListener("keydown", handleEscClick);

    // cleanup removes listener
    return () => document.removeEventListener("keydown", handleEscClick);
  }, []);

  return (
    <div className={`modal ${globalContext.emailModal}`}>
      <div className="modalContent email">
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
        <div className="modalText email">
          <div className="emailModalHead">
            You can <span className="linkStyle">email me</span> at:
          </div>
          <div className="emailText">
            <span
              className="emailLargeText"
              onClick={() => window.open("mailto:dev.m.nowak@gmail.com")}
            >
              dev.m.nowak@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailModal;
