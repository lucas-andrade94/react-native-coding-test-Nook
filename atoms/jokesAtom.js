import { atom } from "recoil";

export const categoryState = atom({
  key: "categoryState",
  default: [],
});

export const blacklistFlagsState = atom({
  key: "blacklistFlagsState",
  default: [],
});
