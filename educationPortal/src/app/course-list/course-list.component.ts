import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course.model';
import { Courses } from '../models/mocks/courses.mock';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[]= Courses;

  constructor(private activeRoute: ActivatedRoute) { }

  searchWord:string;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(x=>console.log(x["categoryId"]));
  }

}
