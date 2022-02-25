using aflir2.api.Domains.Person;
using aflir2.api.Exceptions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace aflir2.api.Data
{
    public class PersonRepository : IPersonRepository
    {
        private readonly Aflir2DbContext _context;
        public PersonRepository(Aflir2DbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Person>> GetAllAsync()
        {
            return await _context.Persons.ToListAsync();
        }

        public async Task<Person> GetById(Guid id)
        {
            return await _context.Persons.FirstOrDefaultAsync(o => o.Id == id);
        }

        public async Task<EntityEntry<Person>> Add(Person person)
        {
            try
            {
                var result =  await _context.AddAsync(person);
                await _context.SaveChangesAsync();
                return result;
            }
            catch (SqlException ex)
            {
                throw new AfliException(ex.Message, System.Net.HttpStatusCode.BadRequest, Enums.ErrorCodes.Database);
            }
            catch (Exception ex)
            {
                throw new AfliException(ex.Message, System.Net.HttpStatusCode.BadRequest, Enums.ErrorCodes.Error);
            }
        }

    }
}
