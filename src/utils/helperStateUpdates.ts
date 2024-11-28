// helper functions to help with page updates and smooth scrolling

import React, { Dispatch, SetStateAction } from "react";
import { INavItem } from "../interfaces";

// smooth scrolling for each element
function smoothScroll(inputRef: React.RefObject<HTMLDivElement> | null) {
  if (inputRef != null) {
    // checking inputRef.current is not null
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// fast scroll
function notSmoothScroll(inputRef: React.RefObject<HTMLDivElement> | null) {
  if (inputRef != null) {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
    }
  }
}

// update active buttons depending on scroll location
// this is a little buggy and sometimes causes flickers
function helperScrollStateUpdate(
  state: INavItem[],
  setState: Dispatch<SetStateAction<INavItem[]>>,
  input: string
) {
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

export { smoothScroll, notSmoothScroll, helperScrollStateUpdate };
