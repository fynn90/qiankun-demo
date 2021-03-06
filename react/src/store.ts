import { atom } from 'recoil';

export const todoListState = atom<IToDoItem[]>({
  key: 'todoListState',
  default: [],
});

export class MicroAppStateActions {
  private static microAppInstance: MicroAppStateActions;
  public onGlobalStateChange;
  public setGlobalState;
  public offGlobalStateChange;
  private constructor() {}

  public static getInstance() {
    if (!MicroAppStateActions.microAppInstance) {
      MicroAppStateActions.microAppInstance = new MicroAppStateActions();
    }
    return MicroAppStateActions.microAppInstance;
  }
  public setMicroAppStateActions(
    onGlobalStateChange,
    setGlobalState,
    offGlobalStateChange
  ) {
    MicroAppStateActions.microAppInstance.onGlobalStateChange = onGlobalStateChange;
    MicroAppStateActions.microAppInstance.setGlobalState = setGlobalState;
    MicroAppStateActions.microAppInstance.offGlobalStateChange = offGlobalStateChange;
  }
}
