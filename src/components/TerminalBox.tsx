import "../styles/terminalbox.css";
import BracketIcon from "../assets/terminalicons/brackets.svg?react";
import TrashIcon from "../assets/terminalicons/trash.svg?react";
import CubeIcon from "../assets/terminalicons/cube-svgrepo-com.svg?react";
import EllipsisIcon from "../assets/terminalicons/ellipsis.svg?react";
import PlusIcon from "../assets/terminalicons/pluslargegrey.svg?react";
import ArrowIcon from "../assets/arrow.svg?react";
import CrossIcon from "../assets/bwicons/cross2.svg?react";
import TerminalParagraph from "./TerminalParagraph";
import SplitHorizontal from "../assets/bwicons/split-horizontal.svg?react";
import { useRef, useState } from "react";

function TerminalBox(props) {
  const [messages, setMessages] = useState([
    "Page loading completed successfully",
    "Terminal initializing...",
    "Terminal initialized.",
  ]);
  const [input, setInput] = useState("");
  const [active, setActive] = useState(3);
  const inputRef = useRef(null);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const messageCopy = [...messages];
      messageCopy.push(input);
      setMessages(messageCopy);
      setInput("");
    }
  };

  const handleBtnClick = (input) => {
    setActive(input);
  };

  const handleTerminalTextClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={`terminalDiv ${props.bonusPage}`}>
      <div className="terminalHeader">
        <div className="terminalLeftBtnDiv">
          <button
            className={active === 0 ? "terminalBtn active" : "terminalBtn"}
            onClick={() => handleBtnClick(0)}
          >
            PROBLEMS
          </button>
          <button
            className={active === 1 ? "terminalBtn active" : "terminalBtn"}
            onClick={() => handleBtnClick(1)}
          >
            OUTPUT
          </button>
          <button
            className={active === 2 ? "terminalBtn active" : "terminalBtn"}
            onClick={() => handleBtnClick(2)}
          >
            DEBUG CONSOLE
          </button>
          <button
            className={active === 3 ? "terminalBtn active" : "terminalBtn"}
            onClick={() => handleBtnClick(3)}
          >
            TERMINAL
          </button>
          <button
            className={active === 4 ? "terminalBtn active" : "terminalBtn"}
            onClick={() => handleBtnClick(4)}
          >
            PORTS
          </button>
        </div>
        <div className="terminalRightBtnDiv">
          <button className="terminalBtnDummy">
            <CubeIcon className="terminalIcon" /> bash - portfoliosite
          </button>
          <div className="terminalBtnDummyDuoDiv">
            <button className="terminalBtnDummyDuo">
              <PlusIcon className="terminalIcon" />
            </button>
            <button className="terminalBtnDummyDuo">
              <ArrowIcon className="terminalIcon down" />
            </button>
          </div>
          <button className="terminalBtnDummy">
            <SplitHorizontal className="terminalIcon" />
          </button>
          <button className="terminalBtnDummy">
            <TrashIcon className="terminalIcon" />
          </button>
          <button className="terminalBtnDummy">
            <EllipsisIcon className="terminalIcon" />
          </button>
          <button className="terminalBtnDummy">
            <ArrowIcon className="terminalIcon top" />
          </button>
          <button className="terminalBtnDummy">
            <CrossIcon className="terminalIcon invert" />
          </button>
        </div>
      </div>
      {active === 0 ? (
        <div className="problemsText">
          No problems have been detected in the workspace.
        </div>
      ) : null}
      {active === 1 ? (
        <div className="outputContDiv">
          <div className="outputDiv">{""}</div>
        </div>
      ) : null}
      {active === 2 ? <div className="debugDiv"></div> : null}
      {active === 3 ? (
        <>
          {" "}
          <div
            className="mainTerminalTextbox"
            onClick={handleTerminalTextClick}
          >
            {messages.map((item, index) => (
              <TerminalParagraph key={index} text={item} />
            ))}
          </div>
          <div className="terminalInputDiv">
            <TerminalParagraph text={""} />
            <input
              className="terminalInput"
              value={input}
              onKeyDown={(e) => handleKeyPress(e)}
              onChange={(e) => handleInputChange(e)}
              ref={inputRef}
              maxLength={25}
            ></input>
          </div>
          {/* <div className="terminalspacer"></div> */}
        </>
      ) : null}
      {active === 4 ? (
        <div className="portDiv">
          <div className="portText">
            No forwarded ports. Forward a port to access your running services
            locally.
          </div>
          <button className="portBox">Forward a port</button>
        </div>
      ) : null}
      <div className="terminalspacer"></div>
    </div>
  );
}

export default TerminalBox;
