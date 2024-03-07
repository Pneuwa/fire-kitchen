namespace Fire_Kitchen.Models.DTO
{
    public class RecipeDTO
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Ingredients { get; set; }
        public string Instructions { get; set; }
        public string Author { get; set; }
        public string AuthorId { get; set; }
        public string ImageUrl { get; set; }
    }
}
