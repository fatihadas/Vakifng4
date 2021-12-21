import { Comment } from "../comment.model"
import { Course } from "../course.model"

export const Courses : Course[] = [
    new Course(1, 'Angular', 'Angular ile temel uygulama geliştirme', 4.8, 1,[
        new Comment(1,'Eğlenceli'),
        new Comment(2,'Eğitici'),
        
    ]),
    new Course(2, 'React', 'Angular ile temel uygulama geliştirme', 4.8, 1,[
        new Comment(1,'Eğlenceli'),
        new Comment(2,'Eğitici'),
        
    ]),
    new Course(3, 'Mülakat Teknikleri', 'Angular ile temel uygulama geliştirme', 4.8, 2,[
        new Comment(1,'Eğlenceli'),
        new Comment(2,'Eğitici'),
        
    ])

    
]