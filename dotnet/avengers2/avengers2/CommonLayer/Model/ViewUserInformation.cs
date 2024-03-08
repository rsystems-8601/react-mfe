using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace avengers2.CommonLayer.Model
{
    public class ViewUserInformationRequest
    {
        public string UserName { get; set; }
        public string EmailID { get; set; }
        public string MobileNumber { get; set; }
    }

    public class ViewUserInformationResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
