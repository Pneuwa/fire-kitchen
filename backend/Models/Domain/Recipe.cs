using System.ComponentModel.DataAnnotations;

namespace Fire_Kitchen.Models.Domain
{
    public class Recipe
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Ingredients { get; set; }
        [Required]
        public string Instructions { get; set; }
        [Required]
        public string Author { get; set; }
        [Required] 
        public string AuthorId { get; set; }
        [Required]
        public string ImageUrl { get; set; }
    }
}
