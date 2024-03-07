using Fire_Kitchen.Models.DTO;

namespace Fire_Kitchen.Services
{
    public interface IAuthService
    {
        Task<LoginResponseDTO> Login(LoginRequestDTO loginRequestDTO);
        Task<ResponseDTO> Register(RegisterRequestDTO registerRequestDTO);
    }
}
