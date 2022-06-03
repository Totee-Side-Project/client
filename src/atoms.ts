import { atom } from 'recoil';
import TokenService from './services/TokenService';
import { ModalStateType, UserState } from './types';

export const userState = atom<UserState | null>({
  key: 'userState',
  default: null,
});

export const userToken = atom<string | null>({
  key: 'token',
  default: TokenService.get(),
});

const ModalState = {
  isOpen: false,
  type: 'signIn' as ModalStateType['type'],
  title: '',
  content: '',
  page: 0,
};
export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: ModalState,
});
