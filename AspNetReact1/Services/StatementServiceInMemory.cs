using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetReact1.Services
{
    public class StatementServiceInMemory : IStatementService
    {
        private static IEnumerable<Statement> Statements = new List<Statement>() {
            new Statement(01, "title01", "description from server in memory 01"),
            new Statement(02, "title02", "description from server in memory 02"),
            new Statement(03, "title03", "description from server in memory 03"),
            new Statement(04, "title04", "description from server in memory 04"),
            new Statement(05, "title05", "description from server in memory 05")
        };

        public Statement FindByNumber(int num)
        {
            return Statements.FirstOrDefault(stmt => stmt.Number == num);
        }

        public Statement FindByTitle(string title)
        {
            return Statements.FirstOrDefault(stmt => stmt.Title == title);
        }

        public IEnumerable<Statement> GetAll()
        {
            return Statements;
        }
    }
}
