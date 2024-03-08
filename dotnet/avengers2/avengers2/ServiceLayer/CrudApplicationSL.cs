using avengers2.CommonLayer.Model;
using avengers2.RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace avengers2.ServiceLayer
{
    public class CrudApplicationSL : ICRudApplicationSL
    {
        public readonly ICRudApplicationRL _cRudApplicationRL;
        public CrudApplicationSL(ICRudApplicationRL cRudApplicationRL) {
            _cRudApplicationRL = cRudApplicationRL;
        }

        public async Task<ViewUserInformationResponse> AddInformation(ViewUserInformationRequest request)
        {
            ViewUserInformationResponse response = new ViewUserInformationResponse();
            if (String.IsNullOrEmpty(request.UserName)) { 
            response.IsSuccess = false;
                response.Message = "Username Can not null";
                return response;
            }
            return await _cRudApplicationRL.AddInformation(request);
        }

        public async Task<ReadAllInformationResponse> ReadAllInformation() {
            return await _cRudApplicationRL.ReadAllInformation();
        }
    }
}
