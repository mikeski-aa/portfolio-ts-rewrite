function deactivateBonusPage(state, setState) {
  const stateCopy = [...state];

  for (let x = 0; x < stateCopy.length; x++) {
    if ((stateCopy[x].name = "bonusPage.js")) {
      stateCopy[x].active = false;
    }
  }

  setState(stateCopy);
}

export default deactivateBonusPage;
