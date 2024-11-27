import { Dispatch, SetStateAction } from "react";

export interface INavItem {
  name: string;
  active: boolean;
  shortname: string;
  trueIndex: number;
  refLink: React.RefObject<HTMLDivElement> | null;
  visible: boolean;
  disabled: boolean;
}

export interface IGlobalContext {
  navItems: INavItem[];
  setNavItems: Dispatch<SetStateAction<INavItem[]>>;
  sidebarStat: boolean;
  setSidebarStat: Dispatch<SetStateAction<boolean>>;
  setCurrentPage: Dispatch<SetStateAction<string>>;
  setCpage: Dispatch<SetStateAction<string>>;
  activePage: string;
  defaultPages: INavItem[];
  setDefaultPages: Dispatch<SetStateAction<INavItem[]>>;
  setBonusPage: Dispatch<SetStateAction<boolean>>;
  bonusPage: boolean;
  setActivePage: Dispatch<SetStateAction<string>>;
  emailModal: boolean;
  setEmailModal: Dispatch<SetStateAction<boolean>>;
  dontRun: boolean;
  setDontRun: Dispatch<SetStateAction<boolean>>;
}

export interface IIconsJSX {
  [key: string]: JSX.Element;
}

export interface Ilinks {
  [key: string]: () => void;
}

export interface IContactInterface {
  name: string;
  link: string;
}

export interface IProjects {
  title: string;
  desc: string;
  projectLink: string;
  feRepo?: string;
  type: string;
  smallPic: string;
  isHosted: boolean;
  tech: ITechStack[];
  beRepo?: string;
}

export interface ITechStack {
  name: string;
}

export interface IBonusItemPage {
  shortname: string;
  bonus: boolean;
}
