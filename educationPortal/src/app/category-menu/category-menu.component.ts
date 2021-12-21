import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, mapTo, tap } from 'rxjs';
import { Category } from '../models/category.model';
import { Categories } from '../models/mocks/category.mock';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private categorySerice:CategoryService) { }

  categories:Category[];

  ngOnInit(): void {
    this.categorySerice.getAllCategories()                 
                       .subscribe((data:Category[])=> this.categories = data);

    }

}
