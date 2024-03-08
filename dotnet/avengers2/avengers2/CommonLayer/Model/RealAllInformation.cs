namespace avengers2.CommonLayer.Model
{
    public class ReadAllInformationResponse
    {
        public bool IsSuccess { get; set; }
        public string? Message { get; set; }
        public List<GetReadAllInformation>? readAllInformation { get; set; }
    }

    public class GetReadAllInformation
    {
        public int id { get; set; }
        public string? UserName { get; set; }
        public string? EmailID { get; set; }
        public string? MobileNumber { get; set; }
    }
}
