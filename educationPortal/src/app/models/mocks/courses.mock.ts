import { Comment } from "../comment.model"
import { Course } from "../course.model"

export const Courses : Course[] = [
    new Course(1, 'ANGULAR Eğitimi', 'Angular ile temel uygulama geliştirme', 0.96, 1,[
        new Comment(1,'Eğlenceli'),
        new Comment(2,'Eğitici'),
        
    ]),
    new Course(2, 'REACT EĞİTİMİ', 'Angular ile temel uygulama geliştirme', 0.98, 1,[
        new Comment(1,'Eğlenceli'),
        new Comment(2,'Eğitici'),
        
    ]),
    new Course(3, 'mülakat TEKNİKLERİ', 'Angular ile temel uygulama geliştirme', 0.95, 2,[
        new Comment(1,'Eğlenceli'),
        new Comment(2,'Eğitici'),
        
    ])

    
]