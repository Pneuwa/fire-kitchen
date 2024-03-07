namespace Fire_Kitchen.Models.DTO
{
    public class LoginResponseDTO
    {
        public UserDTO User { get; set; }
        public string Token { get; set; }
        public bool IsError { get; set; } = false;
        public string Message { get; set; } = string.Empty;
    }
}
