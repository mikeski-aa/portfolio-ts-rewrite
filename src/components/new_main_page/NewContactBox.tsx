import LinkedIn from "../../assets/bwicons/linkedin.svg?react";
import Github from "../../assets/bwicons/github2.svg?react";
import Email from "../../assets/bwicons/email.svg?react";
import {
  handleEmailClick,
  handleGithubClick,
  handleLinkedInClick,
} from "../../utils/contactFunctions";

function NewContactBox(props) {
  const icons = {
    LinkedIn: <LinkedIn className="newContactIcon" />,
    GitHub: <Github className="newContactIcon" />,
    Email: <Email className="newContactIcon" />,
  };

  const links = {
    LinkedIn: handleLinkedInClick,
    GitHub: handleGithubClick,
    Email: handleEmailClick,
  };

  const renderedIcon = icons[props.name];
  const activeLink = links[props.name];
  return (
    <button className="newContactBox" onClick={activeLink}>
      {renderedIcon ? renderedIcon : null}
      {props.name}
    </button>
  );
}

export default NewContactBox;
