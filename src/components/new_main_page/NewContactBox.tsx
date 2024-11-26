import LinkedIn from "../../assets/bwicons/linkedin.svg?react";
import Github from "../../assets/bwicons/github2.svg?react";
import Email from "../../assets/bwicons/email.svg?react";
import {
  handleEmailClick,
  handleGithubClick,
  handleLinkedInClick,
} from "../../utils/contactFunctions";

export interface IIconsJSX {
  [key: string]: JSX.Element;
}

export interface Ilinks {
  [key: string]: () => void;
}

function NewContactBox({ itemName }: { itemName: string }) {
  const icons: IIconsJSX = {
    LinkedIn: <LinkedIn className="newContactIcon" />,
    GitHub: <Github className="newContactIcon" />,
    Email: <Email className="newContactIcon" />,
  };

  const links: Ilinks = {
    LinkedIn: handleLinkedInClick,
    GitHub: handleGithubClick,
    Email: handleEmailClick,
  };

  const renderedIcon = icons[itemName];
  const activeLink = links[itemName];
  return (
    <button className="newContactBox" onClick={activeLink}>
      {renderedIcon ? renderedIcon : null}
      {itemName}
    </button>
  );
}

export default NewContactBox;
