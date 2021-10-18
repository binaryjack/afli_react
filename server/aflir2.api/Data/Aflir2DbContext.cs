using aflir2.api.Domains.Person;
using Microsoft.EntityFrameworkCore;

namespace aflir2.api.Data
{

    /// <summary>
    /// https://www.youtube.com/watch?v=RuHfCBxkbeI
    /// 
    /// </summary>
    public class Aflir2DbContext : DbContext
    {
        public Aflir2DbContext(DbContextOptions options) : base(options)
        {
           
        }
        public DbSet<Person> Persons {  get; set; }


    }



}
