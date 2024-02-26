namespace Fire_Kitchen.Models.DTO
{
    public class ResponseDTO
    {
        public object? Data { get; set; }
        public bool? Error { get; set; } = false;
        public string Message { get; set; } = string.Empty;
    }
}
