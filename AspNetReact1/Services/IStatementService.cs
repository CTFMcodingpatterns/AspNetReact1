using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetReact1.Services
{
    public interface IStatementService
    {
        IEnumerable<Statement> GetAll();
        Statement FindByTitle(string title);
        Statement FindByNumber(int num);
    }
}
