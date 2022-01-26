import { atom } from "recoil";

export const categoryState = atom({
  key: "categoryState",
  default: [],
});

export const blacklistFlagsState = atom({
  key: "blacklistFlagsState",
  default: [],
});

export const stringCategoryState = atom({
  key: "stringCategoryState",
  default: "",
});

export const stringBlacklistState = atom({
  key: "stringBlacklistState",
  default: "",
});

export const jokeSetupState = atom({
  key: "jokeSetupState",
  default: "",
});

export const jokeDeliveryState = atom({
  key: "jokeDeliveryState",
  default: "",
});
