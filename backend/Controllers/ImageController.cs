using Fire_Kitchen.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Fire_Kitchen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageRepository _imageRepository;

        public ImageController(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }
        [HttpPost]
        public async Task<IActionResult> UploadAsync(IFormFile formFile)
        {
            var imageUrl = await _imageRepository.UploadAsync(formFile);

            if (imageUrl == null)
            {
                return Problem("Something went wrong", null, (int)HttpStatusCode.InternalServerError);
            }

            return new JsonResult(new { link = imageUrl });
        }
    }
}
