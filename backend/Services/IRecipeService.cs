using Fire_Kitchen.Models.DTO;

namespace Fire_Kitchen.Services
{
    public interface IRecipeService
    {
        Task<ResponseDTO> Create(RecipeDTO recipeDTO);
        Task<ResponseDTO> GetAll();
        Task<ResponseDTO?> GetById(Guid id);
        Task<ResponseDTO?> GetByAuthor(string author);
        Task<ResponseDTO?> UpdateById(RecipeDTO recipeDTO);
        Task<ResponseDTO?> DeleteById(Guid id);
    }
}
