using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetReact1.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetReact1.Controllers
{
    [Produces("application/json")]
    [Route("api/Statement")]
    public class StatementController : Controller
    {
        private IStatementService Service { get; set; }

        public StatementController(IStatementService service = null)
        {
            this.Service = service ?? new StatementServiceInMemory();
        }

        // GET: api/Statement
        [HttpGet]
        public IEnumerable<Statement> GetAll()
        {
            IEnumerable<Statement> statements = Service.GetAll();
            return statements;
        }

        // GET: api/Statement/5
        [HttpGet("{id}", Name = "Get")]
        public Statement Get(int id)
        {
            Statement statement = Service.FindByNumber(id);
            return statement;
        }
        
        // POST: api/Statement
        [HttpPost]
        public void Post([FromBody]Statement statement)
        {
            //TODO
            //Service.Add(statement);
        }
        
        // PUT: api/Statement/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Statement statement)
        {
            //TODO
            //Service.Update(id, statement);
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //TODO
            //Service.Delete(id);
        }
    }
}
