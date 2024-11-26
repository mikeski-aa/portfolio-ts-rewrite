function manyPagesCloseOne(navItems, setNavItems, input) {
  const copyNav = [...navItems];

  const filteredNav = copyNav.filter((item) => item.name != input);
  setNavItems(filteredNav);
}

function deactivatePage(defaultPages, setDefaultPages, input) {
  const copyDefault = [...defaultPages];

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === input) {
      copyDefault[x].disabled = true;
      copyDefault[x].active = false;
    }
  }

  setDefaultPages(copyDefault);
}

function checkIfBonusPresent(navItems) {
  const copyNav = [...navItems];
  let present = false;
  for (let x = 0; x < copyNav.length; x++) {
    if (copyNav[x].name === "bonusPage.js") {
      present = true;
    }
  }

  return present;
}

function activateBonusPage(
  defaultPages,
  setDefaultPages,
  navItems,
  setNavItems
) {
  const copyNav = [...navItems];
  const copyDefault = [...defaultPages];

  for (let x = 0; x < copyNav.length; x++) {
    if (copyNav[x].name === "bonusPage.js") {
      copyNav[x].active = true;
    }
  }

  setNavItems(copyNav);

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = false;
    }
  }

  setDefaultPages(copyDefault);
}

// this function handles a LOT. However, I can't chain state updates.
function lastItemWithBonus(
  defaultPages,
  setDefaultPages,
  navItems,
  setNavItems,
  input
) {
  const copyNav = [...navItems];
  const copyDefault = [...defaultPages];

  // first we filter the nav to remove the item clicked to be closed.
  const filteredNav = copyNav.filter((item) => item.name != input);

  // next we set bonus page as active since it is the last remaining page
  for (let x = 0; x < filteredNav.length; x++) {
    if (filteredNav[x].name === "bonusPage.js") {
      filteredNav[x].active = true;
    }
  }

  // set a new nav state
  setNavItems(filteredNav);

  // now we disable the default settings for the specific
  // item we just closed to prevent it from rendering instantly when reopened
  // we also enable the bonus page
  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === input) {
      copyDefault[x].disabled = true;
      copyDefault[x].active = false;
    } else if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = false;
    }
  }

  setDefaultPages(copyDefault);
}

// we want to close bonus and deactivate it.
// we then want to re-enable all active pages
function closeBonusActive(
  defaultPages,
  setDefaultPages,
  navItems,
  setNavItems,
  input
) {
  const copyNav = [...navItems];
  const copyDefault = [...defaultPages];

  // filter bonus out of the nav bar
  const filteredNav = copyNav.filter((item) => item.name != input);
  // set a new active page

  if (filteredNav.length >= 1) {
    filteredNav[0].active = true;
  }

  console.log(filteredNav);

  setNavItems(filteredNav);

  // disable bonus page. enable clicked page. also needs to enable other pages if they are open!
  // double for loop is terrible but I am struggling to do it otherwise with the current setup of these states
  for (let x = 0; x < copyDefault.length; x++) {
    for (let y = 0; y < filteredNav.length; y++) {
      if (copyDefault[x].name === filteredNav[y].name) {
        copyDefault[x].disabled = false;
      } else if (copyDefault[x].name === "bonusPage.js") {
        copyDefault[x].disabled = true;
      }
    }
  }
  setDefaultPages(copyDefault);
}

function closeBonusInactive(navItems, setNavItems, input) {
  const copyNav = [...navItems];

  // filter bonus out of the nav bar
  const filteredNav = copyNav.filter((item) => item.name != input);

  setNavItems(filteredNav);
}

// close last window if it is only the bonus item
function closeOnlyActiveBonus(
  defaultPages,
  setDefaultPages,
  navItems,
  setNavItems,
  input
) {
  const copyNav = [...navItems];
  const copyDefault = [...defaultPages];

  // filter bonus out of the nav bar
  const filteredNav = copyNav.filter((item) => item.name != input);
  // set a new active page

  setNavItems(filteredNav);

  // disable bonus page. enable clicked page. also needs to enable other pages if they are open!
  // double for loop is terrible but I am struggling to do it otherwise with the current setup of these states
  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = true;
    } else if (copyDefault[x].name === filteredNav[0].name) {
      copyDefault[x].disabled = false;
    }
  }
  setDefaultPages(copyDefault);
}

// only bonus is open, need to only close it
function onlyBonusOpenClose(
  defaultPages,
  setDefaultPages,
  navItems,
  setNavItems,
  input
) {
  const copyNav = [...navItems];
  const copyDefault = [...defaultPages];

  const filteredNav = copyNav.filter((item) => item.name != input);
  // set a new active page

  setNavItems(filteredNav);

  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = true;
    }
  }
  setDefaultPages(copyDefault);
}

// two pages open, bonus is inactive, close other page, set bonus
function closeNormalSetBonus(
  defaultPages,
  setDefaultPages,
  navItems,
  setNavItems,
  input
) {
  const copyNav = [...navItems];
  const copyDefault = [...defaultPages];

  const filteredNav = copyNav.filter((item) => item.name != input);
  // set a new active page

  setNavItems(filteredNav);
  for (let x = 0; x < copyDefault.length; x++) {
    if (copyDefault[x].name === "bonusPage.js") {
      copyDefault[x].disabled = false;
    }
  }
  setDefaultPages(copyDefault);
}

export {
  manyPagesCloseOne,
  deactivatePage,
  checkIfBonusPresent,
  lastItemWithBonus,
  closeBonusActive,
  closeBonusInactive,
  closeOnlyActiveBonus,
  onlyBonusOpenClose,
  closeNormalSetBonus,
};
