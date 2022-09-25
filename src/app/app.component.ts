import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskInput: any;
  listOfTask: Array<string> = [];

  addTask() {
    this.listOfTask.push(this.taskInput);
    this.taskInput=''
  }

  removeTask(item: number) {
    if (item > -1) {
      this.listOfTask.splice(item, 1);
    }
  }
}
