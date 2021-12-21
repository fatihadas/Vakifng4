import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

  transform(value: Course[], searchString:string): Course[] {
    return searchString !== undefined ?
           value.filter(c=>c.title?.toLowerCase().includes(searchString.toLowerCase()))
           :
           value;
  }

}
