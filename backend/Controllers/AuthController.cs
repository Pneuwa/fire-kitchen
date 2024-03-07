using Fire_Kitchen.Models.DTO;
using Fire_Kitchen.Services;
using Microsoft.AspNetCore.Mvc;

namespace Fire_Kitchen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDTO registerRequestDTO)
        {
            var registerUser = await _authService.Register(registerRequestDTO);
            return Ok(registerUser);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO loginRequestDTO)
        {
            var loginUser = await _authService.Login(loginRequestDTO);
            return Ok(loginUser);
        }
    }
}
