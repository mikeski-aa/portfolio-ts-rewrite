function bonusPage(state, setState, bonusPage, setBonusPage) {
  if (bonusPage) {
    return null;
  }

  const pageObject = {
    name: "bonusPage.js",
    active: false,
    shortname: "bonusPage",
    trueIndex: 4,
  };

  const copyState = [...state];
  copyState.push(pageObject);
  setState(copyState);
  setBonusPage(true);
}

export default bonusPage;
