namespace Fire_Kitchen.Repositories
{
    public interface IImageRepository
    {
        Task<string> UploadAsync(IFormFile formFile);
    }
}
