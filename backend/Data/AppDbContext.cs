using Fire_Kitchen.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Fire_Kitchen.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions) { }

        public DbSet<Recipe> Recipes { get; set; }
    }
}
