using aflir2.api.Enums;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace aflir2.api.Exceptions.Middleware
{
    public class GenericExceptionMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {

            try
            {
                await next(context);
            }
            catch (AfliException ex)
            {
                context.Response.StatusCode = (int)ex.HttpStatusCode;
                context.Response.Headers.Add("Content-Type", "application/json");
                context.Response.Headers.Add("error-code-label", $"{ex.ErrorCode.ToString()}");
                context.Response.Headers.Add("error-code", $"{(int)ex.ErrorCode}");
                await context.Response.WriteAsync(ex.Message);
                
            }
        }
    }
}
