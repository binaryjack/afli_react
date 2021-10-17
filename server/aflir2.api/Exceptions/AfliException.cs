using aflir2.api.Enums;
using System;
using System.Net;

namespace aflir2.api.Exceptions
{
    public class AfliException : Exception
    {
        public AfliException(string message, HttpStatusCode code, ErrorCodes errorCode) : base(message)
        {
            HttpStatusCode = code;
            ErrorCode = errorCode;
        }

        public ErrorCodes ErrorCode { get; set; }
        public HttpStatusCode HttpStatusCode { get; set; }

    }
}
