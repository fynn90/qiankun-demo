interface IToDoItem {
  value: string;
  id: string;
  from: 'Vue' | 'React' | 'Ng';
}

interface IState {
  list: IToDoItem[];
}
