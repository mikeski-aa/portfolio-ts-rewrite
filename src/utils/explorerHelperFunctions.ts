import { Dispatch, SetStateAction } from "react";
import { INavItem } from "../interfaces";

// we check if the page is currently active or not
function checkPageIsOpen(navItems: INavItem[], input: string) {
  let found = false;
  for (let x = 0; x < navItems.length; x++) {
    if (navItems[x].shortname === input) {
      found = true;
    }
  }

  return found;
}

// we copy the object from default page objects to active after finding it by name
function addNewPageToNav(
  defaultPages: INavItem[],
  setNavItems: Dispatch<SetStateAction<INavItem[]>>,
  input: string,
  navItems: INavItem[]
) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];
  let pageObject;

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].shortname === input) {
      // we need to copy the page and re-enable it after it was closed!
      copyDefault[x].disabled = false;
      // copyDefault[x].active = true;
      pageObject = copyDefault[x];
    }
  }

  // check page object is present
  if (pageObject) {
    copyNavItems.push(pageObject);
  }

  // console.log(copyNavItems);
  return setNavItems(copyNavItems);
}

// function to add bonus page to navItems
// bonus should NOT be active in this case!
function addBonusToNavNotEmpty(
  defaultPages: INavItem[],
  setNavItems: Dispatch<SetStateAction<INavItem[]>>,
  input: string,
  navItems: INavItem[]
) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];
  let pageObject;

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].shortname === input) {
      copyDefault[x].active = false;
      pageObject = copyDefault[x];
    }
  }
  if (pageObject) {
    copyNavItems.push(pageObject);
  }
  // console.log(copyNavItems);
  return setNavItems(copyNavItems);
}

// function to add bonus page to navItems and to set it as active
function addBonusToNavIsEmpty(
  defaultPages: INavItem[],
  setNavItems: Dispatch<SetStateAction<INavItem[]>>,
  input: string,
  navItems: INavItem[]
) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];
  let pageObject;

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].shortname === input) {
      copyDefault[x].disabled = false;
      copyDefault[x].active = true;
      pageObject = copyDefault[x];
    }
  }

  if (pageObject) {
    copyNavItems.push(pageObject);
  }

  // console.log(copyNavItems);
  return setNavItems(copyNavItems);
}

// function to set bonus as active and disabling all other pages
function focusBonusManyPages(
  navItems: INavItem[],
  setNavItems: Dispatch<SetStateAction<INavItem[]>>,
  defaultPages: INavItem[],
  setDefaultPages: Dispatch<SetStateAction<INavItem[]>>
) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];

  for (let x = 0; x < copyNavItems.length; x++) {
    if (copyNavItems[x].name === "bonusPage.js") {
      // console.log(copyNavItems[x].name);
      copyNavItems[x].active = true;
    } else {
      copyNavItems[x].active = false;
    }
  }

  // console.log(copyNavItems);

  setNavItems(copyNavItems);

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = false;
    } else {
      copyDefault[x].disabled = true;
    }
  }
  // console.log(copyDefault);
  setDefaultPages(copyDefault);
}

// function to check if bonus page is active
function checkIfBonusActiveNow(defaultPages: INavItem[]) {
  const copyDefault = [...defaultPages];
  let bonusOpen = false;

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === "bonusPage.js" && !copyDefault[x].disabled) {
      bonusOpen = true;
    }
  }

  return bonusOpen;
}

// function to disable bonus visibility and enable active of page clicked
function disableBonusSetNewActive(
  navItems: INavItem[],
  setNavItems: Dispatch<SetStateAction<INavItem[]>>,
  defaultPages: INavItem[],
  setDefaultPages: Dispatch<SetStateAction<INavItem[]>>,
  input: string
) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];

  // disable bonus page. enable clicked page. also needs to enable other pages if they are open!
  // double for loop is terrible but I am struggling to do it otherwise with the current setup of these states
  for (let x = 0; x < copyDefault.length; x++) {
    for (let y = 0; y < copyNavItems.length; y++) {
      if (copyDefault[x].name === copyNavItems[y].name) {
        if (copyDefault[x].name === "bonusPage.js") {
          copyDefault[x].disabled = true;
        } else {
          copyDefault[x].disabled = false;
        }
      }
    }
  }
  setDefaultPages(copyDefault);

  for (let x = 0; x < copyNavItems.length; x++) {
    if (copyNavItems[x].shortname === input) {
      copyNavItems[x].active = true;
    } else {
      copyNavItems[x].active = false;
    }
  }

  setNavItems(copyNavItems);
}

// add new page but do not change focus from bonus
function addNewPageWithBonus(
  defaultPages: INavItem[],
  setNavItems: Dispatch<SetStateAction<INavItem[]>>,
  input: string,
  navItems: INavItem[]
) {
  const copyDefault = [...defaultPages];
  const copyNavItems = [...navItems];
  let pageObject;

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].shortname === input) {
      // we need to copy the page and BUT WE DO NOT RE-ENABLE RIGHT NOW
      copyDefault[x].disabled = true;
      pageObject = copyDefault[x];
    }
  }

  if (pageObject) {
    copyNavItems.push(pageObject);
  }

  // console.log(copyNavItems);
  return setNavItems(copyNavItems);
}

export {
  checkPageIsOpen,
  addNewPageToNav,
  addBonusToNavNotEmpty,
  addBonusToNavIsEmpty,
  focusBonusManyPages,
  checkIfBonusActiveNow,
  disableBonusSetNewActive,
  addNewPageWithBonus,
};
