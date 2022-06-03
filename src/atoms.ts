import { atom } from 'recoil';
import TokenService from './services/TokenService';
import { ModalState, UserState } from './types';

export const userState = atom<UserState | null>({
  key: 'userState',
  default: null,
});

export const userToken = atom<string | null>({
  key: 'token',
  default: TokenService.get(),
});

export const modalState = atom<ModalState | null>({
  key: 'modalState',
  default: null,
});
