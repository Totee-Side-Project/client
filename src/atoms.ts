import { atom } from "recoil";
import TokenService from "./services/TokenService";
import { UserState } from "./types";

export const userState = atom<UserState | null>({
  key: "userState",
  default: null,
});

export const userToken = atom<string | null>({
  key: "token",
  default: TokenService.get(),
});
