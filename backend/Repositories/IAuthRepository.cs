using Fire_Kitchen.Models.Domain;

namespace Fire_Kitchen.Repositories
{
    public interface IAuthRepository
    {
        Task<RegisterResponse> RegisterAsync(RegisterRequest registerRequest);
        Task<User> LoginAsync(LoginRequest loginRequest);
    }
}
