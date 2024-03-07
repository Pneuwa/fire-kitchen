using Microsoft.AspNetCore.Identity;

namespace Fire_Kitchen.Models.Domain
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
