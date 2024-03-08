using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace avengers2.CommonUtlity
{
    public class SqlQueries
    {
        public static IConfiguration _configuration = new ConfigurationBuilder().AddXmlFile("SqlQueries.xml",true,true).Build();
        public static string AddInformation { get { return _configuration["AddInformation"]; } }
        public static string ReadAllInformation { get { return _configuration["ReadAllInformation"]; } }
    }
}
