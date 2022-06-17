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
  page: 1,
};
export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: ModalState,
})

const InfoState = {
  nickname: '',
  grade: '',
  major: '',
  univercity: '',
};
export const infoState = atom<any>({
  key: 'infoState',
  default: InfoState,
})

const UniState = {
  nickname: '',
  grade: '',
  major: '',
};
export const uniState = atom<any>({
  key: 'infoState',
  default: InfoState,
})

