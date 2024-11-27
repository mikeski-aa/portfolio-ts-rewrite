import React, { useState, useContext, SyntheticEvent } from "react";
import "../styles/navbutton.css";
import { GlobalContext } from "../App";
import ReactIconComponent from "../assets/icons/react.svg?react";
import CrossIcon from "../assets/bwicons/cross2.svg?react";
import { smoothScroll, notSmoothScroll } from "../utils/helperStateUpdates";
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
import { IGlobalContext, INavItem } from "../interfaces";

function NavButton({ index, navItem }: { index: number; navItem: INavItem }) {
  const [mouseOver, setMouseOver] = useState(false);
  const globalContext: IGlobalContext = useContext(GlobalContext);

  // handle setting index data when tab is beggining to be dragged
  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("index", index.toString());
  };

  // handle drop - set new index, splice array replacing item positions.
  // set new state to update the layout
  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("index"));
    const newItems = [...globalContext.navItems];
    newItems.splice(targetIndex, 0, newItems.splice(sourceIndex, 1)[0]);
    globalContext.setNavItems(newItems);
  };

  // disable default behaviour, otherwise drag won't work
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // handle mouseover enter and exit, for toggling display of close button
  const handleMouseEnter = () => {
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
      if (navItem.name === "bonusPage.js") {
        // console.log("bonusPage close clicked");
        if (checkIfBonusActiveNow(globalContext.defaultPages)) {
          // console.log("BONUS IS ACTIVE");

          closeBonusActive(
            globalContext.defaultPages,
            globalContext.setDefaultPages,
            globalContext.navItems,
            globalContext.setNavItems,
            navItem.name
          );
        } else {
          // console.log("bonus is inactive");
          closeBonusInactive(
            globalContext.navItems,
            globalContext.setNavItems,
            navItem.name
          );
        }
      } else {
        // what needs to happen:
        // deactivate the page
        // disable the page
        manyPagesCloseOne(
          globalContext.navItems,
          globalContext.setNavItems,
          navItem.name
        );
        deactivatePage(
          globalContext.defaultPages,
          globalContext.setDefaultPages,
          navItem.name
        );
      }
    } else {
      if (checkIfBonusPresent(globalContext.navItems)) {
        if (checkIfBonusActiveNow(globalContext.defaultPages)) {
          if (globalContext.navItems.length === 2) {
            if (navItem.name != "bonusPage.js") {
              closeNormalSetBonus(
                globalContext.defaultPages,
                globalContext.setDefaultPages,
                globalContext.navItems,
                globalContext.setNavItems,
                navItem.name
              );
            } else {
              closeOnlyActiveBonus(
                globalContext.defaultPages,
                globalContext.setDefaultPages,
                globalContext.navItems,
                globalContext.setNavItems,
                navItem.name
              );
            }
          } else {
            onlyBonusOpenClose(
              globalContext.defaultPages,
              globalContext.setDefaultPages,
              globalContext.navItems,
              globalContext.setNavItems,
              navItem.name
            );

            globalContext.setActivePage("zero");
          }
        } else {
          lastItemWithBonus(
            globalContext.defaultPages,
            globalContext.setDefaultPages,
            globalContext.navItems,
            globalContext.setNavItems,
            navItem.name
          );
          globalContext.setCurrentPage("bonusPage.js");
          globalContext.setCpage("bonusPage");
          globalContext.setActivePage("four");
        }
      } else {
        manyPagesCloseOne(
          globalContext.navItems,
          globalContext.setNavItems,
          navItem.name
        );
        deactivatePage(
          globalContext.defaultPages,
          globalContext.setDefaultPages,
          navItem.name
        );
        globalContext.setActivePage("zero");
      }
    }
  };

  // rewriting click handler here...
  const handleClickNav = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.innerText === "bonusPage.js" || target.innerText === "") {
      if (checkIfBonusActiveNow(globalContext.defaultPages)) {
        return null;
      } else {
        focusBonusManyPages(
          globalContext.navItems,
          globalContext.setNavItems,
          globalContext.defaultPages,
          globalContext.setDefaultPages
        );
        globalContext.setCurrentPage("bonusPage.js");
        globalContext.setCpage("bonusPage");
        globalContext.setActivePage("four");
      }
    } else {
      if (checkIfBonusActiveNow(globalContext.defaultPages)) {
        disableBonusSetNewActive(
          globalContext.navItems,
          globalContext.setNavItems,
          globalContext.defaultPages,
          globalContext.setDefaultPages,
          navItem.shortname
        );

        globalContext.setDontRun(true);
        setTimeout(() => {
          notSmoothScroll(navItem.refLink);
        }, 15);
        globalContext.setCurrentPage(navItem.name);
        globalContext.setCpage(navItem.shortname);
        globalContext.setDontRun(false);
      } else {
        smoothScroll(navItem.refLink);
      }
    }
  };

  // closing on middle mouse click enabled!
  // prevent default behaviour (showing of the scroll circle only when mmb is clicked)
  // only tested on chrome / windows.
  // need to test on other OS somehow
  const handleKeyDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.button === 1) {
      e.preventDefault();
      handleCloseRewrite();
    }
  };

  return (
    <div
      className={`navBtnDiv ${navItem.active}`}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <button
        className={`navBtn ${navItem.active}`}
        data-x="test"
        draggable
        onClick={(e) => handleClickNav(e)}
        onDragStart={(e) => handleDragStart(e, index)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, index)}
        onMouseDown={(e) => handleKeyDown(e)}
      >
        {navItem.name === "bonusPage.js" ? (
          <img
            src={testIcon}
            className="locationIcon"
            alt="javascript icon"
          ></img>
        ) : (
          <ReactIconComponent className="locationIcon" />
        )}
        <div className="btnTextNavBtn"> {navItem.name}</div>
      </button>
      <button
        className={
          navItem.active || mouseOver
            ? "closePageBtn show"
            : "closePageBtn hide"
        }
        onClick={() => handleCloseRewrite()}
      >
        <CrossIcon className="closePageIcon" />
      </button>
    </div>
  );
}

export default NavButton;
