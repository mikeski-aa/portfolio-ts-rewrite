import CssIcon from "../../assets/bwicons/css.svg?react";
import HtmlIcon from "../../assets/bwicons/html.svg?react";
import JsIcon from "../../assets/bwicons/js.svg?react";
import MongoIcon from "../../assets/bwicons/mongo.svg?react";
import NodeIcon from "../../assets/bwicons/node.svg?react";
import PsIcon from "../../assets/bwicons/photoshop.svg?react";
import PsqlIcon from "../../assets/bwicons/postgres.svg?react";
import ReactIcon from "../../assets/bwicons/react.svg?react";
import ExpressIcon from "../../assets/bwicons/expressicon.svg?react";
import VscodeIcon from "../../assets/bwicons/vscodeicon.svg?react";
import JestIcon from "../../assets/bwicons/jesticon.svg?react";
import GitIcon from "../../assets/bwicons/github2.svg?react";
import TsIcon from "../../assets/bwicons/typescript.svg?react";
import "../../styles/new_main_design/newskillboxforcard.css";

function NewSkillBoxForCard(props) {
  const icons = {
    CSS: <CssIcon className="newSkillIconCard" />,
    HTML: <HtmlIcon className="newSkillIconCard" />,
    JavaScript: <JsIcon className="newSkillIconCard" />,
    MongoDB: <MongoIcon className="newSkillIconCard" />,
    Node: <NodeIcon className="newSkillIconCard" />,
    Photoshop: <PsIcon className="newSkillIconCard" />,
    PostgreSQL: <PsqlIcon className="newSkillIconCard" />,
    React: <ReactIcon className="newSkillIconCard" />,
    Express: <ExpressIcon className="newSkillIconCard" />,
    Jest: <JestIcon className="newSkillIconCard" />,
    VSCode: <VscodeIcon className="newSkillIconCard" />,
    Git: <GitIcon className="newSkillIconCard" />,
    TypeScript: <TsIcon className="newSkillIconCard" />,
  };

  const renderedIcon = icons[props.name];

  return (
    <div className="newSkillBoxContainerCard">
      {renderedIcon ? renderedIcon : null}
      <div className="newSkillText">
        {props.name === "VSCode" ? "Visual Studio Code" : props.name}
      </div>
    </div>
  );
}

export default NewSkillBoxForCard;
