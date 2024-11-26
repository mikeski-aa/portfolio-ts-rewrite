import LinkedIn from "../assets/bwicons/linkedin.svg?react";
import Github from "../assets/bwicons/github2.svg?react";
import Email from "../assets/bwicons/email.svg?react";
import "../styles/contactbox.css";
import {
  handleEmailClick,
  handleGithubClick,
  handleLinkedInClick,
} from "../utils/contactFunctions";
import { GlobalContext } from "../App";
import { useContext } from "react";

function ContactBox(props) {
  const globalContext = useContext(GlobalContext);
  const icons = {
    LinkedIn: <LinkedIn className="contactIcon" />,
    GitHub: <Github className="contactIcon" />,
    Email: <Email className="contactIcon" />,
  };

  const links = {
    LinkedIn: handleLinkedInClick,
    GitHub: handleGithubClick,
    Email: () => globalContext.setEmailModal(true),
  };

  const renderedIcon = icons[props.name];
  const activeLink = links[props.name];
  return (
    <button className="contactBox" onClick={activeLink}>
      {renderedIcon ? renderedIcon : null}
      {props.name}
    </button>
  );
}

export default ContactBox;
