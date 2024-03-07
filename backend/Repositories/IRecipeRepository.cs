using Fire_Kitchen.Models.Domain;

namespace Fire_Kitchen.Repositories
{
    public interface IRecipeRepository
    {
        Task<Recipe> CreateAsync(Recipe recipe);
        Task<IEnumerable<Recipe>> GetAllAsync();
        Task<Recipe?> GetByIdAsync(Guid id);
        Task<IEnumerable<Recipe>> GetByAuthorIdAsync(string authorId);
        Task<Recipe?> UpdateByIdAsync(Recipe recipe);
        Task<Recipe?> DeleteByIdAsync(Guid id);
    }
}
