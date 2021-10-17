using MediatR;
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

 


    public static class Queries
    {
        // Query
        // All data we need ti execute
        public record Query(Guid id) : IRequest<Response>;


        // Handler
        // All the business logic to execute, Returns a response.
        //public class Handler : IRequestHandler<Query, Response>
        //{
        //    private readonly PersonRepository PersonRepository { get; }
        //    public Handler(PersonRepository personRepository)
        //    {
        //        PersonRepository = personRepository;
        //    }


        //    public Task<Response> Handle(Query request, CancellationToken cancellationToken)
        //    {
        //        // All the logic



        //    }
        //}


        // Response
        // The data we want to return.
        public record Response(Guid id, Person person);
    }


}
