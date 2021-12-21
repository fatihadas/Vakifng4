import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {path:'', component:CourseListComponent},
  {path:'kurslar', component:CourseListComponent},
  {path:'kategoriler', component:CategoryMenuComponent},
  {path:'kurslar/kategori/:categoryId', component:CourseListComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
