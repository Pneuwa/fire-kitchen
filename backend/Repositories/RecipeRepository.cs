using Fire_Kitchen.Data;
using Fire_Kitchen.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Fire_Kitchen.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly AppDbContext _db;

        public RecipeRepository(AppDbContext db)
        {
            _db = db;
        }
        public async Task<Recipe> CreateAsync(Recipe recipe)
        {
            await _db.Recipes.AddAsync(recipe);
            await _db.SaveChangesAsync();
            return recipe;
        }

        public async Task<IEnumerable<Recipe>> GetAllAsync()
        {
            return await _db.Recipes.ToListAsync();
        }

        public async Task<Recipe?> GetByIdAsync(Guid id)
        {
            var selectedRecipe = await _db.Recipes.FindAsync(id);
            if(selectedRecipe is null) { 
            return null;
            }
            return selectedRecipe;
        }

        public async Task<IEnumerable<Recipe>> GetByAuthorIdAsync(string authorId)
        {
            var authorRecipes = await _db.Recipes.Where(recipe => recipe.AuthorId == authorId).ToListAsync();
            if (authorRecipes is null)
            {
                return null;
            }
            return authorRecipes;
        }

        public async Task<Recipe?> UpdateByIdAsync(Recipe recipe)
        {
            var updatedRecipe = await _db.Recipes.FindAsync(recipe.Id);
            if (updatedRecipe is null)
            {
                return null;
            }
            //updatedRecipe.Id = recipe.Id;
            updatedRecipe.Title = recipe.Title;
            updatedRecipe.Ingredients = recipe.Ingredients;
            updatedRecipe.Instructions = recipe.Instructions;
            //updatedRecipe.Author = recipe.Author;
            updatedRecipe.ImageUrl = recipe.ImageUrl;
            await _db.SaveChangesAsync();
            return updatedRecipe;
        }
        public async Task<Recipe?> DeleteByIdAsync(Guid id)
        {
            var deletedRecipe = await _db.Recipes.FindAsync(id);
            if (deletedRecipe is null)
            {
                return null;
            }
            _db.Recipes.Remove(deletedRecipe);
            await _db.SaveChangesAsync();
            return deletedRecipe;
        }
    }
}
