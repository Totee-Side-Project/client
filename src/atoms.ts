import { atom } from "recoil";
import { UserState } from "./types";

export const userState = atom<UserState | null>({
  key: "userState",
  default: null,
});
