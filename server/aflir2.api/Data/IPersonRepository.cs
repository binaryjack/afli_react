using aflir2.api.Domains.Person;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace aflir2.api.Data
{
    public interface IPersonRepository
    {
        Task<IEnumerable<Person>> GetAllAsync();
        Task<Person> GetById(Guid id);
        Task<EntityEntry<Person>> Add(Person person);
    }
}
