import { useContext, useState } from "react";
import Arrow from "../assets/arrow.svg?react";
import File from "./File";
import "../styles/folder.css";
import { GlobalContext } from "../App";
import { IGlobalContext, INavItem } from "../interfaces";

function Folder({
  rootName,
  childOne,
  childTwo,
  childThree,
}: {
  rootName: string;
  childOne: string;
  childTwo: string;
  childThree: string;
}) {
  const [rootStat, setFolderStat] = useState(true);
  const [childOneStat, setChildOneStat] = useState(true);
  const [childTwoStat, setChildTwoStat] = useState(true);
  const [childThreeStat, setChildThreeStat] = useState(true);
  const globalContext: IGlobalContext = useContext(GlobalContext);

  const handleOuterClick = () => {
    if (rootStat) {
      setFolderStat(false);
    } else {
      setFolderStat(true);
    }
  };

  const handleChildOne = () => {
    if (childOneStat) {
      setChildOneStat(false);
    } else {
      setChildOneStat(true);
    }
  };

  const handleChildTwo = () => {
    if (childTwoStat) {
      setChildTwoStat(false);
    } else {
      setChildTwoStat(true);
    }
  };

  const handleChildThree = () => {
    if (childThreeStat) {
      setChildThreeStat(false);
    } else {
      setChildThreeStat(true);
    }
  };

  const bonusPageItems: INavItem = {
    shortname: "bonusPage",
    name: "bonuspagexdd",
    active: false,
    trueIndex: 99,
    refLink: null,
    visible: false,
    disabled: false,
  };

  // I am thinking this component could be re-written using recursive components
  return (
    <div className="folderDiv">
      <button className="folderBtn root" onClick={handleOuterClick}>
        <Arrow className={`folderChevron ${rootStat}`} />
        {rootName}
      </button>
      <div className={`fileList ${rootStat} childOne`}>
        <button className="folderBtn btnOne" onClick={handleChildOne}>
          <Arrow className={`folderChevron ${childOneStat}`} />
          {childOne}
        </button>
        <div className={`fileList ${childOneStat} childTwo`}>
          <button className="folderBtn btnTwo" onClick={handleChildTwo}>
            <Arrow className={`folderChevron ${childTwoStat}`} />
            {childTwo}
          </button>
          <div className={`fileList ${childTwoStat} componentList`}>
            {/* {files.map((item, index) => (
              <File key={index} name={item.name} type=".jsx" />
            ))} */}
            {globalContext.defaultPages.map((item: INavItem, index: number) => (
              <File
                key={index}
                file={item}
                type=".jsx"
                nobonus={true}
                bonus={false}
              />
            ))}
          </div>
          <button className="folderBtn btnThree" onClick={handleChildThree}>
            <Arrow className={`folderChevron ${childThreeStat}`} />
            {childThree}
          </button>
          <div className={`fileList ${childThreeStat} componentList`}>
            <File
              file={bonusPageItems}
              type=".js"
              nobonus={false}
              bonus={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
