import {
  Component,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { uuid } from './tools';
import { MicroAppStateActions } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterContentInit {
  constructor(private cd: ChangeDetectorRef) {}
  inputValue = new FormControl('');
  todoList: IToDoItem[] = [];
  ngAfterContentInit(): void {
    const MicroAppStateInstance = MicroAppStateActions.getInstance();
    if (MicroAppStateInstance.onGlobalStateChange) {
      let self = this;
      MicroAppStateInstance.onGlobalStateChange((newGlobalState: any) => {
        if (newGlobalState['ng-app'].length) {
          for (const item of newGlobalState['ng-app']) {
            // self.todoList.push({
            //   ...item,
            // });
            self.todoList = self.todoList.concat([{ ...item }]);
          }
          MicroAppStateInstance.setGlobalState({ 'ng-app': [] });
          this.cd.detectChanges();
        }
      });
    }
  }

  add() {
    if (this.inputValue.value) {
      this.todoList.push({
        value: this.inputValue.value,
        id: uuid(),
        from: 'Ng',
      });
      this.inputValue.setValue('');
    }
  }

  sendOtherService(targetServiceKey: string) {
    const MicroAppStateInstance = MicroAppStateActions.getInstance();
    MicroAppStateInstance.setGlobalState({
      [targetServiceKey]: [
        { value: this.inputValue.value, id: uuid(), from: 'Ng' },
      ],
    });
    this.inputValue.setValue('');
    this.cd.detectChanges();
  }

  rm(id: string) {
    this.todoList = this.todoList.filter((v) => v.id !== id);
    this.cd.detectChanges();
  }
}
