// helper functions to help with page updates and smooth scrolling

// smooth scrolling for each element
function smoothScroll(inputRef) {
  inputRef.current.scrollIntoView({ behavior: "smooth" });
}

// fast scroll
function notSmoothScroll(inputRef) {
  inputRef.current.scrollIntoView();
}

// update active buttons depending on scroll location
// this is a little buggy and sometimes causes flickers
function helperScrollStateUpdate(state, setState, input) {
  // create shallow copy
  const copyState = [...state];
  for (let x = 0; x < copyState.length; x++) {
    if (copyState[x].name === input) {
      copyState[x].active = true;
    } else {
      copyState[x].active = false;
    }
  }

  setState(copyState);
}

// changes the active state - active state means that the current page is in view.
// on click the page smooth scrolls down to the correct element
function helperClickStateUpdate(state, setState, input, setCurr, setShortCurr) {
  const copyItems = [...state];
  for (let x = 0; x < copyItems.length; x++) {
    if (copyItems[x].name === input) {
      copyItems[x].active = true;

      // if case for contact since scrolling there is right now not possible due to height
      if (copyItems[x].name === "Contact_me.jsx") {
        setCurr(copyItems[x].name);
        setShortCurr(copyItems[x].shortname);
      }

      if (copyItems[x].name === "bonusPage.js") {
        setCurr(copyItems[x].name);
        setShortCurr(copyItems[x].shortname);
        return;
      }

      // setActivePage(copyItems[x].trueIndex);
      smoothScroll(copyItems[x].refLink);
    } else {
      copyItems[x].active = false;
    }
  }
  setState(copyItems);
}

function removeStateItem(state, setState, input) {
  const copyItems = [...state];
  const filteredItems = copyItems.filter((item) => item.name != input);

  setState(filteredItems);
}

// update default pages state which will dictate what is being rendered
function updateDisabledPagesState(state, setState, input) {
  const copyItems = [...state];

  for (let x = 0; x < copyItems.length; x++) {
    if (copyItems[x].shortname === input) {
      copyItems[x].disabled = true;
    }
  }

  setState(copyItems);
}

function disableAllPages(state, setState) {
  const stateCopy = [...state];

  for (let x = 0; x < stateCopy.length; x++) {
    if (stateCopy[x].shortname != "bonusPage") {
      stateCopy[x].active = false;
      stateCopy[x].disabled = true;
    } else {
      stateCopy[x].disabled = false;
    }
  }

  setState(stateCopy);
}

// this should not enable all pages, but only the pages that are current in navItems
// this is pressed when bonusPage button is closed on the bar
function enablAllPages(state, setState, activeState) {
  const stateCopy = [...state];
  const activeCopy = [...activeState];
  let activeArray = [];

  // creates a new array of all pages that are "open"
  for (let x = 0; x < activeCopy.length; x++) {
    if (activeCopy[x].name != "bonusPage.js") {
      activeArray.push(activeCopy[x].name);
    }
  }

  // this compares two arrays, disabling all copies that are not currently visible
  for (let x = 0; x < stateCopy.length; x++) {
    for (let y = 0; y < activeArray.length; y++) {
      if (stateCopy[x].name === activeArray[y]) {
        stateCopy[x].disabled = false;
      }
    }
  }

  // enable all pages is only called when closing bonusPage.js
  for (let x = 0; x < stateCopy.length; x++) {
    if ((stateCopy[x].name = "bonusPage.js")) {
      stateCopy[x].active = false;
    }
  }

  // for (let x = 0; x < stateCopy.length; x++) {
  //   if (stateCopy[x].shortname === "bonusPage") {
  //     stateCopy[x].disabled = true;
  //   } else {
  //     stateCopy[x].disabled = false;
  //   }
  // }

  setState(stateCopy);
}

export {
  smoothScroll,
  notSmoothScroll,
  helperScrollStateUpdate,
  helperClickStateUpdate,
  removeStateItem,
  updateDisabledPagesState,
  disableAllPages,
  enablAllPages,
};
