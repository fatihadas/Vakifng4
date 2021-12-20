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

  items:string[] =[
    'Fethiye','Eskişehir','İzmir'
  ] 

  item:TodoItem = new TodoItem('çiçek sula',false);
}
