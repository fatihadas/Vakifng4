import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, mapTo, tap } from 'rxjs';
import { Category } from '../models/category.model';
import { Categories } from '../models/mocks/category.mock';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  categories:Category[];

  ngOnInit(): void {
    this.httpClient.get<Category[]>('https://mocki.io/v1/cc7c4967-c0b5-42cc-861e-07f78880eecf')
                   .pipe(tap(x=>console.log(x)),
                         map((data:Category[],index:Number)=>{
                           let newArray = data.map((value:Category)=>new Category(value.id, "gelen: "+value.name))
                           return newArray
                         }),                        
                        )
                   .subscribe((data:Category[])=> this.categories = data);

    }

}
