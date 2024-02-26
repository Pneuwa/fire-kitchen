using Fire_Kitchen.Models.Domain;
using Fire_Kitchen.Models.DTO;
using Fire_Kitchen.Repositories;

namespace Fire_Kitchen.Services
{
    public class RecipeService : IRecipeService
    {
        private readonly IRecipeRepository _recipeRepository;
        private readonly ResponseDTO _response;

        public RecipeService(IRecipeRepository recipeRepository)
        {
            _recipeRepository = recipeRepository;
            _response = new();
        }
        public async Task<ResponseDTO> Create(RecipeDTO recipeDTO)
        {
            if(recipeDTO is null)
            {
                _response.Data = null;
                _response.Error = true;
                _response.Message = "Recipe could not created";
                return _response;
            }
            var recipe = new Recipe
            {
                Title = recipeDTO.Title,
                Instructions = recipeDTO.Instructions,
                Ingredients = recipeDTO.Ingredients,
                Author = recipeDTO.Author,
                ImageUrl = recipeDTO.ImageUrl,
            };
            await _recipeRepository.CreateAsync(recipe);
            _response.Data = recipeDTO;
            return _response;
        }

        public async Task<ResponseDTO?> DeleteById(Guid id)
        {
            var deletedRecipe = await _recipeRepository.DeleteByIdAsync(id);
            if (deletedRecipe is null)
            {
                _response.Data = null;
                _response.Error = true;
                _response.Message = "Recipe could not deleted";
                return _response;
            }
            _response.Data = deletedRecipe;
            _response.Message = $"Recipe ID:{id} has been deleted";
            return _response;
        }

        public async Task<ResponseDTO> GetAll()
        {
            IEnumerable<Recipe> recipes = await _recipeRepository.GetAllAsync();
            if(recipes is null)
            {
                _response.Data = null;
                _response.Error = true;
                _response.Message = "Recipes are not found";
                return _response;
            }
            var recipeDTO = new List<RecipeDTO>();
            foreach (var recipe in recipes)
            {
                recipeDTO.Add(new RecipeDTO()
                {
                    Id = recipe.Id,
                    Title = recipe.Title,
                    Ingredients = recipe.Ingredients,
                    Instructions = recipe.Instructions,
                    Author = recipe.Author,
                    ImageUrl = recipe.ImageUrl,
                });
            }
            _response.Data = recipeDTO;
            return _response;
        }

        public async Task<ResponseDTO?> GetById(Guid id)
        {
            var selectedRecipe = await _recipeRepository.GetByIdAsync(id);
            if (selectedRecipe is null)
            {
                _response.Data = null;
                _response.Error = true;
                _response.Message = $"Selected recipe with ID: {id} is not found";
                return _response;
            }
            var recipeDTO = new RecipeDTO()
            {
                Id = selectedRecipe.Id,
                Title = selectedRecipe.Title,
                Ingredients = selectedRecipe.Ingredients,
                Instructions = selectedRecipe.Instructions,
                Author = selectedRecipe.Author,
                ImageUrl = selectedRecipe.ImageUrl,
            };
            _response.Data = recipeDTO;
            return _response;
        }

        public async Task<ResponseDTO?> GetByAuthor(string author)
        {
            IEnumerable<Recipe> authorRecipes = await _recipeRepository.GetByAuthorAsync(author);
            if(authorRecipes is null)
            {
                _response.Data = null;
                _response.Error = true;
                _response.Message = $"{author} has not any recipes";
                return _response;
            }
            var recipeDTO = new List<RecipeDTO>();
            foreach (var recipe in authorRecipes)
            {
                recipeDTO.Add(new RecipeDTO()
                {
                    Id = recipe.Id,
                    Title = recipe.Title,
                    Ingredients = recipe.Ingredients,
                    Instructions = recipe.Instructions,
                    Author = recipe.Author,
                    ImageUrl = recipe.ImageUrl,
                });
            }
            _response.Data = recipeDTO;
            return _response;
        }

        public async Task<ResponseDTO?> UpdateById(RecipeDTO recipeDTO)
        {
            var updatedRecipeModel = new Recipe()
            {
                Id = recipeDTO.Id,
                Title = recipeDTO.Title,
                Ingredients = recipeDTO.Ingredients,
                Instructions = recipeDTO.Instructions,
                Author = recipeDTO.Author,
                ImageUrl = recipeDTO.ImageUrl,
            };
            var updatedRecipe = await _recipeRepository.UpdateByIdAsync(updatedRecipeModel);
            if (updatedRecipe is null)
            {
                _response.Data = null;
                _response.Error = true;
                _response.Message = $"Selected recipe with ID: {recipeDTO.Id} is not found";
                return _response;
            }
            var updatedRecipeDTO = new RecipeDTO()
            {
                Id = updatedRecipe.Id,
                Title = updatedRecipe.Title,
                Ingredients = updatedRecipe.Ingredients,
                Instructions = updatedRecipe.Instructions,
                Author = updatedRecipe.Author,
                ImageUrl = updatedRecipe.ImageUrl,
            };
            _response.Data = updatedRecipeDTO;
            return _response;
        }
    }
}
