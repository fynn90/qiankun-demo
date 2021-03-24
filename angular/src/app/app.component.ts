import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { uuid } from './tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  inputValue = new FormControl('');
  todoList: IToDoItem[] = [];

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

  rm(id: string) {
    this.todoList = this.todoList.filter((v) => v.id !== id);
  }
}
