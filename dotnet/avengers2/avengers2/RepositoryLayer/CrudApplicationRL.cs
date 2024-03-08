using avengers2.CommonLayer.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MySqlConnector;
using avengers2.CommonUtlity;
using System.Runtime.InteropServices;

namespace avengers2.RepositoryLayer
{
    public class CrudApplicationRL : ICRudApplicationRL
    {
        public readonly IConfiguration _configuration;
        public readonly MySqlConnection _mySqlConnection;
        public CrudApplicationRL(IConfiguration configuration) {
            _configuration = configuration;
            _mySqlConnection = new MySqlConnection(_configuration["ConnectionStrings:Default"]);
                }
        public async Task<ViewUserInformationResponse> AddInformation(ViewUserInformationRequest request)
        {
            ViewUserInformationResponse response = new ViewUserInformationResponse();
            response.IsSuccess = true;
            response.Message = "Success";
            try
            {
                if (_mySqlConnection.State != System.Data.ConnectionState.Open)
                {
                    await _mySqlConnection.OpenAsync();
                }
                using (MySqlCommand sqlCommand = new MySqlCommand(SqlQueries.AddInformation, _mySqlConnection))
                {
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue("@UserName", request.UserName);
                    sqlCommand.Parameters.AddWithValue("@EmailID", request.EmailID);
                    sqlCommand.Parameters.AddWithValue("@MobileNumber", request.MobileNumber);
                    int Status = await sqlCommand.ExecuteNonQueryAsync();
                    if (Status <= 0)
                    {
                        response.IsSuccess = false;
                        response.Message = "Query Not Executed";
                        return response;
                    }
                }
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally { 
                await _mySqlConnection.CloseAsync();
                await _mySqlConnection.DisposeAsync();
            }
            return response;
        }

        public async Task<ReadAllInformationResponse> ReadAllInformation()
        {
            ReadAllInformationResponse response = new ReadAllInformationResponse();
            response.IsSuccess = true;
            response.Message = "Success";
            try {
                if (_mySqlConnection.State != System.Data.ConnectionState.Open)
                {
                    await _mySqlConnection.OpenAsync();
                }

                using (MySqlCommand sqlCommand = new MySqlCommand(SqlQueries.ReadAllInformation, _mySqlConnection))
                    {
                        try { 
                           sqlCommand.CommandType = System.Data.CommandType.Text;
                            sqlCommand.CommandTimeout = 180;
                            using ( MySqlDataReader dataReader = await sqlCommand.ExecuteReaderAsync()) 
                            {
                                if (dataReader.HasRows)
                                {
                                    response.readAllInformation = new List<GetReadAllInformation>();
                                    while (await dataReader.ReadAsync())
                                    {
                                        GetReadAllInformation getdata = new GetReadAllInformation();
                                        getdata.id = dataReader["id"] != DBNull.Value ? Convert.ToInt32(dataReader["id"]) : 0;
                                        getdata.UserName = dataReader["UserName"] != DBNull.Value ? Convert.ToString(dataReader["UserName"]) : String.Empty;
                                        getdata.EmailID = dataReader["EmailID"] != DBNull.Value ? Convert.ToString(dataReader["EmailID"]) : String.Empty;
                                        getdata.MobileNumber = dataReader["MobileNumber"] != DBNull.Value ? Convert.ToString(dataReader["MobileNumber"]) : String.Empty;
                                        response.readAllInformation.Add(getdata);
                                    }
                                }
                                else { 
                                    response.IsSuccess = false;
                                    response.Message = "Record Not Found";
                                }
                            }
                        }

                        catch (Exception ex) {
                            response.IsSuccess = false;
                            response.Message = ex.Message;
                        }
                        finally {
                          await sqlCommand.DisposeAsync();
                        }
                    }
                
            }
            catch (Exception ex) {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally
            {
                await _mySqlConnection.CloseAsync();
                await _mySqlConnection.DisposeAsync();
            }
            return response;
        }
    }
}
