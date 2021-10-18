using System;
using System.ComponentModel.DataAnnotations;

namespace aflir2.api.Domains.Person
{

    public class Person
    {
        [Key]
        public Guid Id { get; set; } 
        
        public string LastName { get; set; }    
        public string FirstName { get; set; }
        public DateTime DateOfBirth { get; set; }
    }


}
