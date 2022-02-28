import { Component, VERSION } from '@angular/core';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  styles: ['h1 { color: red; }']
})

export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  keyword = '';

  todoItems=[{
    id: 1,
    value: 'Todo Item No.1',
    done: false
  },{
    id: 2,
    value: 'Todo Item No.2',
    done: true
  }];

  reset(){
    this.keyword = '';
  }

  itemClick(item) {
    item.done = !item.done;
  }

}
