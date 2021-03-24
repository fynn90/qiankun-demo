import { atom } from 'recoil';

export const todoListState = atom<IToDoItem[]>({
  key: 'todoListState',
  default: [],
});
