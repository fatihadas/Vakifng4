import { Component } from '@angular/core';
import { TodoItem } from './models/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'introAngular';
  creator : string = 'Türkay Ürkmez'
  isChecked: boolean = true;

  items:TodoItem[] =[
    new TodoItem("Dolar al", false),
    new TodoItem("BTC al",true),
    new TodoItem('Angular Öğren',false),
    new TodoItem('Yurtdışı remote iş bul',false)
  ] 

  //item:TodoItem = new TodoItem('çiçek sula',false);
}
