using avengers2.CommonLayer.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace avengers2.ServiceLayer
{
    public interface ICRudApplicationSL
    {
        public Task<ViewUserInformationResponse> AddInformation(ViewUserInformationRequest request);
        public Task<ReadAllInformationResponse> ReadAllInformation();
    }
}
