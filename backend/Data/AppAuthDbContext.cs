using Fire_Kitchen.Models.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Fire_Kitchen.Data
{
    public class AppAuthDbContext : IdentityDbContext<AppUser>
    {
        public AppAuthDbContext(DbContextOptions<AppAuthDbContext> options) : base(options) { }

        public DbSet<AppUser> AppUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
