using System.ComponentModel.DataAnnotations;

namespace Fire_Kitchen.Models.Domain
{
    public class User
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
    }
}
