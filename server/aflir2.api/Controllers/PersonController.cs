using aflir2.api.Domains.Person;
using aflir2.api.Exceptions;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;
using System.Threading.Tasks;

namespace aflir2.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IMediator mediator;

        public PersonController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {
            var response = await mediator.Send(new GetAllPersons.Query());
            return response == null ? throw new AfliException("No person found", System.Net.HttpStatusCode.NotFound, Enums.ErrorCodes.Information) : Ok(response);
        }

        [HttpGet("/{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var response = await mediator.Send(new GetPersonById.Query(id));
            return response == null ? throw new AfliException("No person found", System.Net.HttpStatusCode.NotFound, Enums.ErrorCodes.Information) : Ok(response);
        }

        [HttpPost("")]
        public async Task<IActionResult> Add([FromBody] Person person)
        {
            var result = await mediator.Send(new PersonAdd.Command(person));
            return result == null ?
                throw new AfliException("Unable to add", System.Net.HttpStatusCode.BadRequest, Enums.ErrorCodes.Error) : 
                Ok(JsonSerializer.Serialize(result));    
        }

    }
}
