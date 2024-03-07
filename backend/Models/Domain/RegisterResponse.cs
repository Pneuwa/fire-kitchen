namespace Fire_Kitchen.Models.Domain
{
    public class RegisterResponse
    {
        public User User { get; set; }
        public bool IsError { get; set; } = false;
        public string Message { get; set; } = string.Empty;
    }
}
