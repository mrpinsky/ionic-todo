import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})
export class TodoPage {
  tasks: Array<{title: string, checked: boolean}>;

  constructor(public navCtrl: NavController) {
    this.tasks = [];
  }

  addTask(input) {
    this.tasks.push({
      title: input.value,
      checked: false
    });
    input.value = '';
  }
}
