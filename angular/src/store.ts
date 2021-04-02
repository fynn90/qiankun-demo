export class MicroAppStateActions {
  private static microAppInstance: MicroAppStateActions;
  public onGlobalStateChange: any;
  public setGlobalState: any;
  public offGlobalStateChange: any;
  private constructor() {}

  public static getInstance() {
    if (!MicroAppStateActions.microAppInstance) {
      MicroAppStateActions.microAppInstance = new MicroAppStateActions();
    }
    return MicroAppStateActions.microAppInstance;
  }
  public setMicroAppStateActions(
    onGlobalStateChange: any,
    setGlobalState: any,
    offGlobalStateChange: any
  ) {
    MicroAppStateActions.microAppInstance.onGlobalStateChange = onGlobalStateChange;
    MicroAppStateActions.microAppInstance.setGlobalState = setGlobalState;
    MicroAppStateActions.microAppInstance.offGlobalStateChange = offGlobalStateChange;
  }
}
