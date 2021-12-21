import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input('active') course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
