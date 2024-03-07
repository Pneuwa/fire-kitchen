using Fire_Kitchen.Models.DTO;
using Fire_Kitchen.Services;
using Microsoft.AspNetCore.Mvc;

namespace Fire_Kitchen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeService _recipeService;

        public RecipeController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var recipes = await _recipeService.GetAll();
            return Ok(recipes);
        }
        [HttpGet]
        [Route("id")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var selectedRecipe = await _recipeService.GetById(id);
            if(selectedRecipe is null)
            {
                return NotFound();
            }
            return Ok(selectedRecipe);
        }
        [HttpGet]
        [Route("author")]
        public async Task<IActionResult> GetByAuthorId(string authorId)
        {
            var authorRecipes = await _recipeService.GetByAuthorId(authorId);
            if (authorRecipes is null)
            {
                return NotFound();
            }
            return Ok(authorRecipes);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] RecipeDTO recipeDTO)
        {
            await _recipeService.Create(recipeDTO);
            return Ok(recipeDTO);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] RecipeDTO recipeDTO)
        {
            var updatedRecipe = await _recipeService.UpdateById(recipeDTO);
            return Ok(updatedRecipe);
        }

        [HttpDelete]
        [Route("id")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var deletedRecipe = await _recipeService.DeleteById(id);
            return Ok(deletedRecipe);
        }
    }
}
