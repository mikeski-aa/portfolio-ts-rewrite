import "../styles/fileStyle.css";
import ReactIcon from "../assets/bwicons/react.svg?react";
import JSIcon from "../assets/bwicons/yellowjs.svg?react";
import { GlobalContext } from "../App";
import { useContext } from "react";
import {
  helperClickStateUpdate,
  smoothScroll,
  notSmoothScroll,
} from "../utils/helperStateUpdates";

import {
  checkPageIsOpen,
  addNewPageToNav,
  addBonusToNavNotEmpty,
  addBonusToNavIsEmpty,
  focusBonusManyPages,
  checkIfBonusActiveNow,
  disableBonusSetNewActive,
  addNewPageWithBonus,
} from "../utils/explorerHelperFunctions";

function File(props) {
  const globalContext = useContext(GlobalContext);
  const name = props.name + `.jsx`;

  // prevent rendering of bonus in components folder
  if (props.nobonus && props.name === "bonusPage") {
    return null;
  }

  // if page was closed, it should be reopened.
  // if a page is already opened, scroll down to it.
  // bonus handling also needs to be implemented here.
  // important to re-set visible as true

  // there is an issue when clicking on components
  // issue occurs if everything is closed except bonus page
  // probably not resetting visibility for bonus page correctly at one point or another
  // start there and look into it

  const handleItemClickRewrite = () => {
    // console.log(globalContext.defaultPages);
    if (props.name === "bonusPage") {
      // console.log("bonus page clicked");
      // console.log("fileLogic logRef 1");

      if (checkPageIsOpen(globalContext.navItems, props.name)) {
        // on repeat click we set bonus in focus
        // this means we have to disable and deactivate all other pages
        // console.log("bonusPage is open");
        // console.log("fileLogic logRef 2");
        focusBonusManyPages(
          globalContext.navItems,
          globalContext.setNavItems,
          globalContext.defaultPages,
          globalContext.setDefaultPages
        );
        globalContext.setCurrentPage("bonusPage.js");
        globalContext.setCpage("bonusPage");
        globalContext.setActivePage("four");
      } else {
        if (globalContext.navItems.length < 1) {
          // console.log("no items in nav");
          // console.log("fileLogic logRef 3");
          addBonusToNavIsEmpty(
            globalContext.defaultPages,
            globalContext.setNavItems,
            props.name,
            globalContext.navItems
          );
          if (props.name === "bonusPage") {
            // console.log("fileLogic logRef 4");
            globalContext.setActivePage("four");
            globalContext.setCurrentPage("bonusPage.js");
            globalContext.setCpage("bonusPage");
          }
        } else {
          // console.log("bonus page is not open");
          // console.log("fileLogic logRef 5");
          addBonusToNavNotEmpty(
            globalContext.defaultPages,
            globalContext.setNavItems,
            props.name,
            globalContext.navItems
          );
        }
      }
    } else {
      // console.log("normal page clicked");
      // console.log("fileLogic logRef 6");
      // first we need to check if the page already exists or not
      if (checkPageIsOpen(globalContext.navItems, props.name)) {
        // console.log("fileLogic logRef 7");
        if (checkIfBonusActiveNow(globalContext.defaultPages)) {
          // console.log("fileLogic logRef 8");
          // console.log("bonus is indeed active now!");
          // disable active bonus, enable clicked tab
          disableBonusSetNewActive(
            globalContext.navItems,
            globalContext.setNavItems,
            globalContext.defaultPages,
            globalContext.setDefaultPages,
            props.name
          );
          setTimeout(() => {
            notSmoothScroll(props.refLink);
          }, 20);
          // console.log("prop clicked: " + props.name);
          globalContext.setCurrentPage(props.longname);
          globalContext.setCpage(props.name);
        } else {
          // console.log("page exists this will scroll now");
          // console.log("fileLogic logRef 9");
          // page exists already.
          // we can scroll to it directly
          return smoothScroll(props.refLink);
        }
      } else {
        // page is not open and  does NOT exist in navItems.
        // It needs to be added to navItems so that we can re-render the header
        if (checkIfBonusActiveNow(globalContext.defaultPages)) {
          // console.log("fileLogic logRef 10");
          // console.log("bonus open right now handle it");
          addNewPageWithBonus(
            globalContext.defaultPages,
            globalContext.setNavItems,
            props.name,
            globalContext.navItems
          );
        } else {
          console.log("we are here");
          console.log(globalContext.navItems);
          // console.log("setting new items");
          // console.log("fileLogic logRef 11");
          addNewPageToNav(
            globalContext.defaultPages,
            globalContext.setNavItems,
            props.name,
            globalContext.navItems
          );
        }
      }
    }
  };

  return (
    <button
      className={`fileBtn ${props.name} ${globalContext.activePage}`}
      onClick={handleItemClickRewrite}
    >
      {props.bonus ? (
        <JSIcon className="fileIcon" />
      ) : (
        <ReactIcon className="fileIcon" />
      )}

      {props.name}
      {props.type}
    </button>
  );
}

export default File;
