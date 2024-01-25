import { Dispatch, SetStateAction } from "react";

export type GlobalContextType = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
