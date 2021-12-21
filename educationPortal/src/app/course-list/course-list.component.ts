import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { Courses } from '../models/mocks/courses.mock';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[]= Courses;

  constructor() { }

  searchWord:string;

  ngOnInit(): void {
  }

}
