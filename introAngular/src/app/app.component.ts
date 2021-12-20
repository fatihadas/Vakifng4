import { Component } from '@angular/core';
import { TodoItem } from './models/todo-item.model';
import { items } from './models/todo-items.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'introAngular';
  creator : string = 'Türkay Ürkmez'
  isChecked: boolean = true; 


  items:TodoItem[] = items;

  isAllTaskShowing:boolean = true;

  //item:TodoItem = new TodoItem('çiçek sula',false);
  getIncompletedTaskCount():number{
     return this.items.filter(x=>!x.isDone).length;
  }

  filter():void{
      this.isAllTaskShowing = !this.isAllTaskShowing;
      !this.isAllTaskShowing ? this.items = this.items.filter(x=>!x.isDone):
                               this.items= items;
      
  }
  getFilterButtonText():string{
    if (this.isAllTaskShowing) {
      return "Yapılmamış işleri göster";
    }
    else{
      return "Tümünü göster";
    }
  }

  addNewItem(task:string):void{
    this.items.push(new TodoItem(task,false));
  }
}
