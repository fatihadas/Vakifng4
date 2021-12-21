using CourseCatalogue.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseCatalogue.API.Services
{
    public class CategoryService
    {
        List<Category> categories;
        public CategoryService()
        {
            categories = new List<Category>
            {
                new Category{ Id =1, Name="Yazılım"},
                new Category{ Id =2, Name="Devops"},
                new Category{ Id =3, Name="Kişisel Gelişim"},
                new Category{ Id =4, Name="Bankacılık"},

            };


           
        }

        public List<Category> GetCategories()
        {
            return categories;
        }


    }
}
