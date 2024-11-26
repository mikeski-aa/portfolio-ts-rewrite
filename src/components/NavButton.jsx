import { useState, useContext } from "react";
import "../styles/navbutton.css";
import { GlobalContext } from "../App";
import JSIconComponent from "../assets/bwicons/yellowjs.svg?react";
import ReactIconComponent from "../assets/icons/react.svg?react";
import CrossIcon from "../assets/bwicons/cross2.svg?react";
import { smoothScroll, notSmoothScroll } from "../utils/helperStateUpdates";
import YellowJsAlt from "../assets/bwicons/yellowjsalt.svg?react";
import testIcon from "../assets/bwicons/yellowjs.svg";

import {
  lastItemWithBonus,
  checkIfBonusPresent,
  deactivatePage,
  manyPagesCloseOne,
  closeBonusActive,
  closeBonusInactive,
  closeOnlyActiveBonus,
  onlyBonusOpenClose,
  closeNormalSetBonus,
} from "../utils/navBtnCloseUtils";
import {
  checkIfBonusActiveNow,
  disableBonusSetNewActive,
  focusBonusManyPages,
} from "../utils/explorerHelperFunctions";

function NavButton(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const globalContext = useContext(GlobalContext);

  // handle setting index data when tab is beggining to be dragged
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  // handle drop - set new index, splice array replacing item positions.
  // set new state to update the layout
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...globalContext.navItems];
    newItems.splice(targetIndex, 0, newItems.splice(sourceIndex, 1)[0]);
    globalContext.setNavItems(newItems);
  };

  // disable default behaviour, otherwise drag won't work
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // handle mouseover enter and exit, for toggling display of close button
  const handleMouseEnter = (e) => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  // rewriting the terrible mess
  // cases to keep in mind:
  // the page belongs to "regular" items
  // the page belongs to bonus
  // the page is the last page left open
  // there are two pages left, one regualr one bonus how do we handle each case

  // if you are reading this comment, please know that I know that this code is highly heretical
  // this is post refactor, just imagine what it was like before
  // the main reason for this mess is caused by my decision to have a SPA, and having the bonus page open on a blank "canvas"
  // there are a lot of edge cases when closing - for exampel when closing a tab not in focus or in focus.
  // this solution is not scalable at all and only works for the usecase of this website.
  // for a larger scale project like this, I would
  // render each page individually, never ever having scrolling across multiple pages.
  const handleCloseRewrite = () => {
    // console.log("closeClicked");
    if (globalContext.navItems.length > 2) {
      if (props.name === "bonusPage.js") {
        // console.log("bonusPage close clicked");
        if (checkIfBonusActiveNow(globalContext.defaultPages)) {
          // console.log("BONUS IS ACTIVE");

          closeBonusActive(
            globalContext.defaultPages,
            globalContext.setDefaultPages,
            globalContext.navItems,
            globalContext.setNavItems,
            props.name
          );
        } else {
          // console.log("bonus is inactive");
          closeBonusInactive(
            globalContext.navItems,
            globalContext.setNavItems,
            props.name
          );
        }
      } else {
        // console.log("more than 2 items in nav");
        // what needs to happen:
        // deactivate the page
        // disable the page
        manyPagesCloseOne(
          globalContext.navItems,
          globalContext.setNavItems,
          props.name
        );
        deactivatePage(
          globalContext.defaultPages,
          globalContext.setDefaultPages,
          props.name
        );
      }
    } else {
      // console.log("less than 2 items detected - warning!");
      if (checkIfBonusPresent(globalContext.navItems)) {
        if (checkIfBonusActiveNow(globalContext.defaultPages)) {
          if (globalContext.navItems.length === 2) {
            if (props.name != "bonusPage.js") {
              // console.log("bonusPage not clicked");
              closeNormalSetBonus(
                globalContext.defaultPages,
                globalContext.setDefaultPages,
                globalContext.navItems,
                globalContext.setNavItems,
                props.name
              );
            } else {
              // console.log("bonus active & present & 2< windows open");
              closeOnlyActiveBonus(
                globalContext.defaultPages,
                globalContext.setDefaultPages,
                globalContext.navItems,
                globalContext.setNavItems,
                props.name
              );
            }
          } else {
            onlyBonusOpenClose(
              globalContext.defaultPages,
              globalContext.setDefaultPages,
              globalContext.navItems,
              globalContext.setNavItems,
              props.name
            );
            // console.log("only bonus active");
            globalContext.setActivePage(null);
          }
        } else {
          // console.log("bonus present but inactive");
          lastItemWithBonus(
            globalContext.defaultPages,
            globalContext.setDefaultPages,
            globalContext.navItems,
            globalContext.setNavItems,
            props.name
          );
          globalContext.setCurrentPage("bonusPage.js");
          globalContext.setCpage("bonusPage");
          globalContext.setActivePage("four");
        }
      } else {
        // console.log("bonus is not present all good");
        manyPagesCloseOne(
          globalContext.navItems,
          globalContext.setNavItems,
          props.name
        );
        deactivatePage(
          globalContext.defaultPages,
          globalContext.setDefaultPages,
          props.name
        );
        globalContext.setActivePage(null);
      }
    }
  };

  // rewriting click handler here...
  const handleClickNav = (e) => {
    // if (typeof e.target.innerText === "undefined") {
    //   return console.log("undefined val");
    // } else if (e.target.innerText === "") {
    //   return console.log("VALUE IS EMPTY!!!!!");
    // } else {
    //   console.log("defined val");
    //   return console.log(e.target.innerText);
    // }

    // alert(e.target.innerText);
    // console.log(iconClicked);
    if (e.target.innerText === "bonusPage.js" || e.target.innerText === "") {
      // console.log("navLogic logRef 1");
      // console.log("bonusPage clicked");
      if (checkIfBonusActiveNow(globalContext.defaultPages)) {
        // console.log("navLogic logRef 2");
        // console.log("bonus is active");
        // console.log("error here?");
        // setIconClicked(false);
        return null;
      } else {
        // console.log("navLogic logRef 3");
        // console.log("bonus is inactive");
        focusBonusManyPages(
          globalContext.navItems,
          globalContext.setNavItems,
          globalContext.defaultPages,
          globalContext.setDefaultPages
        );
        globalContext.setCurrentPage("bonusPage.js");
        globalContext.setCpage("bonusPage");
        globalContext.setActivePage("four");
        // setIconClicked(false);
      }
    } else {
      // console.log("navLogic logRef 4");
      // console.log("normal page clicked");
      if (checkIfBonusActiveNow(globalContext.defaultPages)) {
        // console.log("navLogic logRef 5");
        // console.log("bonus is active");
        disableBonusSetNewActive(
          globalContext.navItems,
          globalContext.setNavItems,
          globalContext.defaultPages,
          globalContext.setDefaultPages,
          props.shortname
        );
        // alert("setting don't run: current dont run:" + globalContext.dontRun);
        globalContext.setDontRun(true);
        setTimeout(() => {
          notSmoothScroll(props.refLink);
        }, 15);
        globalContext.setCurrentPage(props.name);
        globalContext.setCpage(props.shortname);
        globalContext.setDontRun(false);
      } else {
        // console.log("navLogic logRef 6");

        smoothScroll(props.refLink);
      }
    }
  };

  // closing on middle mouse click enabled!
  // prevent default behaviour (showing of the scroll circle only when mmb is clicked)
  // only tested on chrome / windows.
  // need to test on other OS somehow
  const handleKeyDown = (e) => {
    // console.log(e.which);
    // console.log(e.button);
    if (e.button === 1) {
      e.preventDefault();
      handleCloseRewrite();
    }
  };

  // const handleIconClick = () => {
  //   console.log("icon clicked");
  //   console.log(iconClicked);
  //   setIconClicked(true);
  // };

  return (
    <div
      className={`navBtnDiv ${props.active}`}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <button
        className={`navBtn ${props.active}`}
        data-x="test"
        draggable
        onClick={(e) => handleClickNav(e)}
        onDragStart={(e) => handleDragStart(e, props.index)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, props.index)}
        onMouseDown={(e) => handleKeyDown(e)}
      >
        {props.name === "bonusPage.js" ? (
          <img
            src={testIcon}
            className="locationIcon"
            alt="javascript icon"
          ></img>
        ) : (
          <ReactIconComponent className="locationIcon" />
        )}
        <div className="btnTextNavBtn"> {props.name}</div>
      </button>
      <button
        className={
          props.active || mouseOver ? "closePageBtn show" : "closePageBtn hide"
        }
        onClick={() => handleCloseRewrite()}
      >
        <CrossIcon className="closePageIcon" />
      </button>
    </div>
  );
}

export default NavButton;
