using Microsoft.EntityFrameworkCore;
using TarefasApi.Models;

namespace TarefasApi.Data
{
    public class TarefaContext : DbContext
    {
        public TarefaContext(DbContextOptions<TarefaContext> options)
            : base(options) { }

        public DbSet<Tarefa> Tarefas { get; set; }
    }
}
