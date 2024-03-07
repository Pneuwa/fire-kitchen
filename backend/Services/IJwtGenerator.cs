using Fire_Kitchen.Models.DTO;

namespace Fire_Kitchen.Services
{
    public interface IJwtGenerator
    {
        string GenerateToken(UserDTO userDTO);
    }
}
