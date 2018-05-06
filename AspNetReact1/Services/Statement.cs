using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetReact1.Services
{
    public class Statement
    {
        public int Number { get; }
        public string Title { get; }
        public string Description { get; }

        public Statement(int num, string title, string desc)
        {
            this.Number = num;
            this.Title = title;
            this.Description = desc;
        }
    }
}
