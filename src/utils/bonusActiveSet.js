function bonusActiveSet(state, setState) {
  const copyState = [...state];

  for (let x = 0; x < copyState.length; x++) {
    if (copyState[x].name === "bonusPage.js") {
      copyState[x].active = true;
    }
  }

  setState(copyState);
}

export default bonusActiveSet;
