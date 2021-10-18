using aflir2.api.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace aflir2.api.Domains.Person
{
    public static class GetAllPersons
    {
        // Query
        // All data we need ti execute
        public record Query() : IRequest<Response>;


        //Handler
        //All the business logic to execute, Returns a response.
        public class Handler : IRequestHandler<Query, Response>
        {
            private readonly IPersonRepository _personRepository;
            public Handler(IPersonRepository personRepository)
            {
                _personRepository = personRepository;
            }


            public async Task<Response> Handle(Query request, CancellationToken cancellationToken)
            {
                var persons = await _personRepository.GetAllAsync();
                return persons == null ? null : new Response(persons);
            }
        }


        // Response
        // The data we want to return.
        public record Response(IEnumerable<Person> person);
    }

    public static class GetPersonById
    {
        // Query
        // All data we need ti execute
        public record Query(Guid id) : IRequest<Response>;


        //Handler
        //All the business logic to execute, Returns a response.
        public class Handler : IRequestHandler<Query, Response>
        {
            private readonly IPersonRepository _personRepository;
            public Handler(IPersonRepository personRepository)
            {
                _personRepository = personRepository;
            }


            public async Task<Response> Handle(Query request, CancellationToken cancellationToken)
            {
                var person = await _personRepository.GetById(request.id);
                return person == null ? null : new Response(request.id, person);
            }
        }


        // Response
        // The data we want to return.
        public record Response(Guid id, Person person);
    }




}
