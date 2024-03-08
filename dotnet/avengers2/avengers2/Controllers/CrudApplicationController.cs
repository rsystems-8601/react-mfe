using avengers2.CommonLayer.Model;
using avengers2.ServiceLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace avengers2.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CrudApplicationController : ControllerBase
    {
        public readonly ICRudApplicationSL _cRudApplicationSL;
        public CrudApplicationController(ICRudApplicationSL cRudApplicationSL) {
            _cRudApplicationSL = cRudApplicationSL;
        }

        [HttpPost]
        public async Task<IActionResult> AddInformation(ViewUserInformationRequest request) {
            ViewUserInformationResponse response = new ViewUserInformationResponse();
            try {
                response = await _cRudApplicationSL.AddInformation(request);
            }
            catch (Exception ex) { 
                response.IsSuccess = false;
                response.Message = ex.Message;

            }
            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> ReadAllInformation()
        {
            ReadAllInformationResponse response = new ReadAllInformationResponse();
            try
            {
                response = await _cRudApplicationSL.ReadAllInformation();
                if (!response.IsSuccess) { 
                return BadRequest(new { IsSuccess = response.IsSuccess, Message = response.Message , Data=response.readAllInformation});
                }
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
                return BadRequest(new { IsSuccess = response.IsSuccess, Message = response.Message });

            }
            return Ok(new { IsSuccess = response.IsSuccess, Message = response.Message, Data = response.readAllInformation });
        }

    }
}
