import WindowRestoreIcon from "../assets/bwicons/windowrestore.svg?react";
import LineIcon from "../assets/bwicons/linesvg.svg?react";
import Cross from "../assets/bwicons/cross2.svg?react";
import { useEffect } from "react";
import "../styles/emailmodal.css";

function EmailModal(props) {
  const handleCloseModal = () => {
    props.setEmailModal(false);
  };

  // escape to close modal
  useEffect(() => {
    function handleEscClick(e) {
      if (e.code === "Escape") {
        props.setEmailModal(false);
      }
    }

    document.addEventListener("keydown", handleEscClick);

    return () => document.removeEventListener("keydown", handleEscClick);
  }, []);

  return (
    <div
      className={`modal ${props.emailModal}`}
      onKeyDown={(e) => handleKeyPress(e)}
    >
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
