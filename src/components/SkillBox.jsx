import "../styles/skillbox.css";
import CssIcon from "../assets/bwicons/css.svg?react";
import HtmlIcon from "../assets/bwicons/html.svg?react";
import JsIcon from "../assets/bwicons/js.svg?react";
import MongoIcon from "../assets/bwicons/mongo.svg?react";
import NodeIcon from "../assets/bwicons/node.svg?react";
import PsIcon from "../assets/bwicons/photoshop.svg?react";
import PsqlIcon from "../assets/bwicons/postgres.svg?react";
import ReactIcon from "../assets/bwicons/react.svg?react";
import TsIcon from "../assets/bwicons/typescript.svg?react";

function SkillBox(props) {
  const icons = {
    CSS: <CssIcon className="skillIcon" />,
    HTML: <HtmlIcon className="skillIcon" />,
    JavaScript: <JsIcon className="skillIcon" />,
    MongoDB: <MongoIcon className="skillIcon" />,
    Node: <NodeIcon className="skillIcon" />,
    Photoshop: <PsIcon className="skillIcon" />,
    PostgreSQL: <PsqlIcon className="skillIcon" />,
    React: <ReactIcon className="skillIcon" />,
    TypeScript: <TsIcon className="skillIcon" />,
  };

  const renderedIcon = icons[props.name];

  return (
    <div className="skillBox">
      {renderedIcon ? renderedIcon : null}

      <div className="heading">{props.name}</div>
    </div>
  );
}

export default SkillBox;
