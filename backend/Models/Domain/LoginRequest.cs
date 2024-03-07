using System.ComponentModel.DataAnnotations;

namespace Fire_Kitchen.Models.Domain
{
    public class LoginRequest
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
