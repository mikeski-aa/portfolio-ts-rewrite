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

function NewSkillBox(props) {
  const icons = {
    CSS: <CssIcon className="newSkillIcon" />,
    HTML: <HtmlIcon className="newSkillIcon" />,
    JavaScript: <JsIcon className="newSkillIcon" />,
    MongoDB: <MongoIcon className="newSkillIcon" />,
    Node: <NodeIcon className="newSkillIcon" />,
    Photoshop: <PsIcon className="newSkillIcon" />,
    PostgreSQL: <PsqlIcon className="newSkillIcon" />,
    React: <ReactIcon className="newSkillIcon" />,
    Express: <ExpressIcon className="newSkillIcon" />,
    Jest: <JestIcon className="newSkillIcon" />,
    VSCode: <VscodeIcon className="newSkillIcon" />,
    Git: <GitIcon className="newSkillIcon" />,
    TypeScript: <TsIcon className="newSkillIcon" />,
  };

  const renderedIcon = icons[props.name];

  return (
    <div className="newSkillBoxContainer">
      {renderedIcon ? renderedIcon : null}
      <div className="newSkillText">
        {props.name === "VSCode" ? "Visual Studio Code" : props.name}
      </div>
    </div>
  );
}

export default NewSkillBox;
