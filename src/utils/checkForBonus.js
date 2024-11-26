function checkForBonus(state) {
  let found = false;
  for (let x = 0; x < state.length; x++) {
    if (state[x].name === "bonusPage.js") {
      found = true;
    }
  }

  return found;
}

export default checkForBonus;
