using aflir2.api.Data;
using aflir2.api.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace aflir2.api.Domains.Person
{
    public static class PersonAdd
    {
        public record Command(Person person) : IRequest<Person>;

        public class Handler : IRequestHandler<Command, Person>
        {
            private readonly IPersonRepository _personRepository;

            public Handler(IPersonRepository personRepository)
            {
                _personRepository = personRepository;
            }


            public async Task<Person> Handle(Command request, CancellationToken cancellationToken)
            {
                try
                {
                    request.person.Id = Guid.NewGuid();

                    var trackedEntity = await _personRepository.Add(request.person);

                    if (trackedEntity.State == EntityState.Unchanged)
                    {
                        return trackedEntity.Entity;
                    }
                    else
                    {
                        throw new AfliException("Unable to insert", System.Net.HttpStatusCode.BadRequest, Enums.ErrorCodes.Error);
                    }
                }
                catch (Exception ex)
                {
                    throw new AfliException(ex.Message, System.Net.HttpStatusCode.BadRequest, Enums.ErrorCodes.Error);
                }

            }
        }

    }
}
