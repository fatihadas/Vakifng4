import { Comment } from './comment.model'

export class Course{
    constructor(public id?:number,
                public title?:string,
                public description?:string,
                public rating?:number,
                public categoryId?:number,
                public comments?:Comment[]
               ){

               }
}